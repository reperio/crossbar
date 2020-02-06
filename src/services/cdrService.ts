import { Crossbar } from './connector';
import { QueryParams } from '../models/queryParams';
import { applyQueryParams } from '../helpers/requestHelper';

export class CdrService {
    constructor(public connector: Crossbar) {}

    /**
     * GET {baseURL}/v2/accounts/{accountId}/cdrs
     * @param {QueryParams} queryParams global API query paramters
     */
    async getCdrs(queryParams?: QueryParams) {
        let route = `/cdrs`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    /**
     * GET {baseURL}/v2/accounts/{accountId}/cdrs
     * @param {QueryParams} queryParams global API query paramters
     */
    async getCdrsCsv(queryParams?: QueryParams) {
        let route = `/cdrs`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        const config = this.connector.axios.defaults;
        config.headers['Accept'] = 'text/csv';
        return await this.connector.axios.get(route, config);
    }

    /**
     * GET {baseURL}/v2/accounts/{accountId}/cdrs/{cdrId}
     * @param {string} id CDR id
     * @param {QueryParams} queryParams global API query paramters
     */
    async getCdrById(id: string, queryParams?: QueryParams) {
        let route = `/cdrs/${id}`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    /**
     * GET {baseURL}/v2/accounts/{accountId}/cdrs/interactions
     * @param {QueryParams} queryParams global API query paramters
     */
    async getCdrInteractions(queryParams?: QueryParams) {
        let route = `/cdrs/interaction`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    /**
     * GET {baseURL}/v2/accounts/{accountId}/cdrs/legs/{interactionId}
     * @param {string} id interaction id
     * @param {QueryParams} queryParams global API query paramters
     */
    async getCdrInteractionLegs(id: string, queryParams?: QueryParams) {
        let route = `/cdrs/legs/${id}`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }
}
