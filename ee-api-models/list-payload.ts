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



/**
 * 
 * @export
 * @interface ListPayload
 */
export interface ListPayload {
    /**
     * Name of your list.
     * @type {string}
     * @memberof ListPayload
     */
    ListName?: string;
    /**
     * True: Allow unsubscribing from this list. Otherwise, false
     * @type {boolean}
     * @memberof ListPayload
     */
    AllowUnsubscribe?: boolean;
    /**
     * Comma delimited list of existing contact emails that should be added to this list
     * @type {Array<string>}
     * @memberof ListPayload
     */
    Emails?: Array<string>;
}


