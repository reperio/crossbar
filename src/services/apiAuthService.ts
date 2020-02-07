import { Crossbar } from './connector';
import { QueryParams } from '../models/queryParams';
import { applyQueryParams } from '../helpers/requestHelper';

export class ApiAuthService {
    constructor(public connector: Crossbar) {}

    /**
     * GET {baseURL}/v2/api_auth
     * @param {string} api_key private API key
     */
    async createApiAuth(api_key: string, queryParams?: QueryParams) {
        let route = `/api_auth`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        const body = {data: {api_key}};
        const config = {...this.connector.axios.defaults, baseURL: this.connector.config.baseURL};
        return await this.connector.axios.put(route, body, config);
    }
}
