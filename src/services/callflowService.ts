import { Crossbar } from './connector';
import { QueryParams } from '../models/queryParams';
import { applyQueryParams } from '../helpers/requestHelper';

export class CallflowService {
    constructor(public connector: Crossbar) {}

    /**
     * GET {baseURL}/v2/accounts/{accountId}/callflows
     * @param {QueryParams} queryParams global API query paramters
     */
    async getCallflows(queryParams?: QueryParams) {
        let route = `/callflows`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    /**
     * GET {baseURL}/v2/accounts/{accountId}/callflows/{id}
     * @param {string} id callflow id
     * @param {QueryParams} queryParams global API query paramters
     */
    async getCallflowById(id: string, queryParams?: QueryParams) {
        let route = `/callflows/${id}`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    /**
     * DELETE {baseURL}/v2/accounts/{accountId}/callflows/{id}
     * @param {string} id callflow id
     * @param {QueryParams} queryParams global API query paramters
     */
    async removeCallflowById(id: string, queryParams?: QueryParams) {
        let route = `/callflows/${id}`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.delete(route);
    }

    /**
     * PATCH {baseURL}/v2/accounts/{accountId}/callflows/{id}
     * @param {string} id callflow id
     * @param {any} data callflow data
     */
    async patchCallflowById(id: string, data: any) {
        let route = `/callflows/${id}`;
        return await this.connector.axios.patch(route, {data});
    }
}
