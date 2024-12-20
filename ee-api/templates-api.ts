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
import { Template } from '../ee-api-models';
// @ts-ignore
import { TemplatePayload } from '../ee-api-models';
// @ts-ignore
import { TemplateScope } from '../ee-api-models';
// @ts-ignore
import { TemplateType } from '../ee-api-models';
/**
 * TemplatesApi - axios parameter creator
 * @export
 */
export const TemplatesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete template with the specified name. Required Access Level: ModifyTemplates
         * @summary Delete Template
         * @param {string} name Name of template.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        templatesByNameDelete: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('templatesByNameDelete', 'name', name)
            const localVarPath = `/templates/{name}`
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
         * Load detailed information of the specified template. Required Access Level: ViewTemplates
         * @summary Load Template
         * @param {string} name Name of template.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        templatesByNameGet: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('templatesByNameGet', 'name', name)
            const localVarPath = `/templates/{name}`
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
         * Update existing template, overwriting existing data. Required Access Level: ModifyTemplates
         * @summary Update Template
         * @param {string} name Name of template.
         * @param {TemplatePayload} templatePayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        templatesByNamePut: async (name: string, templatePayload: TemplatePayload, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('templatesByNamePut', 'name', name)
            // verify required parameter 'templatePayload' is not null or undefined
            assertParamExists('templatesByNamePut', 'templatePayload', templatePayload)
            const localVarPath = `/templates/{name}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(templatePayload, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of templates for the specified type. Required Access Level: ViewTemplates
         * @summary Load Templates
         * @param {Array<TemplateScope>} scopeType Return templates with specified scope only
         * @param {Array<TemplateType>} [templateTypes] Return templates with specified type only
         * @param {number} [limit] Maximum number of returned items.
         * @param {number} [offset] How many items should be returned ahead.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        templatesGet: async (scopeType: Array<TemplateScope>, templateTypes?: Array<TemplateType>, limit?: number, offset?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'scopeType' is not null or undefined
            assertParamExists('templatesGet', 'scopeType', scopeType)
            const localVarPath = `/templates`;
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

            if (scopeType) {
                localVarQueryParameter['scopeType'] = scopeType;
            }

            if (templateTypes) {
                localVarQueryParameter['templateTypes'] = templateTypes;
            }

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
         * Add a new Template. Required Access Level: ModifyTemplates
         * @summary Add Template
         * @param {TemplatePayload} templatePayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        templatesPost: async (templatePayload: TemplatePayload, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'templatePayload' is not null or undefined
            assertParamExists('templatesPost', 'templatePayload', templatePayload)
            const localVarPath = `/templates`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(templatePayload, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TemplatesApi - functional programming interface
 * @export
 */
export const TemplatesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TemplatesApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete template with the specified name. Required Access Level: ModifyTemplates
         * @summary Delete Template
         * @param {string} name Name of template.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async templatesByNameDelete(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.templatesByNameDelete(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TemplatesApi.templatesByNameDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Load detailed information of the specified template. Required Access Level: ViewTemplates
         * @summary Load Template
         * @param {string} name Name of template.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async templatesByNameGet(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Template>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.templatesByNameGet(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TemplatesApi.templatesByNameGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update existing template, overwriting existing data. Required Access Level: ModifyTemplates
         * @summary Update Template
         * @param {string} name Name of template.
         * @param {TemplatePayload} templatePayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async templatesByNamePut(name: string, templatePayload: TemplatePayload, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Template>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.templatesByNamePut(name, templatePayload, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TemplatesApi.templatesByNamePut']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of templates for the specified type. Required Access Level: ViewTemplates
         * @summary Load Templates
         * @param {Array<TemplateScope>} scopeType Return templates with specified scope only
         * @param {Array<TemplateType>} [templateTypes] Return templates with specified type only
         * @param {number} [limit] Maximum number of returned items.
         * @param {number} [offset] How many items should be returned ahead.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async templatesGet(scopeType: Array<TemplateScope>, templateTypes?: Array<TemplateType>, limit?: number, offset?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Template>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.templatesGet(scopeType, templateTypes, limit, offset, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TemplatesApi.templatesGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Add a new Template. Required Access Level: ModifyTemplates
         * @summary Add Template
         * @param {TemplatePayload} templatePayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async templatesPost(templatePayload: TemplatePayload, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Template>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.templatesPost(templatePayload, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TemplatesApi.templatesPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * TemplatesApi - factory interface
 * @export
 */
export const TemplatesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TemplatesApiFp(configuration)
    return {
        /**
         * Delete template with the specified name. Required Access Level: ModifyTemplates
         * @summary Delete Template
         * @param {string} name Name of template.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        templatesByNameDelete(name: string, options?: any): AxiosPromise<void> {
            return localVarFp.templatesByNameDelete(name, options).then((request) => request(axios, basePath));
        },
        /**
         * Load detailed information of the specified template. Required Access Level: ViewTemplates
         * @summary Load Template
         * @param {string} name Name of template.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        templatesByNameGet(name: string, options?: any): AxiosPromise<Template> {
            return localVarFp.templatesByNameGet(name, options).then((request) => request(axios, basePath));
        },
        /**
         * Update existing template, overwriting existing data. Required Access Level: ModifyTemplates
         * @summary Update Template
         * @param {string} name Name of template.
         * @param {TemplatePayload} templatePayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        templatesByNamePut(name: string, templatePayload: TemplatePayload, options?: any): AxiosPromise<Template> {
            return localVarFp.templatesByNamePut(name, templatePayload, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of templates for the specified type. Required Access Level: ViewTemplates
         * @summary Load Templates
         * @param {Array<TemplateScope>} scopeType Return templates with specified scope only
         * @param {Array<TemplateType>} [templateTypes] Return templates with specified type only
         * @param {number} [limit] Maximum number of returned items.
         * @param {number} [offset] How many items should be returned ahead.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        templatesGet(scopeType: Array<TemplateScope>, templateTypes?: Array<TemplateType>, limit?: number, offset?: number, options?: any): AxiosPromise<Array<Template>> {
            return localVarFp.templatesGet(scopeType, templateTypes, limit, offset, options).then((request) => request(axios, basePath));
        },
        /**
         * Add a new Template. Required Access Level: ModifyTemplates
         * @summary Add Template
         * @param {TemplatePayload} templatePayload 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        templatesPost(templatePayload: TemplatePayload, options?: any): AxiosPromise<Template> {
            return localVarFp.templatesPost(templatePayload, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TemplatesApi - interface
 * @export
 * @interface TemplatesApi
 */
export interface TemplatesApiInterface {
    /**
     * Delete template with the specified name. Required Access Level: ModifyTemplates
     * @summary Delete Template
     * @param {string} name Name of template.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TemplatesApiInterface
     */
    templatesByNameDelete(name: string, options?: RawAxiosRequestConfig): AxiosPromise<void>;

    /**
     * Load detailed information of the specified template. Required Access Level: ViewTemplates
     * @summary Load Template
     * @param {string} name Name of template.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TemplatesApiInterface
     */
    templatesByNameGet(name: string, options?: RawAxiosRequestConfig): AxiosPromise<Template>;

    /**
     * Update existing template, overwriting existing data. Required Access Level: ModifyTemplates
     * @summary Update Template
     * @param {string} name Name of template.
     * @param {TemplatePayload} templatePayload 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TemplatesApiInterface
     */
    templatesByNamePut(name: string, templatePayload: TemplatePayload, options?: RawAxiosRequestConfig): AxiosPromise<Template>;

    /**
     * Returns a list of templates for the specified type. Required Access Level: ViewTemplates
     * @summary Load Templates
     * @param {Array<TemplateScope>} scopeType Return templates with specified scope only
     * @param {Array<TemplateType>} [templateTypes] Return templates with specified type only
     * @param {number} [limit] Maximum number of returned items.
     * @param {number} [offset] How many items should be returned ahead.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TemplatesApiInterface
     */
    templatesGet(scopeType: Array<TemplateScope>, templateTypes?: Array<TemplateType>, limit?: number, offset?: number, options?: RawAxiosRequestConfig): AxiosPromise<Array<Template>>;

    /**
     * Add a new Template. Required Access Level: ModifyTemplates
     * @summary Add Template
     * @param {TemplatePayload} templatePayload 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TemplatesApiInterface
     */
    templatesPost(templatePayload: TemplatePayload, options?: RawAxiosRequestConfig): AxiosPromise<Template>;

}

/**
 * TemplatesApi - object-oriented interface
 * @export
 * @class TemplatesApi
 * @extends {BaseAPI}
 */
export class TemplatesApi extends BaseAPI implements TemplatesApiInterface {
    /**
     * Delete template with the specified name. Required Access Level: ModifyTemplates
     * @summary Delete Template
     * @param {string} name Name of template.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TemplatesApi
     */
    public templatesByNameDelete(name: string, options?: RawAxiosRequestConfig) {
        return TemplatesApiFp(this.configuration).templatesByNameDelete(name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Load detailed information of the specified template. Required Access Level: ViewTemplates
     * @summary Load Template
     * @param {string} name Name of template.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TemplatesApi
     */
    public templatesByNameGet(name: string, options?: RawAxiosRequestConfig) {
        return TemplatesApiFp(this.configuration).templatesByNameGet(name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update existing template, overwriting existing data. Required Access Level: ModifyTemplates
     * @summary Update Template
     * @param {string} name Name of template.
     * @param {TemplatePayload} templatePayload 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TemplatesApi
     */
    public templatesByNamePut(name: string, templatePayload: TemplatePayload, options?: RawAxiosRequestConfig) {
        return TemplatesApiFp(this.configuration).templatesByNamePut(name, templatePayload, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of templates for the specified type. Required Access Level: ViewTemplates
     * @summary Load Templates
     * @param {Array<TemplateScope>} scopeType Return templates with specified scope only
     * @param {Array<TemplateType>} [templateTypes] Return templates with specified type only
     * @param {number} [limit] Maximum number of returned items.
     * @param {number} [offset] How many items should be returned ahead.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TemplatesApi
     */
    public templatesGet(scopeType: Array<TemplateScope>, templateTypes?: Array<TemplateType>, limit?: number, offset?: number, options?: RawAxiosRequestConfig) {
        return TemplatesApiFp(this.configuration).templatesGet(scopeType, templateTypes, limit, offset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Add a new Template. Required Access Level: ModifyTemplates
     * @summary Add Template
     * @param {TemplatePayload} templatePayload 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TemplatesApi
     */
    public templatesPost(templatePayload: TemplatePayload, options?: RawAxiosRequestConfig) {
        return TemplatesApiFp(this.configuration).templatesPost(templatePayload, options).then((request) => request(this.axios, this.basePath));
    }
}

