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



/**
 * Summary of channel log status
 * @export
 * @interface ChannelLogStatusSummary
 */
export interface ChannelLogStatusSummary {
    /**
     * Channel name
     * @type {string}
     * @memberof ChannelLogStatusSummary
     */
    'ChannelName'?: string;
    /**
     * Number of recipients
     * @type {number}
     * @memberof ChannelLogStatusSummary
     */
    'Recipients'?: number;
    /**
     * Number of emails
     * @type {number}
     * @memberof ChannelLogStatusSummary
     */
    'EmailTotal'?: number;
    /**
     * Number of SMS
     * @type {number}
     * @memberof ChannelLogStatusSummary
     */
    'SmsTotal'?: number;
    /**
     * Number of delivered messages
     * @type {number}
     * @memberof ChannelLogStatusSummary
     */
    'Delivered'?: number;
    /**
     * Number of bounced messages
     * @type {number}
     * @memberof ChannelLogStatusSummary
     */
    'Bounced'?: number;
    /**
     * Number of messages in progress
     * @type {number}
     * @memberof ChannelLogStatusSummary
     */
    'InProgress'?: number;
    /**
     * Number of opened messages
     * @type {number}
     * @memberof ChannelLogStatusSummary
     */
    'Opened'?: number;
    /**
     * Number of clicked messages
     * @type {number}
     * @memberof ChannelLogStatusSummary
     */
    'Clicked'?: number;
    /**
     * Number of unsubscribed messages
     * @type {number}
     * @memberof ChannelLogStatusSummary
     */
    'Unsubscribed'?: number;
    /**
     * Number of complaint messages
     * @type {number}
     * @memberof ChannelLogStatusSummary
     */
    'Complaints'?: number;
    /**
     * Number of inbound messages
     * @type {number}
     * @memberof ChannelLogStatusSummary
     */
    'Inbound'?: number;
    /**
     * Number of manually cancelled messages
     * @type {number}
     * @memberof ChannelLogStatusSummary
     */
    'ManualCancel'?: number;
    /**
     * Number of messages flagged with \'Not Delivered\'
     * @type {number}
     * @memberof ChannelLogStatusSummary
     */
    'NotDelivered'?: number;
}

