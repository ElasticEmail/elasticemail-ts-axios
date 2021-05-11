/* tslint:disable */
/* eslint-disable */
/**
 * Elastic Email REST API
 * This API is based on the REST API architecture, allowing the user to easily manage their data with this resource-based approach.    Every API call is established on which specific request type (GET, POST, PUT, DELETE) will be used.    To start using this API, you will need your Access Token (available <a href=\"https://elasticemail.com/account#/settings/new/manage-api\">here</a>). Remember to keep it safe. Required access levels are listed in the given request’s description.    This is the documentation for REST API. If you’d like to read our legacy documentation regarding Web API v2 click <a href=\"https://api.elasticemail.com/public/help\">here</a>.
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
import { FileInfo } from '../ee-api-models';
// @ts-ignore
import { FilePayload } from '../ee-api-models';
/**
 * FilesApi - axios parameter creator
 * @export
 */
export const FilesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Permanently deletes the file from your Account. Required Access Level: ModifyFiles
         * @summary Delete File
         * @param {string} name Name of your file including extension.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        filesByNameDelete: async (name: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('filesByNameDelete', 'name', name)
            const localVarPath = `/files/{name}`
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
         * Gets content of the specified File. Required Access Level: ViewFiles
         * @summary Download File
         * @param {string} name Name of your file including extension.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        filesByNameGet: async (name: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('filesByNameGet', 'name', name)
            const localVarPath = `/files/{name}`
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
         * Returns the specified File\'s details. Required Access Level: ViewFiles
         * @summary Load File Details
         * @param {string} name Name of your file including extension.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        filesByNameInfoGet: async (name: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('filesByNameInfoGet', 'name', name)
            const localVarPath = `/files/{name}/info`
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
         * Returns a list of all your available files. Required Access Level: ViewFiles
         * @summary List Files
         * @param {number} [limit] Maximum number of returned items.
         * @param {number} [offset] How many items should be returned ahead.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        filesGet: async (limit?: number, offset?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/files`;
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
         * Uploads selected file to the server. Required Access Level: ModifyFiles
         * @summary Upload File
         * @param {FilePayload} filePayload 
         * @param {number} [expiresAfterDays] After how many days should the file be deleted.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        filesPost: async (filePayload: FilePayload, expiresAfterDays?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'filePayload' is not null or undefined
            assertParamExists('filesPost', 'filePayload', filePayload)
            const localVarPath = `/files`;
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

            if (expiresAfterDays !== undefined) {
                localVarQueryParameter['expiresAfterDays'] = expiresAfterDays;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(filePayload, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FilesApi - functional programming interface
 * @export
 */
export const FilesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FilesApiAxiosParamCreator(configuration)
    return {
        /**
         * Permanently deletes the file from your Account. Required Access Level: ModifyFiles
         * @summary Delete File
         * @param {string} name Name of your file including extension.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async filesByNameDelete(name: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.filesByNameDelete(name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets content of the specified File. Required Access Level: ViewFiles
         * @summary Download File
         * @param {string} name Name of your file including extension.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async filesByNameGet(name: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.filesByNameGet(name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the specified File\'s details. Required Access Level: ViewFiles
         * @summary Load File Details
         * @param {string} name Name of your file including extension.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async filesByNameInfoGet(name: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileInfo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.filesByNameInfoGet(name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of all your available files. Required Access Level: ViewFiles
         * @summary List Files
         * @param {number} [limit] Maximum number of returned items.
         * @param {number} [offset] How many items should be returned ahead.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async filesGet(limit?: number, offset?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<FileInfo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.filesGet(limit, offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Uploads selected file to the server. Required Access Level: ModifyFiles
         * @summary Upload File
         * @param {FilePayload} filePayload 
         * @param {number} [expiresAfterDays] After how many days should the file be deleted.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async filesPost(filePayload: FilePayload, expiresAfterDays?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileInfo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.filesPost(filePayload, expiresAfterDays, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FilesApi - factory interface
 * @export
 */
export const FilesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FilesApiFp(configuration)
    return {
        /**
         * Permanently deletes the file from your Account. Required Access Level: ModifyFiles
         * @summary Delete File
         * @param {string} name Name of your file including extension.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        filesByNameDelete(name: string, options?: any): AxiosPromise<void> {
            return localVarFp.filesByNameDelete(name, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets content of the specified File. Required Access Level: ViewFiles
         * @summary Download File
         * @param {string} name Name of your file including extension.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        filesByNameGet(name: string, options?: any): AxiosPromise<any> {
            return localVarFp.filesByNameGet(name, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the specified File\'s details. Required Access Level: ViewFiles
         * @summary Load File Details
         * @param {string} name Name of your file including extension.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        filesByNameInfoGet(name: string, options?: any): AxiosPromise<FileInfo> {
            return localVarFp.filesByNameInfoGet(name, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all your available files. Required Access Level: ViewFiles
         * @summary List Files
         * @param {number} [limit] Maximum number of returned items.
         * @param {number} [offset] How many items should be returned ahead.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        filesGet(limit?: number, offset?: number, options?: any): AxiosPromise<Array<FileInfo>> {
            return localVarFp.filesGet(limit, offset, options).then((request) => request(axios, basePath));
        },
        /**
         * Uploads selected file to the server. Required Access Level: ModifyFiles
         * @summary Upload File
         * @param {FilePayload} filePayload 
         * @param {number} [expiresAfterDays] After how many days should the file be deleted.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        filesPost(filePayload: FilePayload, expiresAfterDays?: number, options?: any): AxiosPromise<FileInfo> {
            return localVarFp.filesPost(filePayload, expiresAfterDays, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * FilesApi - interface
 * @export
 * @interface FilesApi
 */
export interface FilesApiInterface {
    /**
     * Permanently deletes the file from your Account. Required Access Level: ModifyFiles
     * @summary Delete File
     * @param {string} name Name of your file including extension.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApiInterface
     */
    filesByNameDelete(name: string, options?: any): AxiosPromise<void>;

    /**
     * Gets content of the specified File. Required Access Level: ViewFiles
     * @summary Download File
     * @param {string} name Name of your file including extension.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApiInterface
     */
    filesByNameGet(name: string, options?: any): AxiosPromise<any>;

    /**
     * Returns the specified File\'s details. Required Access Level: ViewFiles
     * @summary Load File Details
     * @param {string} name Name of your file including extension.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApiInterface
     */
    filesByNameInfoGet(name: string, options?: any): AxiosPromise<FileInfo>;

    /**
     * Returns a list of all your available files. Required Access Level: ViewFiles
     * @summary List Files
     * @param {number} [limit] Maximum number of returned items.
     * @param {number} [offset] How many items should be returned ahead.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApiInterface
     */
    filesGet(limit?: number, offset?: number, options?: any): AxiosPromise<Array<FileInfo>>;

    /**
     * Uploads selected file to the server. Required Access Level: ModifyFiles
     * @summary Upload File
     * @param {FilePayload} filePayload 
     * @param {number} [expiresAfterDays] After how many days should the file be deleted.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApiInterface
     */
    filesPost(filePayload: FilePayload, expiresAfterDays?: number, options?: any): AxiosPromise<FileInfo>;

}

/**
 * FilesApi - object-oriented interface
 * @export
 * @class FilesApi
 * @extends {BaseAPI}
 */
export class FilesApi extends BaseAPI implements FilesApiInterface {
    /**
     * Permanently deletes the file from your Account. Required Access Level: ModifyFiles
     * @summary Delete File
     * @param {string} name Name of your file including extension.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public filesByNameDelete(name: string, options?: any) {
        return FilesApiFp(this.configuration).filesByNameDelete(name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets content of the specified File. Required Access Level: ViewFiles
     * @summary Download File
     * @param {string} name Name of your file including extension.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public filesByNameGet(name: string, options?: any) {
        return FilesApiFp(this.configuration).filesByNameGet(name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the specified File\'s details. Required Access Level: ViewFiles
     * @summary Load File Details
     * @param {string} name Name of your file including extension.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public filesByNameInfoGet(name: string, options?: any) {
        return FilesApiFp(this.configuration).filesByNameInfoGet(name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all your available files. Required Access Level: ViewFiles
     * @summary List Files
     * @param {number} [limit] Maximum number of returned items.
     * @param {number} [offset] How many items should be returned ahead.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public filesGet(limit?: number, offset?: number, options?: any) {
        return FilesApiFp(this.configuration).filesGet(limit, offset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Uploads selected file to the server. Required Access Level: ModifyFiles
     * @summary Upload File
     * @param {FilePayload} filePayload 
     * @param {number} [expiresAfterDays] After how many days should the file be deleted.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public filesPost(filePayload: FilePayload, expiresAfterDays?: number, options?: any) {
        return FilesApiFp(this.configuration).filesPost(filePayload, expiresAfterDays, options).then((request) => request(this.axios, this.basePath));
    }
}