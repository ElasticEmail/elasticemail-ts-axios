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
import { EventType } from './event-type';
// May contain unused imports in some cases
// @ts-ignore
import { MessageCategory } from './message-category';

/**
 * Detailed information about message recipient
 * @export
 * @interface RecipientEvent
 */
export interface RecipientEvent {
    /**
     * ID number of transaction
     * @type {string}
     * @memberof RecipientEvent
     */
    'TransactionID'?: string;
    /**
     * ID number of selected message.
     * @type {string}
     * @memberof RecipientEvent
     */
    'MsgID'?: string;
    /**
     * Default From: email address.
     * @type {string}
     * @memberof RecipientEvent
     */
    'FromEmail'?: string;
    /**
     * Ending date for search in YYYY-MM-DDThh:mm:ss format.
     * @type {string}
     * @memberof RecipientEvent
     */
    'To'?: string;
    /**
     * Default subject of email.
     * @type {string}
     * @memberof RecipientEvent
     */
    'Subject'?: string;
    /**
     * 
     * @type {EventType}
     * @memberof RecipientEvent
     */
    'EventType'?: EventType;
    /**
     * Creation date
     * @type {string}
     * @memberof RecipientEvent
     */
    'EventDate'?: string;
    /**
     * Name of selected channel.
     * @type {string}
     * @memberof RecipientEvent
     */
    'ChannelName'?: string;
    /**
     * 
     * @type {MessageCategory}
     * @memberof RecipientEvent
     */
    'MessageCategory'?: MessageCategory;
    /**
     * Date of next try
     * @type {string}
     * @memberof RecipientEvent
     */
    'NextTryOn'?: string | null;
    /**
     * Content of message, HTML encoded
     * @type {string}
     * @memberof RecipientEvent
     */
    'Message'?: string;
    /**
     * IP which this email was sent through
     * @type {string}
     * @memberof RecipientEvent
     */
    'IPAddress'?: string;
    /**
     * Name of an IP pool this email was sent through
     * @type {string}
     * @memberof RecipientEvent
     */
    'PoolName'?: string;
}

