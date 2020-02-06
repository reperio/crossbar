import axiosStatic, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { AccountService } from "./accountService";
import { ApiAuthService } from "./apiAuthService";
import { CallflowService } from "./callflowService";
import { CallInspectorService } from "./callInspectorService";
import { CdrService } from "./cdrService";
import { DeviceService } from "./deviceService";
import { FaxService } from "./faxService";
import { UserAuthService } from "./userAuthService";
import { UserService } from "./userService";

export interface CrossbarConfig {
    baseURL: string;
    accountId: string;
    pvtApiKey?: string;
    authToken?: string;
};

const defaultCrossbarConfig: CrossbarConfig = {
    baseURL: "",
    accountId: "",
};

export class Crossbar {
    axios: AxiosInstance;
    config: CrossbarConfig;
    axiosNonAccountConfig: AxiosRequestConfig;

    readonly accountService: AccountService;
    readonly apiAuthService: ApiAuthService;
    readonly callflowService: CallflowService;
    readonly callInspectorService: CallInspectorService;
    readonly cdrService: CdrService;
    readonly deviceService: DeviceService;
    readonly faxService: FaxService;
    readonly userAuthService: UserAuthService;
    readonly userService: UserService;

    constructor(config?: Partial<CrossbarConfig>) {
        this.config = { ...defaultCrossbarConfig, ...config };
        this.axios = axiosStatic.create({
            baseURL: `${this.config.baseURL}/accounts/${this.config.accountId}`,
            withCredentials: true
        });

        this.axiosNonAccountConfig = {...this.axios.defaults, baseURL: this.config.baseURL};

        if (this.config.pvtApiKey && !this.config.authToken) {
            const authPutData = { data: { api_key: this.config.pvtApiKey } };
            this.axios.put('/api_auth', authPutData, this.axiosNonAccountConfig).then(authResponse => {
                this.config.authToken = authResponse.data.auth_token;
                this.setAxiosInterceptors();
            }).catch(authErr => {
                return Promise.reject(authErr);
            });
        } else {
            this.setAxiosInterceptors();
        }

        this.accountService = new AccountService(this);
        this.apiAuthService = new ApiAuthService(this);
        this.callflowService = new CallflowService(this);
        this.callInspectorService = new CallInspectorService(this);
        this.cdrService = new CdrService(this);
        this.deviceService = new DeviceService(this);
        this.faxService = new FaxService(this);
        this.userAuthService = new UserAuthService(this);
        this.userService = new UserService(this);
    }

    setAxiosInterceptors() {
        this.axios.interceptors.request.use(async config => {
            if (this.config.authToken != null && this.config.authToken != '') {
                config.headers['X-Auth-Token'] = this.config.authToken
            }
            return config;
        });

        this.axios.interceptors.response.use(response => response, async error => {
            let errResponse = error.response;
            if (errResponse.status === 401 && this.config.pvtApiKey) {
                const authPutData = { data: { api_key: this.config.pvtApiKey } };
                return this.axios.put('/api_auth', authPutData, this.axiosNonAccountConfig).then(authResponse => {
                    this.config.authToken = authResponse.data.auth_token;
                    this.setAxiosInterceptors();
                    errResponse.config.headers['X-Auth-Token'] = this.config.authToken;
                    return this.axios(errResponse.config);
                }).catch(authErr => {
                    return Promise.reject(authErr);
                });
            } else {
                return error;
            }
        });
    }
}