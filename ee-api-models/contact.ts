/* tslint:disable */
/* eslint-disable */
/**
 * Elastic Email REST API
 * This API is based on the REST API architecture, allowing the user to easily manage their data with this resource-based approach.    Every API call is established on which specific request type (GET, POST, PUT, DELETE) will be used.    To start using this API, you will need your Access Token (available <a href=\"https://elasticemail.com/account#/settings/new/manage-api\">here</a>). Remember to keep it safe. Required access levels are listed in the given request’s description.    This is the documentation for REST API. If you’d like to read our legacy documentation regarding Web API v2 click <a href=\"https://api.elasticemail.com/public/help\">here</a>.
 *
 * The version of the OpenAPI document: 4.0.0
 * Contact: support@elasticemail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ConsentData } from './consent-data';
import { ContactActivity } from './contact-activity';
import { ContactSource } from './contact-source';
import { ContactStatus } from './contact-status';

/**
 * Contact
 * @export
 * @interface Contact
 */
export interface Contact {
    /**
     * Proper email address.
     * @type {string}
     * @memberof Contact
     */
    Email?: string;
    /**
     * Status of the given resource
     * @type {ContactStatus}
     * @memberof Contact
     */
    Status?: ContactStatus;
    /**
     * First name.
     * @type {string}
     * @memberof Contact
     */
    FirstName?: string;
    /**
     * Last name.
     * @type {string}
     * @memberof Contact
     */
    LastName?: string;
    /**
     * A key-value collection of custom contact fields which can be used in the system.
     * @type {{ [key: string]: string; }}
     * @memberof Contact
     */
    CustomFields?: { [key: string]: string; };
    /**
     * 
     * @type {ConsentData}
     * @memberof Contact
     */
    Consent?: ConsentData;
    /**
     * From where was this contact added
     * @type {ContactSource}
     * @memberof Contact
     */
    Source?: ContactSource;
    /**
     * Date of creation in YYYY-MM-DDThh:ii:ss format
     * @type {string}
     * @memberof Contact
     */
    DateAdded?: string;
    /**
     * Last change date
     * @type {string}
     * @memberof Contact
     */
    DateUpdated?: string | null;
    /**
     * Date of last status change.
     * @type {string}
     * @memberof Contact
     */
    StatusChangeDate?: string | null;
    /**
     * Contact\'s email statistics and activity
     * @type {ContactActivity}
     * @memberof Contact
     */
    Activity?: ContactActivity;
}

