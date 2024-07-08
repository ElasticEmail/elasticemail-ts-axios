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
import type { EmailPredictedValidationStatus } from './email-predicted-validation-status';
// May contain unused imports in some cases
// @ts-ignore
import type { EmailValidationStatus } from './email-validation-status';

/**
 * 
 * @export
 * @interface EmailValidationResult
 */
export interface EmailValidationResult {
    /**
     * Local part of an email
     * @type {string}
     * @memberof EmailValidationResult
     */
    'Account'?: string;
    /**
     * Name of selected domain.
     * @type {string}
     * @memberof EmailValidationResult
     */
    'Domain'?: string;
    /**
     * Full email address that was verified
     * @type {string}
     * @memberof EmailValidationResult
     */
    'Email'?: string;
    /**
     * Suggested spelling if a possible mistake was found
     * @type {string}
     * @memberof EmailValidationResult
     */
    'SuggestedSpelling'?: string;
    /**
     * Does the email have a temporary domain
     * @type {boolean}
     * @memberof EmailValidationResult
     */
    'Disposable'?: boolean;
    /**
     * Is an email a role email (e.g. info@, noreply@ etc.)
     * @type {boolean}
     * @memberof EmailValidationResult
     */
    'Role'?: boolean;
    /**
     * All detected issues
     * @type {string}
     * @memberof EmailValidationResult
     */
    'Reason'?: string;
    /**
     * Added date
     * @type {string}
     * @memberof EmailValidationResult
     */
    'DateAdded'?: string;
    /**
     * 
     * @type {EmailValidationStatus}
     * @memberof EmailValidationResult
     */
    'Result'?: EmailValidationStatus;
    /**
     * Predicted score
     * @type {number}
     * @memberof EmailValidationResult
     */
    'PredictedScore'?: number;
    /**
     * 
     * @type {EmailPredictedValidationStatus}
     * @memberof EmailValidationResult
     */
    'PredictedStatus'?: EmailPredictedValidationStatus;
}



