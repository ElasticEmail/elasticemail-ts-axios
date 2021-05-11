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


import { AccessLevel } from './access-level';

/**
 * ApiKey info
 * @export
 * @interface ApiKey
 */
export interface ApiKey {
    /**
     * Access level or permission to be assigned to this ApiKey.
     * @type {Array<AccessLevel>}
     * @memberof ApiKey
     */
    AccessLevel?: Array<AccessLevel>;
    /**
     * Name of the ApiKey.
     * @type {string}
     * @memberof ApiKey
     */
    Name?: string;
    /**
     * Date this ApiKey was created.
     * @type {string}
     * @memberof ApiKey
     */
    DateCreated?: string;
    /**
     * Date this ApiKey was last used.
     * @type {string}
     * @memberof ApiKey
     */
    LastUse?: string | null;
    /**
     * Date this ApiKey expires.
     * @type {string}
     * @memberof ApiKey
     */
    Expires?: string | null;
    /**
     * Which IPs can use this ApiKey
     * @type {Array<string>}
     * @memberof ApiKey
     */
    RestrictAccessToIPRange?: Array<string>;
}

