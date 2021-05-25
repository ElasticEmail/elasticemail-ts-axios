/* tslint:disable */
/* eslint-disable */
/**
 * Elastic Email REST API
 * This API is based on the REST API architecture, allowing the user to easily manage their data with this resource-based approach.    Every API call is established on which specific request type (GET, POST, PUT, DELETE) will be used.    To start using this API, you will need your Access Token (available <a target=\"_blank\" href=\"https://elasticemail.com/account#/settings/new/manage-api\">here</a>). Remember to keep it safe. Required access levels are listed in the given request’s description.    This is the documentation for REST API. If you’d like to read our legacy documentation regarding Web API v2 click <a target=\"_blank\" href=\"https://api.elasticemail.com/public/help\">here</a>.    Downloadable library clients can be found in our Github repository <a target=\"_blank\" href=\"https://github.com/ElasticEmail?tab=repositories&q=%22rest+api%22+in%3Areadme\">here</a>
 *
 * The version of the OpenAPI document: 4.0.0
 * Contact: support@elasticemail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ContactsList } from '../ee-api-models';
// @ts-ignore
import { EmailsPayload } from '../ee-api-models';
// @ts-ignore
import { ListPayload } from '../ee-api-models';
// @ts-ignore
import { ListUpdatePayload } from '../ee-api-models';
/**
 * ListsApi - axios parameter creator
 * @export
 */
export const ListsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Add existing Contacts to specified list. Required Access Level: ModifyContacts
         * @summary Add Contacts to List
         * @param {string} name Name of your list.
         * @param {EmailsPayload} emailsPayload Provide either rule or a list of emails, not both.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsByNameContactsPost: async (name: string, emailsPayload: EmailsPayload, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('listsByNameContactsPost', 'name', name)
            // verify required parameter 'emailsPayload' is not null or undefined
            assertParamExists('listsByNameContactsPost', 'emailsPayload', emailsPayload)
            const localVarPath = `/lists/{name}/contacts`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
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

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(emailsPayload, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Remove specified Contacts from your list. Required Access Level: ModifyContacts
         * @summary Remove Contacts from List
         * @param {string} name Name of your list.
         * @param {EmailsPayload} emailsPayload Provide either rule or a list of emails, not both.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsByNameContactsRemovePost: async (name: string, emailsPayload: EmailsPayload, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('listsByNameContactsRemovePost', 'name', name)
            // verify required parameter 'emailsPayload' is not null or undefined
            assertParamExists('listsByNameContactsRemovePost', 'emailsPayload', emailsPayload)
            const localVarPath = `/lists/{name}/contacts/remove`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
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

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(emailsPayload, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes List and removes all the Contacts from it (does not delete Contacts). Required Access Level: ModifyContacts
         * @summary Delete List
         * @param {string} name Name of your list.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsByNameDelete: async (name: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('listsByNameDelete', 'name', name)
            const localVarPath = `/lists/{name}`
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns detailed information about specified list. Required Access Level: ViewContacts
         * @summary Load List
         * @param {string} name Name of your list.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsByNameGet: async (name: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('listsByNameGet', 'name', name)
            const localVarPath = `/lists/{name}`
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update existing list. Required Access Level: ModifyContacts
         * @summary Update List
         * @param {string} name Name of your list.
         * @param {ListUpdatePayload} listUpdatePayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsByNamePut: async (name: string, listUpdatePayload: ListUpdatePayload, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('listsByNamePut', 'name', name)
            // verify required parameter 'listUpdatePayload' is not null or undefined
            assertParamExists('listsByNamePut', 'listUpdatePayload', listUpdatePayload)
            const localVarPath = `/lists/{name}`
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

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(listUpdatePayload, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns all your existing lists. Required Access Level: ViewContacts
         * @summary Load Lists
         * @param {number} [limit] Maximum number of returned items.
         * @param {number} [offset] How many items should be returned ahead.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsGet: async (limit?: number, offset?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/lists`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Add a new list. Required Access Level: ModifyContacts
         * @summary Add List
         * @param {ListPayload} listPayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsPost: async (listPayload: ListPayload, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'listPayload' is not null or undefined
            assertParamExists('listsPost', 'listPayload', listPayload)
            const localVarPath = `/lists`;
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

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(listPayload, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ListsApi - functional programming interface
 * @export
 */
export const ListsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ListsApiAxiosParamCreator(configuration)
    return {
        /**
         * Add existing Contacts to specified list. Required Access Level: ModifyContacts
         * @summary Add Contacts to List
         * @param {string} name Name of your list.
         * @param {EmailsPayload} emailsPayload Provide either rule or a list of emails, not both.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listsByNameContactsPost(name: string, emailsPayload: EmailsPayload, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ContactsList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listsByNameContactsPost(name, emailsPayload, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Remove specified Contacts from your list. Required Access Level: ModifyContacts
         * @summary Remove Contacts from List
         * @param {string} name Name of your list.
         * @param {EmailsPayload} emailsPayload Provide either rule or a list of emails, not both.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listsByNameContactsRemovePost(name: string, emailsPayload: EmailsPayload, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listsByNameContactsRemovePost(name, emailsPayload, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes List and removes all the Contacts from it (does not delete Contacts). Required Access Level: ModifyContacts
         * @summary Delete List
         * @param {string} name Name of your list.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listsByNameDelete(name: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listsByNameDelete(name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns detailed information about specified list. Required Access Level: ViewContacts
         * @summary Load List
         * @param {string} name Name of your list.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listsByNameGet(name: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ContactsList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listsByNameGet(name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update existing list. Required Access Level: ModifyContacts
         * @summary Update List
         * @param {string} name Name of your list.
         * @param {ListUpdatePayload} listUpdatePayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listsByNamePut(name: string, listUpdatePayload: ListUpdatePayload, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ContactsList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listsByNamePut(name, listUpdatePayload, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns all your existing lists. Required Access Level: ViewContacts
         * @summary Load Lists
         * @param {number} [limit] Maximum number of returned items.
         * @param {number} [offset] How many items should be returned ahead.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listsGet(limit?: number, offset?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ContactsList>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listsGet(limit, offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Add a new list. Required Access Level: ModifyContacts
         * @summary Add List
         * @param {ListPayload} listPayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listsPost(listPayload: ListPayload, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ContactsList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listsPost(listPayload, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ListsApi - factory interface
 * @export
 */
export const ListsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ListsApiFp(configuration)
    return {
        /**
         * Add existing Contacts to specified list. Required Access Level: ModifyContacts
         * @summary Add Contacts to List
         * @param {string} name Name of your list.
         * @param {EmailsPayload} emailsPayload Provide either rule or a list of emails, not both.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsByNameContactsPost(name: string, emailsPayload: EmailsPayload, options?: any): AxiosPromise<ContactsList> {
            return localVarFp.listsByNameContactsPost(name, emailsPayload, options).then((request) => request(axios, basePath));
        },
        /**
         * Remove specified Contacts from your list. Required Access Level: ModifyContacts
         * @summary Remove Contacts from List
         * @param {string} name Name of your list.
         * @param {EmailsPayload} emailsPayload Provide either rule or a list of emails, not both.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsByNameContactsRemovePost(name: string, emailsPayload: EmailsPayload, options?: any): AxiosPromise<void> {
            return localVarFp.listsByNameContactsRemovePost(name, emailsPayload, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes List and removes all the Contacts from it (does not delete Contacts). Required Access Level: ModifyContacts
         * @summary Delete List
         * @param {string} name Name of your list.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsByNameDelete(name: string, options?: any): AxiosPromise<void> {
            return localVarFp.listsByNameDelete(name, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns detailed information about specified list. Required Access Level: ViewContacts
         * @summary Load List
         * @param {string} name Name of your list.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsByNameGet(name: string, options?: any): AxiosPromise<ContactsList> {
            return localVarFp.listsByNameGet(name, options).then((request) => request(axios, basePath));
        },
        /**
         * Update existing list. Required Access Level: ModifyContacts
         * @summary Update List
         * @param {string} name Name of your list.
         * @param {ListUpdatePayload} listUpdatePayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsByNamePut(name: string, listUpdatePayload: ListUpdatePayload, options?: any): AxiosPromise<ContactsList> {
            return localVarFp.listsByNamePut(name, listUpdatePayload, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns all your existing lists. Required Access Level: ViewContacts
         * @summary Load Lists
         * @param {number} [limit] Maximum number of returned items.
         * @param {number} [offset] How many items should be returned ahead.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsGet(limit?: number, offset?: number, options?: any): AxiosPromise<Array<ContactsList>> {
            return localVarFp.listsGet(limit, offset, options).then((request) => request(axios, basePath));
        },
        /**
         * Add a new list. Required Access Level: ModifyContacts
         * @summary Add List
         * @param {ListPayload} listPayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listsPost(listPayload: ListPayload, options?: any): AxiosPromise<ContactsList> {
            return localVarFp.listsPost(listPayload, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ListsApi - interface
 * @export
 * @interface ListsApi
 */
export interface ListsApiInterface {
    /**
     * Add existing Contacts to specified list. Required Access Level: ModifyContacts
     * @summary Add Contacts to List
     * @param {string} name Name of your list.
     * @param {EmailsPayload} emailsPayload Provide either rule or a list of emails, not both.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApiInterface
     */
    listsByNameContactsPost(name: string, emailsPayload: EmailsPayload, options?: any): AxiosPromise<ContactsList>;

    /**
     * Remove specified Contacts from your list. Required Access Level: ModifyContacts
     * @summary Remove Contacts from List
     * @param {string} name Name of your list.
     * @param {EmailsPayload} emailsPayload Provide either rule or a list of emails, not both.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApiInterface
     */
    listsByNameContactsRemovePost(name: string, emailsPayload: EmailsPayload, options?: any): AxiosPromise<void>;

    /**
     * Deletes List and removes all the Contacts from it (does not delete Contacts). Required Access Level: ModifyContacts
     * @summary Delete List
     * @param {string} name Name of your list.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApiInterface
     */
    listsByNameDelete(name: string, options?: any): AxiosPromise<void>;

    /**
     * Returns detailed information about specified list. Required Access Level: ViewContacts
     * @summary Load List
     * @param {string} name Name of your list.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApiInterface
     */
    listsByNameGet(name: string, options?: any): AxiosPromise<ContactsList>;

    /**
     * Update existing list. Required Access Level: ModifyContacts
     * @summary Update List
     * @param {string} name Name of your list.
     * @param {ListUpdatePayload} listUpdatePayload 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApiInterface
     */
    listsByNamePut(name: string, listUpdatePayload: ListUpdatePayload, options?: any): AxiosPromise<ContactsList>;

    /**
     * Returns all your existing lists. Required Access Level: ViewContacts
     * @summary Load Lists
     * @param {number} [limit] Maximum number of returned items.
     * @param {number} [offset] How many items should be returned ahead.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApiInterface
     */
    listsGet(limit?: number, offset?: number, options?: any): AxiosPromise<Array<ContactsList>>;

    /**
     * Add a new list. Required Access Level: ModifyContacts
     * @summary Add List
     * @param {ListPayload} listPayload 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApiInterface
     */
    listsPost(listPayload: ListPayload, options?: any): AxiosPromise<ContactsList>;

}

/**
 * ListsApi - object-oriented interface
 * @export
 * @class ListsApi
 * @extends {BaseAPI}
 */
export class ListsApi extends BaseAPI implements ListsApiInterface {
    /**
     * Add existing Contacts to specified list. Required Access Level: ModifyContacts
     * @summary Add Contacts to List
     * @param {string} name Name of your list.
     * @param {EmailsPayload} emailsPayload Provide either rule or a list of emails, not both.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApi
     */
    public listsByNameContactsPost(name: string, emailsPayload: EmailsPayload, options?: any) {
        return ListsApiFp(this.configuration).listsByNameContactsPost(name, emailsPayload, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Remove specified Contacts from your list. Required Access Level: ModifyContacts
     * @summary Remove Contacts from List
     * @param {string} name Name of your list.
     * @param {EmailsPayload} emailsPayload Provide either rule or a list of emails, not both.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApi
     */
    public listsByNameContactsRemovePost(name: string, emailsPayload: EmailsPayload, options?: any) {
        return ListsApiFp(this.configuration).listsByNameContactsRemovePost(name, emailsPayload, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes List and removes all the Contacts from it (does not delete Contacts). Required Access Level: ModifyContacts
     * @summary Delete List
     * @param {string} name Name of your list.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApi
     */
    public listsByNameDelete(name: string, options?: any) {
        return ListsApiFp(this.configuration).listsByNameDelete(name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns detailed information about specified list. Required Access Level: ViewContacts
     * @summary Load List
     * @param {string} name Name of your list.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApi
     */
    public listsByNameGet(name: string, options?: any) {
        return ListsApiFp(this.configuration).listsByNameGet(name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update existing list. Required Access Level: ModifyContacts
     * @summary Update List
     * @param {string} name Name of your list.
     * @param {ListUpdatePayload} listUpdatePayload 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApi
     */
    public listsByNamePut(name: string, listUpdatePayload: ListUpdatePayload, options?: any) {
        return ListsApiFp(this.configuration).listsByNamePut(name, listUpdatePayload, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns all your existing lists. Required Access Level: ViewContacts
     * @summary Load Lists
     * @param {number} [limit] Maximum number of returned items.
     * @param {number} [offset] How many items should be returned ahead.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApi
     */
    public listsGet(limit?: number, offset?: number, options?: any) {
        return ListsApiFp(this.configuration).listsGet(limit, offset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Add a new list. Required Access Level: ModifyContacts
     * @summary Add List
     * @param {ListPayload} listPayload 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApi
     */
    public listsPost(listPayload: ListPayload, options?: any) {
        return ListsApiFp(this.configuration).listsPost(listPayload, options).then((request) => request(this.axios, this.basePath));
    }
}
