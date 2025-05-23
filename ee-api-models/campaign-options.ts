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
import { DeliveryOptimizationType } from './delivery-optimization-type';
// May contain unused imports in some cases
// @ts-ignore
import { SplitOptions } from './split-options';

/**
 * Different send options for a Campaign
 * @export
 * @interface CampaignOptions
 */
export interface CampaignOptions {
    /**
     * 
     * @type {DeliveryOptimizationType}
     * @memberof CampaignOptions
     */
    'DeliveryOptimization'?: DeliveryOptimizationType;
    /**
     * Should the opens be tracked? If no value has been provided, Account\'s default setting will be used.
     * @type {boolean}
     * @memberof CampaignOptions
     */
    'TrackOpens'?: boolean | null;
    /**
     * Should the clicks be tracked? If no value has been provided, Account\'s default setting will be used.
     * @type {boolean}
     * @memberof CampaignOptions
     */
    'TrackClicks'?: boolean | null;
    /**
     * Date when this Campaign is scheduled to be sent on
     * @type {string}
     * @memberof CampaignOptions
     */
    'ScheduleFor'?: string | null;
    /**
     * How often (in minutes) to send the campaign
     * @type {number}
     * @memberof CampaignOptions
     */
    'TriggerFrequency'?: number;
    /**
     * How many times send the campaign
     * @type {number}
     * @memberof CampaignOptions
     */
    'TriggerCount'?: number;
    /**
     * 
     * @type {SplitOptions}
     * @memberof CampaignOptions
     */
    'SplitOptions'?: SplitOptions;
}



