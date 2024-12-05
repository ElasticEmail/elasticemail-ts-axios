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
import { EmailJobFailedStatus } from './email-job-failed-status';

/**
 * 
 * @export
 * @interface EmailJobStatus
 */
export interface EmailJobStatus {
    /**
     * ID number of your attachment
     * @type {string}
     * @memberof EmailJobStatus
     */
    'ID'?: string;
    /**
     * Name of status: submitted, complete, in_progress
     * @type {string}
     * @memberof EmailJobStatus
     */
    'Status'?: string;
    /**
     * 
     * @type {number}
     * @memberof EmailJobStatus
     */
    'RecipientsCount'?: number;
    /**
     * 
     * @type {Array<EmailJobFailedStatus>}
     * @memberof EmailJobStatus
     */
    'Failed'?: Array<EmailJobFailedStatus>;
    /**
     * Total emails failed.
     * @type {number}
     * @memberof EmailJobStatus
     */
    'FailedCount'?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmailJobStatus
     */
    'Sent'?: Array<string>;
    /**
     * Total emails sent.
     * @type {number}
     * @memberof EmailJobStatus
     */
    'SentCount'?: number;
    /**
     * Number of delivered messages
     * @type {Array<string>}
     * @memberof EmailJobStatus
     */
    'Delivered'?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof EmailJobStatus
     */
    'DeliveredCount'?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmailJobStatus
     */
    'Pending'?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof EmailJobStatus
     */
    'PendingCount'?: number;
    /**
     * Number of opened messages
     * @type {Array<string>}
     * @memberof EmailJobStatus
     */
    'Opened'?: Array<string>;
    /**
     * Total emails opened.
     * @type {number}
     * @memberof EmailJobStatus
     */
    'OpenedCount'?: number;
    /**
     * Number of clicked messages
     * @type {Array<string>}
     * @memberof EmailJobStatus
     */
    'Clicked'?: Array<string>;
    /**
     * Total emails clicked
     * @type {number}
     * @memberof EmailJobStatus
     */
    'ClickedCount'?: number;
    /**
     * Number of unsubscribed messages
     * @type {Array<string>}
     * @memberof EmailJobStatus
     */
    'Unsubscribed'?: Array<string>;
    /**
     * Total emails unsubscribed
     * @type {number}
     * @memberof EmailJobStatus
     */
    'UnsubscribedCount'?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmailJobStatus
     */
    'AbuseReports'?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof EmailJobStatus
     */
    'AbuseReportsCount'?: number;
    /**
     * List of all MessageIDs for this job.
     * @type {Array<string>}
     * @memberof EmailJobStatus
     */
    'MessageIDs'?: Array<string>;
}

