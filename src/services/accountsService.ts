import { Crossbar } from './connector';
import { QueryParams } from '../models/queryParams';
import { applyQueryParams } from '../helpers/requestHelper';

export class AccountsService {
    constructor(public connector: Crossbar) {}

    /**
     * GET {baseURL}/v2/accounts/{accountId}
     * @param {QueryParams} queryParams global API query paramters
     */
    async getAccountById(queryParams?: QueryParams) {
        let route = ``;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    /**
     * GET {baseURL}/v2/accounts/{accountId}/children
     * @param {QueryParams} queryParams global API query paramters
     */
    async getAccountChildren(queryParams?: QueryParams) {
        let route = `/children`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    /**
     * GET {baseURL}/v2/accounts/{accountId}/descentdants
     * @param {QueryParams} queryParams global API query paramters
     */
    async getAccountDescendants(queryParams?: QueryParams) {
        let route = `/descendants`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    /**
     * GET {baseURL}/v2/accounts/{accountId}/directories
     * @param {QueryParams} queryParams global API query paramters
     */
    async getAccountDirectories(queryParams?: QueryParams) {
        let route = `/directories`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    /**
     * GET {baseURL}/v2/accounts/{accountId}/channels
     * @param {QueryParams} queryParams global API query paramters
     */
    async getAccountChannels(queryParams?: QueryParams) {
        let route = `/channels`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    /**
     * GET {baseURL}/v2/accounts/{accountId}/limits
     * @param {QueryParams} queryParams global API query paramters
     */
    async getAccountLimits(queryParams?: QueryParams) {
        let route = `/limits`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }
}