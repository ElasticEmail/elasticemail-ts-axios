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



/**
 * 
 * @export
 * @enum {string}
 */

export const AccessLevel = {
    None: 'None',
    ViewAccount: 'ViewAccount',
    ViewContacts: 'ViewContacts',
    ViewForms: 'ViewForms',
    ViewTemplates: 'ViewTemplates',
    ViewCampaigns: 'ViewCampaigns',
    ViewChannels: 'ViewChannels',
    ViewAutomations: 'ViewAutomations',
    ViewSurveys: 'ViewSurveys',
    ViewSettings: 'ViewSettings',
    ViewBilling: 'ViewBilling',
    ViewSubAccounts: 'ViewSubAccounts',
    ViewUsers: 'ViewUsers',
    ViewFiles: 'ViewFiles',
    ViewReports: 'ViewReports',
    ModifyAccount: 'ModifyAccount',
    ModifyContacts: 'ModifyContacts',
    ModifyForms: 'ModifyForms',
    ModifyTemplates: 'ModifyTemplates',
    ModifyCampaigns: 'ModifyCampaigns',
    ModifyChannels: 'ModifyChannels',
    ModifyAutomations: 'ModifyAutomations',
    ModifySurveys: 'ModifySurveys',
    ModifyFiles: 'ModifyFiles',
    Export: 'Export',
    SendSmtp: 'SendSmtp',
    SendSms: 'SendSMS',
    ModifySettings: 'ModifySettings',
    ModifyBilling: 'ModifyBilling',
    ModifyProfile: 'ModifyProfile',
    ModifySubAccounts: 'ModifySubAccounts',
    ModifyUsers: 'ModifyUsers',
    Security: 'Security',
    ModifyLanguage: 'ModifyLanguage',
    ViewSupport: 'ViewSupport',
    SendHttp: 'SendHttp',
    Modify2FaEmail: 'Modify2FAEmail',
    ModifySupport: 'ModifySupport',
    ViewCustomFields: 'ViewCustomFields',
    ModifyCustomFields: 'ModifyCustomFields',
    ModifyWebNotifications: 'ModifyWebNotifications',
    ExtendedLogs: 'ExtendedLogs',
    VerifyEmails: 'VerifyEmails',
    Modify2FaSms: 'Modify2FASms',
    DisableContactsStore: 'DisableContactsStore',
    ModifyLandingPages: 'ModifyLandingPages',
    ViewLandingPages: 'ViewLandingPages',
    ModifySuppressions: 'ModifySuppressions',
    ViewSuppressions: 'ViewSuppressions',
    ViewDragDropEditor: 'ViewDragDropEditor',
    ViewTemplateEditor: 'ViewTemplateEditor'
} as const;

export type AccessLevel = typeof AccessLevel[keyof typeof AccessLevel];



