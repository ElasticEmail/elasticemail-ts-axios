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


import { LogJobStatus } from './log-job-status';

/**
 * Status information of the specified email
 * @export
 * @interface EmailStatus
 */
export interface EmailStatus {
    /**
     * Email address this email was sent from.
     * @type {string}
     * @memberof EmailStatus
     */
    From?: string;
    /**
     * Email address this email was sent to.
     * @type {string}
     * @memberof EmailStatus
     */
    To?: string;
    /**
     * Date the email was submitted.
     * @type {string}
     * @memberof EmailStatus
     */
    Date?: string;
    /**
     * Value of email\'s status
     * @type {LogJobStatus}
     * @memberof EmailStatus
     */
    Status?: LogJobStatus;
    /**
     * Name of email\'s status
     * @type {string}
     * @memberof EmailStatus
     */
    StatusName?: string;
    /**
     * Date of last status change.
     * @type {string}
     * @memberof EmailStatus
     */
    StatusChangeDate?: string;
    /**
     * Date when the email was sent
     * @type {string}
     * @memberof EmailStatus
     */
    DateSent?: string;
    /**
     * Date when the email changed the status to \'opened\'
     * @type {string}
     * @memberof EmailStatus
     */
    DateOpened?: string | null;
    /**
     * Date when the email changed the status to \'clicked\'
     * @type {string}
     * @memberof EmailStatus
     */
    DateClicked?: string | null;
    /**
     * Detailed error or bounced message.
     * @type {string}
     * @memberof EmailStatus
     */
    ErrorMessage?: string;
    /**
     * ID number of transaction
     * @type {string}
     * @memberof EmailStatus
     */
    TransactionID?: string;
    /**
     * Envelope from address
     * @type {string}
     * @memberof EmailStatus
     */
    EnvelopeFrom?: string;
}


