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
import { BodyPart } from './body-part';
// May contain unused imports in some cases
// @ts-ignore
import { MessageAttachment } from './message-attachment';
// May contain unused imports in some cases
// @ts-ignore
import { Utm } from './utm';

/**
 * Proper e-mail content
 * @export
 * @interface EmailContent
 */
export interface EmailContent {
    /**
     * List of e-mail body parts, with user-provided MIME types (text/html, text/plain etc)
     * @type {Array<BodyPart>}
     * @memberof EmailContent
     */
    'Body'?: Array<BodyPart>;
    /**
     * A key-value collection of custom merge fields, shared between recipients. Should be used in e-mail body like so: {firstname}, {lastname} etc.
     * @type {{ [key: string]: string; }}
     * @memberof EmailContent
     */
    'Merge'?: { [key: string]: string; };
    /**
     * Attachments provided by sending binary data
     * @type {Array<MessageAttachment>}
     * @memberof EmailContent
     */
    'Attachments'?: Array<MessageAttachment>;
    /**
     * A key-value collection of custom e-mail headers.
     * @type {{ [key: string]: string; }}
     * @memberof EmailContent
     */
    'Headers'?: { [key: string]: string; };
    /**
     * Postback header.
     * @type {string}
     * @memberof EmailContent
     */
    'Postback'?: string;
    /**
     * E-mail with an optional name to be used as the envelope from address (e.g.: John Doe <email@domain.com>)
     * @type {string}
     * @memberof EmailContent
     */
    'EnvelopeFrom'?: string;
    /**
     * Your e-mail with an optional name (e.g.: John Doe <email@domain.com>)
     * @type {string}
     * @memberof EmailContent
     */
    'From'?: string;
    /**
     * To what address should the recipients reply to (e.g. John Doe <email@domain.com>)
     * @type {string}
     * @memberof EmailContent
     */
    'ReplyTo'?: string;
    /**
     * Default subject of email.
     * @type {string}
     * @memberof EmailContent
     */
    'Subject'?: string;
    /**
     * Name of template.
     * @type {string}
     * @memberof EmailContent
     */
    'TemplateName'?: string;
    /**
     * Names of previously uploaded files that should be sent as downloadable attachments
     * @type {Array<string>}
     * @memberof EmailContent
     */
    'AttachFiles'?: Array<string>;
    /**
     * 
     * @type {Utm}
     * @memberof EmailContent
     */
    'Utm'?: Utm;
}

