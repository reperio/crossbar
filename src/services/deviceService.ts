import { Crossbar } from './connector';
import { QueryParams } from '../models/queryParams';
import { applyQueryParams } from '../helpers/requestHelper';

export class DeviceService {
    constructor(public connector: Crossbar) {}

    /**
     * GET {baseURL}/v2/accounts/{accountId}/devices
     * @param {QueryParams} queryParams global API query paramters
     */
    async getDevices(queryParams?: QueryParams) {
        let route = `/devices`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    /**
     * GET {baseURL}/v2/accounts/{accountId}/devices/{deviceId}
     * @param {string} id device id
     * @param {QueryParams} queryParams global API query paramters
     */
    async getDeviceById(id: string, queryParams?: QueryParams) {
        let route = `/devices/${id}`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    /**
     * PUT {baseURL}/v2/accounts/{accountId}/devices
     * @param {any} data device data
     */
    async createDevice(data: any) {
        let route = `/devices`;
        return await this.connector.axios.put(route, {data});
    }

    /**
     * PATCH {baseURL}/v2/accounts/{accountId}/devices/{deviceId}
     * @param {string} id device id
     * @param {any} data device data
     */
    async patchDevice(id: string, data: any) {
        let route = `/devices/${id}`;
        return await this.connector.axios.patch(route, {data});
    }

    /**
     * POST {baseURL}/v2/accounts/{accountId}/devices/{deviceId}
     * @param {string} id device id
     * @param {any} data device data
     */
    async updateDevice(id: string, data: any) {
        let route = `/devices/${id}`;
        return await this.connector.axios.post(route, {data});
    }

    /**
     * DELETE {baseURL}/v2/accounts/{accountId}/devices/{deviceId}
     * @param {string} id device id
     */
    async deleteDevice(id: string) {
        let route = `/devices/${id}`;
        return await this.connector.axios.get(route);
    }

    /**
     * PUT {baseURL}/v2/accounts/{accountId}/devices/{deviceId}/notify
     * @param {string} id device id
     * @param {any} data notify data
     */
    async sendSipNotifyToDevice(id: string, data: any) {
        let route = `/devices/${id}/notify`;
        return await this.connector.axios.put(route, {data});
    }

    /**
     * GET {baseURL}/v2/accounts/{accountId}/devices/status
     * @param {QueryParams} queryParams global API query paramters
     */
    async getDevicesRegistrationStatus(queryParams?: QueryParams) {
        let route = `/devices/status`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    /**
     * POST {baseURL}/v2/accounts/{accountId}/devices/{deviceId}/sync
     * @param {string} id device id
     */
    async rebootDevice(id: string) {
        let route = `/devices/${id}/sync`;
        return await this.connector.axios.post(route);
    }
}
