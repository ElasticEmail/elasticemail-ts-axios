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



/**
 * List of Lists, with detailed data about its contents.
 * @export
 * @interface ContactsList
 */
export interface ContactsList {
    /**
     * Name of your list.
     * @type {string}
     * @memberof ContactsList
     */
    'ListName'?: string;
    /**
     * ID code of list. Please note that this is different from the listid field.
     * @type {string}
     * @memberof ContactsList
     */
    'PublicListID'?: string | null;
    /**
     * Date of creation in YYYY-MM-DDThh:ii:ss format
     * @type {string}
     * @memberof ContactsList
     */
    'DateAdded'?: string;
    /**
     * True: Allow unsubscribing from this list. Otherwise, false
     * @type {boolean}
     * @memberof ContactsList
     */
    'AllowUnsubscribe'?: boolean;
}

