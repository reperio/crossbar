import { Crossbar } from './connector';
import { QueryParams } from '../models/queryParams';
import { applyQueryParams } from '../helpers/requestHelper';

export class CallInspectorService {
    constructor(public connector: Crossbar) {}

    /**
     * GET {baseURL}/v2/accounts/{accountId}/call_inspector/{id}
     * @param {string} id call id
     * @param {QueryParams} queryParams global API query paramters
     */
    async getCallInspectorById(id: string, queryParams?: QueryParams) {
        let route = `/call_inspector/${id}`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    /**
     * GET {baseURL}/v2/accounts/{accountId}/call_inspector
     * @param {QueryParams} queryParams global API query paramters
     */
    async getCallInspectors(queryParams?: QueryParams) {
        let route = `/call_inspector`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }
}
