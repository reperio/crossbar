import { KeyValue } from './keyValue';

export interface QueryParams {
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