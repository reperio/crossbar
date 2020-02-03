import { Crossbar } from './connector';

interface KeyValue {
    key: string;
    value: string | number | KeyValue;
}

interface QueryParams {
    filter_not: KeyValue;
    filter: KeyValue;
    has_key: string;
    has_missing: string;
    has_value: string;
    created_from: number;
    created_to: number;
    modified_from: number;
    modified_to: number;
}

function recurQueryString(key: string, value: string | number | KeyValue): string {
    if (typeof value !== 'object') {
        return `${key}=${value}&`;
    }
    return recurQueryString(key + '.' + value.key, value.value);
}

function applyQueryParams(url: string, qp: QueryParams | any) { //TODO: remove type "any"
    for (const qpKey in qp) {
        const qpVal = qp[qpKey];
        
        if (qpKey == 'filter' || qpKey == 'filter_not') {
            url += qpKey + '_' + recurQueryString(qpVal.key, qpVal.value);
        }
        else {
            url += `${qpKey}=${qpVal}&`;
        }
    }
    url = url.slice(0, -1);
    return url;
}

export class AccountsService {
    constructor(public connector: Crossbar) {}

    async getAccountById(id: string, queryParams?: QueryParams) {
        let route = `/accounts/${id}`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    async getAccountChildren(id: string, queryParams?: QueryParams) {
        let route = `/accounts/${id}/children`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    async getAccountDescendants(id: string, queryParams?: QueryParams) {
        let route = `/accounts/${id}/descendants`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    async getAccountDirectories(id: string, queryParams?: QueryParams) {
        let route = `/accounts/${id}/directories`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    async getAccountChannels(id: string, queryParams?: QueryParams) {
        let route = `/accounts/${id}/channels`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }

    async getAccountLimits(id: string, queryParams?: QueryParams) {
        let route = `/accounts/${id}/limits`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.get(route);
    }
}