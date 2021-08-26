/* tslint:disable */
/* eslint-disable */
/**
 * Elastic Email REST API
 * This API is based on the REST API architecture, allowing the user to easily manage their data with this resource-based approach.    Every API call is established on which specific request type (GET, POST, PUT, DELETE) will be used.    The API has a limit of 20 concurrent connections and a hard timeout of 600 seconds per request.    To start using this API, you will need your Access Token (available <a target=\"_blank\" href=\"https://elasticemail.com/account#/settings/new/manage-api\">here</a>). Remember to keep it safe. Required access levels are listed in the given request’s description.    This is the documentation for REST API. If you’d like to read our legacy documentation regarding Web API v2 click <a target=\"_blank\" href=\"https://api.elasticemail.com/public/help\">here</a>.    Downloadable library clients can be found in our Github repository <a target=\"_blank\" href=\"https://github.com/ElasticEmail?tab=repositories&q=%22rest+api%22+in%3Areadme\">here</a>
 *
 * The version of the OpenAPI document: 4.0.0
 * Contact: support@elasticemail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ContactHistEventType } from './contact-hist-event-type';

/**
 * 
 * @export
 * @interface ContactHistory
 */
export interface ContactHistory {
    /**
     * Type of event occured on this Contact.
     * @type {ContactHistEventType}
     * @memberof ContactHistory
     */
    EventType?: ContactHistEventType;
    /**
     * Formatted date of event.
     * @type {string}
     * @memberof ContactHistory
     */
    EventDate?: string;
    /**
     * Name of channel this event occured on
     * @type {string}
     * @memberof ContactHistory
     */
    ChannelName?: string;
    /**
     * Name of template this event occured on
     * @type {string}
     * @memberof ContactHistory
     */
    TemplateName?: string;
    /**
     * IP Address of the event.
     * @type {string}
     * @memberof ContactHistory
     */
    IPAddress?: string;
    /**
     * Country of the event.
     * @type {string}
     * @memberof ContactHistory
     */
    Country?: string;
    /**
     * Additional information about the event
     * @type {string}
     * @memberof ContactHistory
     */
    Data?: string;
}


