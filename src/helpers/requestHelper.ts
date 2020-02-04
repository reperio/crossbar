import { QueryParams } from '../models/queryParams';
import { KeyValue } from '../models/keyValue';

function recursiveQueryString(key: string, value: string | number | KeyValue): string {
    if (typeof value !== 'object') {
        return `${key}=${value}&`;
    }
    return recursiveQueryString(key + '.' + value.key, value.value);
}

export function applyQueryParams(url: string, qp: QueryParams | any) {
    //TODO: remove type "any" (issue with using qpKey:any for a key in qp[qpKey])
    url += '?';
    for (const qpKey in qp) {
        const qpVal = qp[qpKey];

        //? Does qpVal need to be encoded? think of query param injection
        if (qpKey == 'filter' || qpKey == 'filter_not') {
            url += qpKey + '_' + recursiveQueryString(qpVal.key, qpVal.value);
        }
        else {
            url += `${qpKey}=${qpVal}&`;
        }
    }
    url = url.slice(0, -1);
    return url;
}