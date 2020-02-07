import { Crossbar } from './connector';
import { QueryParams } from '../models/queryParams';
import { applyQueryParams } from '../helpers/requestHelper';

export class RecordingService {
    constructor(public connector: Crossbar) {}

    /**
     * GET {baseURL}/v2/accounts{accountId}/recordings
     * @param {QueryParams} queryParams global API query paramters
     */
    async createApiAuth(queryParams?: QueryParams) {
        let route = `/recordings`;
        if (queryParams) route = applyQueryParams(route, queryParams);
        return await this.connector.axios.put(route);
    }
}
