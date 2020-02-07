import { Crossbar } from './connector';

export class UserAuthService {
    constructor(public connector: Crossbar) {}

    /**
     * PUT {baseURL}/v2/user_auth
     * @param {any} data 
     */
    async createUserAuth(data: any) {
        let route = `/user_auth`;
        return await this.connector.axios.put(route, {data}, this.connector.axiosNonAccountConfig);
    }
}
