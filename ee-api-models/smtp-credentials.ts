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
 * SMTP Credentials info
 * @export
 * @interface SmtpCredentials
 */
export interface SmtpCredentials {
    /**
     * Access level of this Smtp Credential.
     * @type {AccessLevel}
     * @memberof SmtpCredentials
     */
    AccessLevel?: AccessLevel;
    /**
     * Name of the key.
     * @type {string}
     * @memberof SmtpCredentials
     */
    Name?: string;
    /**
     * Date this SmtpCredential was created.
     * @type {string}
     * @memberof SmtpCredentials
     */
    DateCreated?: string;
    /**
     * Date this SmtpCredential was last used.
     * @type {string}
     * @memberof SmtpCredentials
     */
    LastUse?: string | null;
    /**
     * Date this SmtpCredential expires.
     * @type {string}
     * @memberof SmtpCredentials
     */
    Expires?: string | null;
    /**
     * Which IPs can use this SmtpCredential
     * @type {Array<string>}
     * @memberof SmtpCredentials
     */
    RestrictAccessToIPRange?: Array<string>;
}


