import { Crossbar } from './connector';
import { QueryParams } from '../models/queryParams';
import { applyQueryParams } from '../helpers/requestHelper';

export class AccountsService {
    constructor(public connector: Crossbar) {}

    /**
     * /v2/accounts/{id}
     * @param {string} id account id
     * @param {QueryParams} queryParams global API query paramters
     */
    async getAccountById(id: string, queryParams?: QueryParams) {
        let route = `/accounts/${id}`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    /**
     * /v2/accounts/{id}/children
     * @param {string} id account id
     * @param {QueryParams} queryParams global API query paramters
     */
    async getAccountChildren(id: string, queryParams?: QueryParams) {
        let route = `/accounts/${id}/children`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    /**
     * /v2/accounts/{id}/descentdants
     * @param {string} id account id
     * @param {QueryParams} queryParams global API query paramters
     */
    async getAccountDescendants(id: string, queryParams?: QueryParams) {
        let route = `/accounts/${id}/descendants`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    /**
     * /v2/accounts/{id}/directories
     * @param {string} id account id
     * @param {QueryParams} queryParams global API query paramters
     */
    async getAccountDirectories(id: string, queryParams?: QueryParams) {
        let route = `/accounts/${id}/directories`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    /**
     * /v2/accounts/{id}/channels
     * @param {string} id account id
     * @param {QueryParams} queryParams global API query paramters
     */
    async getAccountChannels(id: string, queryParams?: QueryParams) {
        let route = `/accounts/${id}/channels`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    /**
     * /v2/accounts/{id}/limits
     * @param {string} id account id
     * @param {QueryParams} queryParams global API query paramters
     */
    async getAccountLimits(id: string, queryParams?: QueryParams) {
        let route = `/accounts/${id}/limits`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }
}