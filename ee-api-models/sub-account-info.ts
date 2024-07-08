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


// May contain unused imports in some cases
// @ts-ignore
import type { AccountStatusEnum } from './account-status-enum';
// May contain unused imports in some cases
// @ts-ignore
import type { SubaccountSettingsInfo } from './subaccount-settings-info';

/**
 * Detailed information about SubAccount.
 * @export
 * @interface SubAccountInfo
 */
export interface SubAccountInfo {
    /**
     * Public key for limited access to your Account such as contact/add so you can use it safely on public websites.
     * @type {string}
     * @memberof SubAccountInfo
     */
    'PublicAccountID'?: string;
    /**
     * Proper email address.
     * @type {string}
     * @memberof SubAccountInfo
     */
    'Email'?: string;
    /**
     * 
     * @type {SubaccountSettingsInfo}
     * @memberof SubAccountInfo
     */
    'Settings'?: SubaccountSettingsInfo;
    /**
     * Date of last activity on Account
     * @type {string}
     * @memberof SubAccountInfo
     */
    'LastActivity'?: string;
    /**
     * Amount of email credits
     * @type {number}
     * @memberof SubAccountInfo
     */
    'EmailCredits'?: number;
    /**
     * Amount of emails sent from this Account
     * @type {number}
     * @memberof SubAccountInfo
     */
    'TotalEmailsSent'?: number;
    /**
     * Numeric reputation
     * @type {number}
     * @memberof SubAccountInfo
     */
    'Reputation'?: number;
    /**
     * 
     * @type {AccountStatusEnum}
     * @memberof SubAccountInfo
     */
    'Status'?: AccountStatusEnum;
    /**
     * How many contacts this SubAccount has stored
     * @type {number}
     * @memberof SubAccountInfo
     */
    'ContactsCount'?: number;
}



