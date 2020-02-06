import { Crossbar } from './connector';
import { QueryParams } from '../models/queryParams';
import { applyQueryParams } from '../helpers/requestHelper';

export class FaxesService {
    constructor(public connector: Crossbar) {}

    /**
     * GET {baseURL}/v2/accounts/{accountId}/faxes/inbox
     * @param {QueryParams} queryParams global API query paramters
     */
    async getFaxesFromInbox(queryParams?: QueryParams) {
        let route = `/faxes/inbox`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    /**
     * GET {baseURL}/v2/accounts/{accountId}/faxes/inbox/{faxId}
     * @param {string} id fax id
     * @param {QueryParams} queryParams global API query paramters
     */
    async getFaxById(id: string, queryParams?: QueryParams) {
        let route = `/faxes/inbox/${id}`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    /**
     * GET {baseURL}/v2/accounts/{accountId}/faxes/inbox/{faxId}/attachment
     * @param {string} id fax id
     * @param {QueryParams} queryParams global API query paramters
     */
    async getFaxPayload(id: string, queryParams?: QueryParams) {
        let route = `/faxes/inbox/${id}/attachment`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    /**
     * PUT {baseURL}/v2/accounts/{accountId}/faxes
     * @param {any} data fax data
     */
    async createFax(data: any) {
        let route = `/faxes`;
        return await this.connector.axios.put(route, {data});
    }

    /**
     * DELETE {baseURL}/v2/accounts/{accountId}/faxes/inbox/{faxId}
     * @param {string} id fax id
     */
    async deleteFax(id: string) {
        let route = `/faxes/inbox/${id}`;
        return await this.connector.axios.delete(route);
    }

    /**
     * GET {baseURL}/v2/accounts/{accountId}/faxes/inbox/{faxId}
     * @param {string} id fax id
     */
    async deleteFaxPayload(id: string) {
        let route = `/faxes/inbox/${id}/attachment`;
        return await this.connector.axios.delete(route);
    }
}
