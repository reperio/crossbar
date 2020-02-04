import { Crossbar } from './connector';
import { QueryParams } from '../models/queryParams';
import { applyQueryParams } from '../helpers/requestHelper';

export class CallflowsService {
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
}
