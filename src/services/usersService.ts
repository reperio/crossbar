import { Crossbar } from './connector';
import { QueryParams } from '../models/queryParams';
import { applyQueryParams } from '../helpers/requestHelper';

export class UsersService {
    constructor(public connector: Crossbar) {}

    /**
     * GET {baseURL}/v2/accounts/{accountId}/users
     * @param {QueryParams} queryParams global API query paramters
     */
    async getUsers(queryParams?: QueryParams) {
        let route = `/users`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    /**
     * GET {baseURL}/v2/accounts/{accountId}/users/{userId}
     * @param {string} id user id
     * @param {QueryParams} queryParams global API query paramters
     */
    async getUserById(id: string, queryParams?: QueryParams) {
        let route = `/users/${id}`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    /**
     * PUT {baseURL}/v2/accounts/{accountId}/users
     * @param {any} data user data
     */
    async createUser(data: any) {
        let route = `/users`;
        return await this.connector.axios.put(route, {data});
    }

    /**
     * PATCH {baseURL}/v2/accounts/{accountId}/users
     * @param {any} data user data
     */
    async patchUser(data: any) {
        let route = `/users`;
        return await this.connector.axios.patch(route, {data});
    }

    /**
     * POST {baseURL}/v2/accounts/{accountId}/users
     * @param {any} data full user data
     */
    async changeUser(data: any) {
        let route = `/users`;
        return await this.connector.axios.post(route, {data});
    }

    /**
     * DELETE {baseURL}/v2/accounts/{accountId}/users/{userId}
     * @param {string} id user id
     */
    async deleteUserById(id: string) {
        let route = `/users/${id}`;
        return await this.connector.axios.delete(route);
    }

    /**
     * GET {baseURL}/v2/accounts/{accountId}/users/{userId}/vcard
     * @param {string} id user id
     * @param {QueryParams} queryParams global API query paramters
     */
    async getUserVCard(id: string, queryParams?: QueryParams) {
        let route = `/users/${id}/vcard`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    /**
     * GET {baseURL}/v2/accounts/{accountId}/users/{userId}/cdrs
     * @param {string} id user id
     * @param {QueryParams} queryParams global API query paramters
     */
    async getUserCdrs(id: string, queryParams?: QueryParams) {
        let route = `/users/${id}/cdrs`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    /**
     * GET {baseURL}/v2/accounts/{accountId}/users/{userId}/cdrs
     * @param {string} id user id
     * @param {QueryParams} queryParams global API query paramters
     */
    async getUserCdrsCsv(id: string, queryParams?: QueryParams) {
        let route = `/users/${id}/cdrs`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        const config = this.connector.axios.defaults;
        config.headers['Accept'] = 'text/csv';
        return await this.connector.axios.get(route, config);
    }

    /**
     * GET {baseURL}/v2/accounts/{accountId}/users/{userId}/cdrs/interactions
     * @param {string} id user id
     * @param {QueryParams} queryParams global API query paramters
     */
    async getUserCdrInteractions(id: string, queryParams?: QueryParams) {
        let route = `/users/${id}/cdrs/interaction`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }
}
