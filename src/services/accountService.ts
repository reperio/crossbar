import { Crossbar } from './connector';
import { QueryParams } from '../models/queryParams';
import { applyQueryParams } from '../helpers/requestHelper';

export class AccountService {
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
     * GET {baseURL}/v2/accounts/{accountId}/
     * @param {string} id account id
     * @param {any} data vmbox data
     */
    async patchAccount(id: string, data: any) {
        let route = `/${id}`;
        return await this.connector.axios.post(route, {data});
    }


    /**
     * POST {baseURL}/v2/accounts/{accountId}/vmboxes/{vmboxid}
     * @param {string} id vmbox id
     * @param {any} data vmbox data
     */
    async patchVmbox(id: string, data: any) {
        let route = `/vmboxes/${id}`;
        return await this.connector.axios.post(route, {data});
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

    /**
     * DELETE {baseURL}/v2/accounts/{accountId}/
     * @param {any} id account id
     */
    async deleteAccount(id: any) {
        let route = `/${id}`;
        return await this.connector.axios.delete(route);
    }

    /**
     * PUT {baseURL}/v2/accounts/{accountId}/
     * @param {any} id account id
     * @param {any} data child account data
     */
    async addChildToAccount(id: any, data: any) {
        let route = `/${id}`;
        return await this.connector.axios.put(route, {data});
    }

    /**
     * GET {baseURL}/v2/accounts/{accountId}/parents
     * @param {QueryParams} queryParams global API query paramters
     */
    async getAccountParents(queryParams?: QueryParams) {
        let route = `/parents`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }
}