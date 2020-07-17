import { Crossbar } from './connector';
import { QueryParams } from '../models/queryParams';
import { applyQueryParams } from '../helpers/requestHelper';

export class VoicemailService {
    constructor(public connector: Crossbar) {}

    /**
     * GET {baseURL}/v2/accounts/{accountId}/vmboxes
     * @param {QueryParams} queryParams global API query paramters
     */
    async getVmboxes(queryParams?: QueryParams) {
        let route = `/vmboxes`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    /**
     * GET {baseURL}/v2/accounts/{accountId}/vmboxes/{vmboxid}
     * @param {string} id user id
     * @param {QueryParams} queryParams global API query paramters
     */
    async getVmboxById(id: string, queryParams?: QueryParams) {
        let route = `/vmboxes/${id}`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    /**
     * PUT {baseURL}/v2/accounts/{accountId}/vmboxes
     * @param {any} data user data
     */
    async createVmbox(data: any) {
        let route = `/vmboxes`;
        return await this.connector.axios.put(route, {data});
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
     * DELETE {baseURL}/v2/accounts/{accountId}/vmboxes/{vmboxid}
     * @param {string} id vmbox id
     */
    async deleteVmboxById(id: string) {
        let route = `/vmboxes/${id}`;
        return await this.connector.axios.delete(route);
    }

    /**
     * GET {baseURL}/v2/accounts/{accountId}/vmboxes/{vmboxid}/messages
     * @param {string} id vmbox id
     */
    async getMessagesFromVmbox(id: string) {
        let route = `/vmboxes/${id}/messages`;
        return await this.connector.axios.get(route);
    }

    /**
     * DELETE {baseURL}/v2/accounts/{accountId}/vmboxes/{vmboxid}/messages/{msgid}
     * @param {string} id vmbox id
     * @param {string} msgid msg id
     */
    async deleteMessageFromVmbox(id: string, msgid: string) {
        let route = `/vmboxes/${id}/messages/${msgid}`;
        return await this.connector.axios.delete(route);
    }

    /**
     * GET {baseURL}/v2/accounts/{accountId}/vmboxes/{vmboxid}/messages/{msgid}
     * @param {string} id vmbox id
     * @param {string} msgid msg id
     */
    async getMessageFromVmbox(id: string, msgid: string) {
        let route = `/vmboxes/${id}/messages/${msgid}`;
        return await this.connector.axios.get(route);
    }

    /**
     * POST {baseURL}/v2/accounts/{accountId}/vmboxes/{vmboxid}/messages/{msgid}
     * @param {string} id vmbox id
     * @param {any} data vmbox data
     * @param {string} msgid msg id
     */
    async patchVmboxMessage(id: string, msgid: string, data: any) {
        let route = `/vmboxes/${id}/messages/${msgid}`;
        return await this.connector.axios.post(route, {data});
    }

}
