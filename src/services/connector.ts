import axiosStatic, { AxiosInstance } from 'axios';
import { AccountsService } from "./accountsService";

export interface CrossbarConfig {
    baseURL: string;
    accountId: string;
    authToken?: string;
};

const defaultCrossbarConfig: CrossbarConfig = {
    baseURL: "",
    accountId: "",
};

export class Crossbar {
    axios: AxiosInstance;
    config: CrossbarConfig;

    readonly accountsService: AccountsService;

    constructor(config?: Partial<CrossbarConfig>) {
        this.config = { ...defaultCrossbarConfig, ...config };
        this.axios = axiosStatic.create({
            baseURL: `${this.config.baseURL}/accounts/${this.config.accountId}`,
            withCredentials: true
        });

        this.setAxiosInterceptors();
        this.accountsService = new AccountsService(this);
    }

    setAxiosInterceptors() {
        this.axios.interceptors.request.use(async config => {
            if (this.config.authToken != null && this.config.authToken  != '') {
                config.headers['X-Auth-Token'] = this.config.authToken
            }
            return config;
        });
    }
}