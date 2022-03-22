/* tslint:disable */
/* eslint-disable */
/**
 * Elastic Email REST API
 * This API is based on the REST API architecture, allowing the user to easily manage their data with this resource-based approach.    Every API call is established on which specific request type (GET, POST, PUT, DELETE) will be used.    The API has a limit of 20 concurrent connections and a hard timeout of 600 seconds per request.    To start using this API, you will need your Access Token (available <a target=\"_blank\" href=\"https://elasticemail.com/account#/settings/new/manage-api\">here</a>). Remember to keep it safe. Required access levels are listed in the given request’s description.    Downloadable library clients can be found in our Github repository <a target=\"_blank\" href=\"https://github.com/ElasticEmail?tab=repositories&q=%22rest+api%22+in%3Areadme\">here</a>
 *
 * The version of the OpenAPI document: 4.0.0
 * Contact: support@elasticemail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { InboundPayload } from '../ee-api-models';
// @ts-ignore
import { InboundRoute } from '../ee-api-models';
// @ts-ignore
import { SortOrderItem } from '../ee-api-models';
/**
 * InboundRouteApi - axios parameter creator
 * @export
 */
export const InboundRouteApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Deletes the Inbound Route. Required Access Level: ModifySettings
         * @summary Delete Route
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        inboundrouteByIdDelete: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('inboundrouteByIdDelete', 'id', id)
            const localVarPath = `/inboundroute/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * Load an Inbound Route. Required Access Level: ViewSettings
         * @summary Get Route
         * @param {string} id ID number of your attachment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        inboundrouteByIdGet: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('inboundrouteByIdGet', 'id', id)
            const localVarPath = `/inboundroute/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * Update the Inbound Route. Required Access Level: ModifySettings
         * @summary Update Route
         * @param {string} id 
         * @param {InboundPayload} inboundPayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        inboundrouteByIdPut: async (id: string, inboundPayload: InboundPayload, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('inboundrouteByIdPut', 'id', id)
            // verify required parameter 'inboundPayload' is not null or undefined
            assertParamExists('inboundrouteByIdPut', 'inboundPayload', inboundPayload)
            const localVarPath = `/inboundroute/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(inboundPayload, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get all your Inbound Routes. Required Access Level: ViewSettings
         * @summary Get Routes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        inboundrouteGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/inboundroute`;
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
         * Required Access Level: ViewSettings
         * @summary Update Sorting
         * @param {Array<SortOrderItem>} sortOrderItem Change the ordering of inbound routes for when matching the inbound
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        inboundrouteOrderPut: async (sortOrderItem: Array<SortOrderItem>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'sortOrderItem' is not null or undefined
            assertParamExists('inboundrouteOrderPut', 'sortOrderItem', sortOrderItem)
            const localVarPath = `/inboundroute/order`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(sortOrderItem, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create new Inbound Route. Required Access Level: ModifySettings
         * @summary Create Route
         * @param {InboundPayload} inboundPayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        inboundroutePost: async (inboundPayload: InboundPayload, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'inboundPayload' is not null or undefined
            assertParamExists('inboundroutePost', 'inboundPayload', inboundPayload)
            const localVarPath = `/inboundroute`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(inboundPayload, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * InboundRouteApi - functional programming interface
 * @export
 */
export const InboundRouteApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = InboundRouteApiAxiosParamCreator(configuration)
    return {
        /**
         * Deletes the Inbound Route. Required Access Level: ModifySettings
         * @summary Delete Route
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async inboundrouteByIdDelete(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.inboundrouteByIdDelete(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Load an Inbound Route. Required Access Level: ViewSettings
         * @summary Get Route
         * @param {string} id ID number of your attachment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async inboundrouteByIdGet(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InboundRoute>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.inboundrouteByIdGet(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update the Inbound Route. Required Access Level: ModifySettings
         * @summary Update Route
         * @param {string} id 
         * @param {InboundPayload} inboundPayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async inboundrouteByIdPut(id: string, inboundPayload: InboundPayload, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InboundRoute>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.inboundrouteByIdPut(id, inboundPayload, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get all your Inbound Routes. Required Access Level: ViewSettings
         * @summary Get Routes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async inboundrouteGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<InboundRoute>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.inboundrouteGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Required Access Level: ViewSettings
         * @summary Update Sorting
         * @param {Array<SortOrderItem>} sortOrderItem Change the ordering of inbound routes for when matching the inbound
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async inboundrouteOrderPut(sortOrderItem: Array<SortOrderItem>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<InboundRoute>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.inboundrouteOrderPut(sortOrderItem, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Create new Inbound Route. Required Access Level: ModifySettings
         * @summary Create Route
         * @param {InboundPayload} inboundPayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async inboundroutePost(inboundPayload: InboundPayload, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InboundRoute>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.inboundroutePost(inboundPayload, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * InboundRouteApi - factory interface
 * @export
 */
export const InboundRouteApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = InboundRouteApiFp(configuration)
    return {
        /**
         * Deletes the Inbound Route. Required Access Level: ModifySettings
         * @summary Delete Route
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        inboundrouteByIdDelete(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.inboundrouteByIdDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Load an Inbound Route. Required Access Level: ViewSettings
         * @summary Get Route
         * @param {string} id ID number of your attachment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        inboundrouteByIdGet(id: string, options?: any): AxiosPromise<InboundRoute> {
            return localVarFp.inboundrouteByIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Update the Inbound Route. Required Access Level: ModifySettings
         * @summary Update Route
         * @param {string} id 
         * @param {InboundPayload} inboundPayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        inboundrouteByIdPut(id: string, inboundPayload: InboundPayload, options?: any): AxiosPromise<InboundRoute> {
            return localVarFp.inboundrouteByIdPut(id, inboundPayload, options).then((request) => request(axios, basePath));
        },
        /**
         * Get all your Inbound Routes. Required Access Level: ViewSettings
         * @summary Get Routes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        inboundrouteGet(options?: any): AxiosPromise<Array<InboundRoute>> {
            return localVarFp.inboundrouteGet(options).then((request) => request(axios, basePath));
        },
        /**
         * Required Access Level: ViewSettings
         * @summary Update Sorting
         * @param {Array<SortOrderItem>} sortOrderItem Change the ordering of inbound routes for when matching the inbound
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        inboundrouteOrderPut(sortOrderItem: Array<SortOrderItem>, options?: any): AxiosPromise<Array<InboundRoute>> {
            return localVarFp.inboundrouteOrderPut(sortOrderItem, options).then((request) => request(axios, basePath));
        },
        /**
         * Create new Inbound Route. Required Access Level: ModifySettings
         * @summary Create Route
         * @param {InboundPayload} inboundPayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        inboundroutePost(inboundPayload: InboundPayload, options?: any): AxiosPromise<InboundRoute> {
            return localVarFp.inboundroutePost(inboundPayload, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * InboundRouteApi - interface
 * @export
 * @interface InboundRouteApi
 */
export interface InboundRouteApiInterface {
    /**
     * Deletes the Inbound Route. Required Access Level: ModifySettings
     * @summary Delete Route
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboundRouteApiInterface
     */
    inboundrouteByIdDelete(id: string, options?: AxiosRequestConfig): AxiosPromise<void>;

    /**
     * Load an Inbound Route. Required Access Level: ViewSettings
     * @summary Get Route
     * @param {string} id ID number of your attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboundRouteApiInterface
     */
    inboundrouteByIdGet(id: string, options?: AxiosRequestConfig): AxiosPromise<InboundRoute>;

    /**
     * Update the Inbound Route. Required Access Level: ModifySettings
     * @summary Update Route
     * @param {string} id 
     * @param {InboundPayload} inboundPayload 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboundRouteApiInterface
     */
    inboundrouteByIdPut(id: string, inboundPayload: InboundPayload, options?: AxiosRequestConfig): AxiosPromise<InboundRoute>;

    /**
     * Get all your Inbound Routes. Required Access Level: ViewSettings
     * @summary Get Routes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboundRouteApiInterface
     */
    inboundrouteGet(options?: AxiosRequestConfig): AxiosPromise<Array<InboundRoute>>;

    /**
     * Required Access Level: ViewSettings
     * @summary Update Sorting
     * @param {Array<SortOrderItem>} sortOrderItem Change the ordering of inbound routes for when matching the inbound
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboundRouteApiInterface
     */
    inboundrouteOrderPut(sortOrderItem: Array<SortOrderItem>, options?: AxiosRequestConfig): AxiosPromise<Array<InboundRoute>>;

    /**
     * Create new Inbound Route. Required Access Level: ModifySettings
     * @summary Create Route
     * @param {InboundPayload} inboundPayload 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboundRouteApiInterface
     */
    inboundroutePost(inboundPayload: InboundPayload, options?: AxiosRequestConfig): AxiosPromise<InboundRoute>;

}

/**
 * InboundRouteApi - object-oriented interface
 * @export
 * @class InboundRouteApi
 * @extends {BaseAPI}
 */
export class InboundRouteApi extends BaseAPI implements InboundRouteApiInterface {
    /**
     * Deletes the Inbound Route. Required Access Level: ModifySettings
     * @summary Delete Route
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboundRouteApi
     */
    public inboundrouteByIdDelete(id: string, options?: AxiosRequestConfig) {
        return InboundRouteApiFp(this.configuration).inboundrouteByIdDelete(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Load an Inbound Route. Required Access Level: ViewSettings
     * @summary Get Route
     * @param {string} id ID number of your attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboundRouteApi
     */
    public inboundrouteByIdGet(id: string, options?: AxiosRequestConfig) {
        return InboundRouteApiFp(this.configuration).inboundrouteByIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update the Inbound Route. Required Access Level: ModifySettings
     * @summary Update Route
     * @param {string} id 
     * @param {InboundPayload} inboundPayload 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboundRouteApi
     */
    public inboundrouteByIdPut(id: string, inboundPayload: InboundPayload, options?: AxiosRequestConfig) {
        return InboundRouteApiFp(this.configuration).inboundrouteByIdPut(id, inboundPayload, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get all your Inbound Routes. Required Access Level: ViewSettings
     * @summary Get Routes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboundRouteApi
     */
    public inboundrouteGet(options?: AxiosRequestConfig) {
        return InboundRouteApiFp(this.configuration).inboundrouteGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Required Access Level: ViewSettings
     * @summary Update Sorting
     * @param {Array<SortOrderItem>} sortOrderItem Change the ordering of inbound routes for when matching the inbound
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboundRouteApi
     */
    public inboundrouteOrderPut(sortOrderItem: Array<SortOrderItem>, options?: AxiosRequestConfig) {
        return InboundRouteApiFp(this.configuration).inboundrouteOrderPut(sortOrderItem, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Create new Inbound Route. Required Access Level: ModifySettings
     * @summary Create Route
     * @param {InboundPayload} inboundPayload 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InboundRouteApi
     */
    public inboundroutePost(inboundPayload: InboundPayload, options?: AxiosRequestConfig) {
        return InboundRouteApiFp(this.configuration).inboundroutePost(inboundPayload, options).then((request) => request(this.axios, this.basePath));
    }
}
