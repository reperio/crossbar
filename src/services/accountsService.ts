import { Crossbar } from './connector';

interface QueryParams {
    filter_not: {
        key: string;
        value: string;
    };
    filter: {
        key: string;
        value: string;
    };
    has_key: string;
    has_missing: string;
    has_value: string;
    created_from: number;
    created_to: number;
    modified_from: number;
    modified_to: number;
}

function applyQueryParams(qp: QueryParams) {
    
}

export class AccountsService {
    constructor(public connector: Crossbar) {}

    async getAccountById(id: string) {
        return await this.connector.axios.get(`/accounts/${id}`);
    }

    async getAccountChildren(id: string) {
        return await this.connector.axios.get(`/accounts/${id}/children`);
    }

    async getAccountDescendants(id: string) {
        return await this.connector.axios.get(`/accounts/${id}/descendants`);
    }

    async getAccountDirectories(id: string) {
        return await this.connector.axios.get(`/accounts/${id}/descendants`);
    }

    async getAccountChannels(id: string) {
        return await this.connector.axios.get(`/accounts/${id}/channels`);
    }

    async getAccountLimits(id: string) {
        return await this.connector.axios.get(`/accounts/${id}/limits`);
    }
}