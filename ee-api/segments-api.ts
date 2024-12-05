/* tslint:disable */
/* eslint-disable */
/**
 * Elastic Email REST API
 * This API is based on the REST API architecture, allowing the user to easily manage their data with this resource-based approach.    Every API call is established on which specific request type (GET, POST, PUT, DELETE) will be used.    The API has a limit of 20 concurrent connections and a hard timeout of 600 seconds per request.    To start using this API, you will need your Access Token (available <a target=\"_blank\" href=\"https://app.elasticemail.com/marketing/settings/new/manage-api\">here</a>). Remember to keep it safe. Required access levels are listed in the given request’s description.    Downloadable library clients can be found in our Github repository <a target=\"_blank\" href=\"https://github.com/ElasticEmail?tab=repositories&q=%22rest+api%22+in%3Areadme\">here</a>
 *
 * The version of the OpenAPI document: 4.0.0
 * Contact: support@elasticemail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { Segment } from '../ee-api-models';
// @ts-ignore
import { SegmentPayload } from '../ee-api-models';
/**
 * SegmentsApi - axios parameter creator
 * @export
 */
export const SegmentsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete an existing segment. Required Access Level: ModifyContacts
         * @summary Delete Segment
         * @param {string} name Name of your segment.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        segmentsByNameDelete: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('segmentsByNameDelete', 'name', name)
            const localVarPath = `/segments/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apikey required
            await setApiKeyToObject(localVarHeaderParameter, "X-ElasticEmail-ApiKey", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns details for the specified segment. Required Access Level: ViewContacts
         * @summary Load Segment
         * @param {string} name Name of the segment you want to load. Will load all contacts if the \&#39;All Contacts\&#39; name has been provided
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        segmentsByNameGet: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('segmentsByNameGet', 'name', name)
            const localVarPath = `/segments/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apikey required
            await setApiKeyToObject(localVarHeaderParameter, "X-ElasticEmail-ApiKey", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Rename or change RULE for your segment. Required Access Level: ModifyContacts
         * @summary Update Segment
         * @param {string} name Name of your segment.
         * @param {SegmentPayload} segmentPayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        segmentsByNamePut: async (name: string, segmentPayload: SegmentPayload, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('segmentsByNamePut', 'name', name)
            // verify required parameter 'segmentPayload' is not null or undefined
            assertParamExists('segmentsByNamePut', 'segmentPayload', segmentPayload)
            const localVarPath = `/segments/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apikey required
            await setApiKeyToObject(localVarHeaderParameter, "X-ElasticEmail-ApiKey", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(segmentPayload, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of all your available Segments. Required Access Level: ViewContacts
         * @summary Load Segments
         * @param {number} [limit] Maximum number of returned items.
         * @param {number} [offset] How many items should be returned ahead.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        segmentsGet: async (limit?: number, offset?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/segments`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apikey required
            await setApiKeyToObject(localVarHeaderParameter, "X-ElasticEmail-ApiKey", configuration)

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Add a new segment, based on specified RULE. Required Access Level: ModifyContacts
         * @summary Add Segment
         * @param {SegmentPayload} segmentPayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        segmentsPost: async (segmentPayload: SegmentPayload, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'segmentPayload' is not null or undefined
            assertParamExists('segmentsPost', 'segmentPayload', segmentPayload)
            const localVarPath = `/segments`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apikey required
            await setApiKeyToObject(localVarHeaderParameter, "X-ElasticEmail-ApiKey", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(segmentPayload, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SegmentsApi - functional programming interface
 * @export
 */
export const SegmentsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SegmentsApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete an existing segment. Required Access Level: ModifyContacts
         * @summary Delete Segment
         * @param {string} name Name of your segment.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async segmentsByNameDelete(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.segmentsByNameDelete(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SegmentsApi.segmentsByNameDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns details for the specified segment. Required Access Level: ViewContacts
         * @summary Load Segment
         * @param {string} name Name of the segment you want to load. Will load all contacts if the \&#39;All Contacts\&#39; name has been provided
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async segmentsByNameGet(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Segment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.segmentsByNameGet(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SegmentsApi.segmentsByNameGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Rename or change RULE for your segment. Required Access Level: ModifyContacts
         * @summary Update Segment
         * @param {string} name Name of your segment.
         * @param {SegmentPayload} segmentPayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async segmentsByNamePut(name: string, segmentPayload: SegmentPayload, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Segment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.segmentsByNamePut(name, segmentPayload, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SegmentsApi.segmentsByNamePut']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of all your available Segments. Required Access Level: ViewContacts
         * @summary Load Segments
         * @param {number} [limit] Maximum number of returned items.
         * @param {number} [offset] How many items should be returned ahead.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async segmentsGet(limit?: number, offset?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Segment>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.segmentsGet(limit, offset, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SegmentsApi.segmentsGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Add a new segment, based on specified RULE. Required Access Level: ModifyContacts
         * @summary Add Segment
         * @param {SegmentPayload} segmentPayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async segmentsPost(segmentPayload: SegmentPayload, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Segment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.segmentsPost(segmentPayload, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SegmentsApi.segmentsPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SegmentsApi - factory interface
 * @export
 */
export const SegmentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SegmentsApiFp(configuration)
    return {
        /**
         * Delete an existing segment. Required Access Level: ModifyContacts
         * @summary Delete Segment
         * @param {string} name Name of your segment.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        segmentsByNameDelete(name: string, options?: any): AxiosPromise<void> {
            return localVarFp.segmentsByNameDelete(name, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns details for the specified segment. Required Access Level: ViewContacts
         * @summary Load Segment
         * @param {string} name Name of the segment you want to load. Will load all contacts if the \&#39;All Contacts\&#39; name has been provided
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        segmentsByNameGet(name: string, options?: any): AxiosPromise<Segment> {
            return localVarFp.segmentsByNameGet(name, options).then((request) => request(axios, basePath));
        },
        /**
         * Rename or change RULE for your segment. Required Access Level: ModifyContacts
         * @summary Update Segment
         * @param {string} name Name of your segment.
         * @param {SegmentPayload} segmentPayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        segmentsByNamePut(name: string, segmentPayload: SegmentPayload, options?: any): AxiosPromise<Segment> {
            return localVarFp.segmentsByNamePut(name, segmentPayload, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all your available Segments. Required Access Level: ViewContacts
         * @summary Load Segments
         * @param {number} [limit] Maximum number of returned items.
         * @param {number} [offset] How many items should be returned ahead.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        segmentsGet(limit?: number, offset?: number, options?: any): AxiosPromise<Array<Segment>> {
            return localVarFp.segmentsGet(limit, offset, options).then((request) => request(axios, basePath));
        },
        /**
         * Add a new segment, based on specified RULE. Required Access Level: ModifyContacts
         * @summary Add Segment
         * @param {SegmentPayload} segmentPayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        segmentsPost(segmentPayload: SegmentPayload, options?: any): AxiosPromise<Segment> {
            return localVarFp.segmentsPost(segmentPayload, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SegmentsApi - interface
 * @export
 * @interface SegmentsApi
 */
export interface SegmentsApiInterface {
    /**
     * Delete an existing segment. Required Access Level: ModifyContacts
     * @summary Delete Segment
     * @param {string} name Name of your segment.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SegmentsApiInterface
     */
    segmentsByNameDelete(name: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;

    /**
     * Returns details for the specified segment. Required Access Level: ViewContacts
     * @summary Load Segment
     * @param {string} name Name of the segment you want to load. Will load all contacts if the \&#39;All Contacts\&#39; name has been provided
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SegmentsApiInterface
     */
    segmentsByNameGet(name: string, options?: RawAxiosRequestConfig): AxiosPromise<Segment>;

    /**
     * Rename or change RULE for your segment. Required Access Level: ModifyContacts
     * @summary Update Segment
     * @param {string} name Name of your segment.
     * @param {SegmentPayload} segmentPayload 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SegmentsApiInterface
     */
    segmentsByNamePut(name: string, segmentPayload: SegmentPayload, options?: RawAxiosRequestConfig): AxiosPromise<Segment>;

    /**
     * Returns a list of all your available Segments. Required Access Level: ViewContacts
     * @summary Load Segments
     * @param {number} [limit] Maximum number of returned items.
     * @param {number} [offset] How many items should be returned ahead.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SegmentsApiInterface
     */
    segmentsGet(limit?: number, offset?: number, options?: RawAxiosRequestConfig): AxiosPromise<Array<Segment>>;

    /**
     * Add a new segment, based on specified RULE. Required Access Level: ModifyContacts
     * @summary Add Segment
     * @param {SegmentPayload} segmentPayload 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SegmentsApiInterface
     */
    segmentsPost(segmentPayload: SegmentPayload, options?: RawAxiosRequestConfig): AxiosPromise<Segment>;

}

/**
 * SegmentsApi - object-oriented interface
 * @export
 * @class SegmentsApi
 * @extends {BaseAPI}
 */
export class SegmentsApi extends BaseAPI implements SegmentsApiInterface {
    /**
     * Delete an existing segment. Required Access Level: ModifyContacts
     * @summary Delete Segment
     * @param {string} name Name of your segment.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SegmentsApi
     */
    public segmentsByNameDelete(name: string, options?: RawAxiosRequestConfig) {
        return SegmentsApiFp(this.configuration).segmentsByNameDelete(name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns details for the specified segment. Required Access Level: ViewContacts
     * @summary Load Segment
     * @param {string} name Name of the segment you want to load. Will load all contacts if the \&#39;All Contacts\&#39; name has been provided
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SegmentsApi
     */
    public segmentsByNameGet(name: string, options?: RawAxiosRequestConfig) {
        return SegmentsApiFp(this.configuration).segmentsByNameGet(name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Rename or change RULE for your segment. Required Access Level: ModifyContacts
     * @summary Update Segment
     * @param {string} name Name of your segment.
     * @param {SegmentPayload} segmentPayload 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SegmentsApi
     */
    public segmentsByNamePut(name: string, segmentPayload: SegmentPayload, options?: RawAxiosRequestConfig) {
        return SegmentsApiFp(this.configuration).segmentsByNamePut(name, segmentPayload, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all your available Segments. Required Access Level: ViewContacts
     * @summary Load Segments
     * @param {number} [limit] Maximum number of returned items.
     * @param {number} [offset] How many items should be returned ahead.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SegmentsApi
     */
    public segmentsGet(limit?: number, offset?: number, options?: RawAxiosRequestConfig) {
        return SegmentsApiFp(this.configuration).segmentsGet(limit, offset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Add a new segment, based on specified RULE. Required Access Level: ModifyContacts
     * @summary Add Segment
     * @param {SegmentPayload} segmentPayload 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SegmentsApi
     */
    public segmentsPost(segmentPayload: SegmentPayload, options?: RawAxiosRequestConfig) {
        return SegmentsApiFp(this.configuration).segmentsPost(segmentPayload, options).then((request) => request(this.axios, this.basePath));
    }
}

