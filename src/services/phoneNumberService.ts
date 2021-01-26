import { Crossbar } from './connector';
import { QueryParams } from '../models/queryParams';
import { applyQueryParams } from '../helpers/requestHelper';

export class PhoneNumberService {
    constructor(public connector: Crossbar) {}

    /**
     * PUT {baseURL}/v2/accounts/{accountId}/phone_numbers/collection
     * @param {any} data phoneNumber data
     */
    async addPhoneNumbers(data: any) {
        let route = `/phone_numbers/collection`;
        return await this.connector.axios.put(route, { data });
    }
    /**
     * PUT {baseURL}/v2/accounts/{accountId}/phone_numbers/{number}
     * @param {any} data phoneNumber data
     */
    async addSinglePhoneNumber(number: string, data: any) {
        let route = `/phone_numbers/${number}`;
        return await this.connector.axios.put(route, { data });
    }

    /**
     * GET {baseURL}/v2/accounts/{accountId}/phone_numbers
     * @param {QueryParams} queryParams global API query paramters
     */
    async getPhoneNumbers(queryParams?: QueryParams) {
        let route = `/phone_numbers`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }
    /**
     * GET {baseURL}/v2/accounts/{accountId}/phone_numbers/{number}
     * @param {string} phone number to query
     * @param {QueryParams} queryParams global API query paramters
     */
    async getPhoneNumberByNumber(number: string, queryParams?: QueryParams) {
        let route = `/phone_numbers/${number}`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }
}
