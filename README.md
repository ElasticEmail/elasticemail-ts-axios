## elasticemail-client-ts-axios@4.0.27

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))


## Examples

Function ||
------------ | ------------- 
[addCampaign](examples/functions/addCampaign.ts) | [readme](examples/functions/addCampaign.md)
[addContacts](examples/functions/addContacts.ts) | [readme](examples/functions/addContacts.md)
[addList](examples/functions/addList.ts) | [readme](examples/functions/addList.md)
[addTemplate](examples/functions/addTemplate.ts) | [readme](examples/functions/addTemplate.md)
[deleteCampaign](examples/functions/deleteCampaign.ts) | [readme](examples/functions/deleteCampaign.md)
[deleteContact](examples/functions/deleteContact.ts) | [readme](examples/functions/deleteContact.md)
[deleteList](examples/functions/deleteList.ts) | [readme](examples/functions/deleteList.md)
[deleteTemplate](examples/functions/deleteTemplate.ts) | [readme](examples/functions/deleteTemplate.md)
[exportContacts](examples/functions/exportContacts.ts) | [readme](examples/functions/exportContacts.md)
[loadCampaign](examples/functions/loadCampaign.ts) | [readme](examples/functions/loadCampaign.md)
[loadCampaignsStats](examples/functions/loadCampaignsStats.ts) | [readme](examples/functions/loadCampaignsStats.md)
[loadChannelsStats](examples/functions/loadChannelsStats.ts) | [readme](examples/functions/loadChannelsStats.md)
[loadList](examples/functions/loadList.ts) | [readme](examples/functions/loadList.md)
[loadStatistics](examples/functions/loadStatistics.ts) | [readme](examples/functions/loadStatistics.md)
[loadTemplate](examples/functions/loadTemplate.ts) | [readme](examples/functions/loadTemplate.md)
[sendBulkEmails](examples/functions/sendBulkEmails.ts) | [readme](examples/functions/sendBulkEmails.md)
[sendTransactionalEmails](examples/functions/sendTransactionalEmails.ts) | [readme](examples/functions/sendTransactionalEmails.md)
[updateCampaign](examples/functions/updateCampaign.ts) | [readme](examples/functions/updateCampaign.md)
[uploadContacts](examples/functions/uploadContacts.ts) | [readme](examples/functions/uploadContacts.md)

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install elasticemail-client-ts-axios@4.0.27 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://api.elasticemail.com/v4*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CampaignsApi* | [**campaignsByNameDelete**](docs/CampaignsApi.md#campaignsbynamedelete) | **DELETE** /campaigns/{name} | Delete Campaign
*CampaignsApi* | [**campaignsByNameGet**](docs/CampaignsApi.md#campaignsbynameget) | **GET** /campaigns/{name} | Load Campaign
*CampaignsApi* | [**campaignsByNamePausePut**](docs/CampaignsApi.md#campaignsbynamepauseput) | **PUT** /campaigns/{name}/pause | Pause Campaign
*CampaignsApi* | [**campaignsByNamePut**](docs/CampaignsApi.md#campaignsbynameput) | **PUT** /campaigns/{name} | Update Campaign
*CampaignsApi* | [**campaignsGet**](docs/CampaignsApi.md#campaignsget) | **GET** /campaigns | Load Campaigns
*CampaignsApi* | [**campaignsPost**](docs/CampaignsApi.md#campaignspost) | **POST** /campaigns | Add Campaign
*ContactsApi* | [**contactsByEmailDelete**](docs/ContactsApi.md#contactsbyemaildelete) | **DELETE** /contacts/{email} | Delete Contact
*ContactsApi* | [**contactsByEmailGet**](docs/ContactsApi.md#contactsbyemailget) | **GET** /contacts/{email} | Load Contact
*ContactsApi* | [**contactsByEmailPut**](docs/ContactsApi.md#contactsbyemailput) | **PUT** /contacts/{email} | Update Contact
*ContactsApi* | [**contactsDeletePost**](docs/ContactsApi.md#contactsdeletepost) | **POST** /contacts/delete | Delete Contacts Bulk
*ContactsApi* | [**contactsExportByIdStatusGet**](docs/ContactsApi.md#contactsexportbyidstatusget) | **GET** /contacts/export/{id}/status | Check Export Status
*ContactsApi* | [**contactsExportPost**](docs/ContactsApi.md#contactsexportpost) | **POST** /contacts/export | Export Contacts
*ContactsApi* | [**contactsGet**](docs/ContactsApi.md#contactsget) | **GET** /contacts | Load Contacts
*ContactsApi* | [**contactsImportPost**](docs/ContactsApi.md#contactsimportpost) | **POST** /contacts/import | Upload Contacts
*ContactsApi* | [**contactsPost**](docs/ContactsApi.md#contactspost) | **POST** /contacts | Add Contact
*DomainsApi* | [**domainsByDomainDelete**](docs/DomainsApi.md#domainsbydomaindelete) | **DELETE** /domains/{domain} | Delete Domain
*DomainsApi* | [**domainsByDomainGet**](docs/DomainsApi.md#domainsbydomainget) | **GET** /domains/{domain} | Load Domain
*DomainsApi* | [**domainsByDomainPut**](docs/DomainsApi.md#domainsbydomainput) | **PUT** /domains/{domain} | Update Domain
*DomainsApi* | [**domainsByDomainRestrictedGet**](docs/DomainsApi.md#domainsbydomainrestrictedget) | **GET** /domains/{domain}/restricted | Check for domain restriction
*DomainsApi* | [**domainsByDomainVerificationPut**](docs/DomainsApi.md#domainsbydomainverificationput) | **PUT** /domains/{domain}/verification | Verify Domain
*DomainsApi* | [**domainsByEmailDefaultPatch**](docs/DomainsApi.md#domainsbyemaildefaultpatch) | **PATCH** /domains/{email}/default | Set Default
*DomainsApi* | [**domainsGet**](docs/DomainsApi.md#domainsget) | **GET** /domains | Load Domains
*DomainsApi* | [**domainsPost**](docs/DomainsApi.md#domainspost) | **POST** /domains | Add Domain
*EmailsApi* | [**emailsByMsgidViewGet**](docs/EmailsApi.md#emailsbymsgidviewget) | **GET** /emails/{msgid}/view | View Email
*EmailsApi* | [**emailsByTransactionidStatusGet**](docs/EmailsApi.md#emailsbytransactionidstatusget) | **GET** /emails/{transactionid}/status | Get Status
*EmailsApi* | [**emailsMergefilePost**](docs/EmailsApi.md#emailsmergefilepost) | **POST** /emails/mergefile | Send Bulk Emails CSV
*EmailsApi* | [**emailsPost**](docs/EmailsApi.md#emailspost) | **POST** /emails | Send Bulk Emails
*EmailsApi* | [**emailsTransactionalPost**](docs/EmailsApi.md#emailstransactionalpost) | **POST** /emails/transactional | Send Transactional Email
*EventsApi* | [**eventsByTransactionidGet**](docs/EventsApi.md#eventsbytransactionidget) | **GET** /events/{transactionid} | Load Email Events
*EventsApi* | [**eventsChannelsByNameExportPost**](docs/EventsApi.md#eventschannelsbynameexportpost) | **POST** /events/channels/{name}/export | Export Channel Events
*EventsApi* | [**eventsChannelsByNameGet**](docs/EventsApi.md#eventschannelsbynameget) | **GET** /events/channels/{name} | Load Channel Events
*EventsApi* | [**eventsChannelsExportByIdStatusGet**](docs/EventsApi.md#eventschannelsexportbyidstatusget) | **GET** /events/channels/export/{id}/status | Check Channel Export Status
*EventsApi* | [**eventsExportByIdStatusGet**](docs/EventsApi.md#eventsexportbyidstatusget) | **GET** /events/export/{id}/status | Check Export Status
*EventsApi* | [**eventsExportPost**](docs/EventsApi.md#eventsexportpost) | **POST** /events/export | Export Events
*EventsApi* | [**eventsGet**](docs/EventsApi.md#eventsget) | **GET** /events | Load Events
*FilesApi* | [**filesByNameDelete**](docs/FilesApi.md#filesbynamedelete) | **DELETE** /files/{name} | Delete File
*FilesApi* | [**filesByNameGet**](docs/FilesApi.md#filesbynameget) | **GET** /files/{name} | Download File
*FilesApi* | [**filesByNameInfoGet**](docs/FilesApi.md#filesbynameinfoget) | **GET** /files/{name}/info | Load File Details
*FilesApi* | [**filesGet**](docs/FilesApi.md#filesget) | **GET** /files | List Files
*FilesApi* | [**filesPost**](docs/FilesApi.md#filespost) | **POST** /files | Upload File
*InboundRouteApi* | [**inboundrouteByIdDelete**](docs/InboundRouteApi.md#inboundroutebyiddelete) | **DELETE** /inboundroute/{id} | Delete Route
*InboundRouteApi* | [**inboundrouteByIdGet**](docs/InboundRouteApi.md#inboundroutebyidget) | **GET** /inboundroute/{id} | Get Route
*InboundRouteApi* | [**inboundrouteByIdPut**](docs/InboundRouteApi.md#inboundroutebyidput) | **PUT** /inboundroute/{id} | Update Route
*InboundRouteApi* | [**inboundrouteGet**](docs/InboundRouteApi.md#inboundrouteget) | **GET** /inboundroute | Get Routes
*InboundRouteApi* | [**inboundrouteOrderPut**](docs/InboundRouteApi.md#inboundrouteorderput) | **PUT** /inboundroute/order | Update Sorting
*InboundRouteApi* | [**inboundroutePost**](docs/InboundRouteApi.md#inboundroutepost) | **POST** /inboundroute | Create Route
*ListsApi* | [**listsByListnameContactsGet**](docs/ListsApi.md#listsbylistnamecontactsget) | **GET** /lists/{listname}/contacts | Load Contacts in List
*ListsApi* | [**listsByNameContactsPost**](docs/ListsApi.md#listsbynamecontactspost) | **POST** /lists/{name}/contacts | Add Contacts to List
*ListsApi* | [**listsByNameContactsRemovePost**](docs/ListsApi.md#listsbynamecontactsremovepost) | **POST** /lists/{name}/contacts/remove | Remove Contacts from List
*ListsApi* | [**listsByNameDelete**](docs/ListsApi.md#listsbynamedelete) | **DELETE** /lists/{name} | Delete List
*ListsApi* | [**listsByNameGet**](docs/ListsApi.md#listsbynameget) | **GET** /lists/{name} | Load List
*ListsApi* | [**listsByNamePut**](docs/ListsApi.md#listsbynameput) | **PUT** /lists/{name} | Update List
*ListsApi* | [**listsGet**](docs/ListsApi.md#listsget) | **GET** /lists | Load Lists
*ListsApi* | [**listsPost**](docs/ListsApi.md#listspost) | **POST** /lists | Add List
*SecurityApi* | [**securityApikeysByNameDelete**](docs/SecurityApi.md#securityapikeysbynamedelete) | **DELETE** /security/apikeys/{name} | Delete ApiKey
*SecurityApi* | [**securityApikeysByNameGet**](docs/SecurityApi.md#securityapikeysbynameget) | **GET** /security/apikeys/{name} | Load ApiKey
*SecurityApi* | [**securityApikeysByNamePut**](docs/SecurityApi.md#securityapikeysbynameput) | **PUT** /security/apikeys/{name} | Update ApiKey
*SecurityApi* | [**securityApikeysGet**](docs/SecurityApi.md#securityapikeysget) | **GET** /security/apikeys | List ApiKeys
*SecurityApi* | [**securityApikeysPost**](docs/SecurityApi.md#securityapikeyspost) | **POST** /security/apikeys | Add ApiKey
*SecurityApi* | [**securitySmtpByNameDelete**](docs/SecurityApi.md#securitysmtpbynamedelete) | **DELETE** /security/smtp/{name} | Delete SMTP Credential
*SecurityApi* | [**securitySmtpByNameGet**](docs/SecurityApi.md#securitysmtpbynameget) | **GET** /security/smtp/{name} | Load SMTP Credential
*SecurityApi* | [**securitySmtpByNamePut**](docs/SecurityApi.md#securitysmtpbynameput) | **PUT** /security/smtp/{name} | Update SMTP Credential
*SecurityApi* | [**securitySmtpGet**](docs/SecurityApi.md#securitysmtpget) | **GET** /security/smtp | List SMTP Credentials
*SecurityApi* | [**securitySmtpPost**](docs/SecurityApi.md#securitysmtppost) | **POST** /security/smtp | Add SMTP Credential
*SegmentsApi* | [**segmentsByNameDelete**](docs/SegmentsApi.md#segmentsbynamedelete) | **DELETE** /segments/{name} | Delete Segment
*SegmentsApi* | [**segmentsByNameGet**](docs/SegmentsApi.md#segmentsbynameget) | **GET** /segments/{name} | Load Segment
*SegmentsApi* | [**segmentsByNamePut**](docs/SegmentsApi.md#segmentsbynameput) | **PUT** /segments/{name} | Update Segment
*SegmentsApi* | [**segmentsGet**](docs/SegmentsApi.md#segmentsget) | **GET** /segments | Load Segments
*SegmentsApi* | [**segmentsPost**](docs/SegmentsApi.md#segmentspost) | **POST** /segments | Add Segment
*StatisticsApi* | [**statisticsCampaignsByNameGet**](docs/StatisticsApi.md#statisticscampaignsbynameget) | **GET** /statistics/campaigns/{name} | Load Campaign Stats
*StatisticsApi* | [**statisticsCampaignsGet**](docs/StatisticsApi.md#statisticscampaignsget) | **GET** /statistics/campaigns | Load Campaigns Stats
*StatisticsApi* | [**statisticsChannelsByNameGet**](docs/StatisticsApi.md#statisticschannelsbynameget) | **GET** /statistics/channels/{name} | Load Channel Stats
*StatisticsApi* | [**statisticsChannelsGet**](docs/StatisticsApi.md#statisticschannelsget) | **GET** /statistics/channels | Load Channels Stats
*StatisticsApi* | [**statisticsGet**](docs/StatisticsApi.md#statisticsget) | **GET** /statistics | Load Statistics
*SubAccountsApi* | [**subaccountsByEmailCreditsPatch**](docs/SubAccountsApi.md#subaccountsbyemailcreditspatch) | **PATCH** /subaccounts/{email}/credits | Add, Subtract Email Credits
*SubAccountsApi* | [**subaccountsByEmailDelete**](docs/SubAccountsApi.md#subaccountsbyemaildelete) | **DELETE** /subaccounts/{email} | Delete SubAccount
*SubAccountsApi* | [**subaccountsByEmailGet**](docs/SubAccountsApi.md#subaccountsbyemailget) | **GET** /subaccounts/{email} | Load SubAccount
*SubAccountsApi* | [**subaccountsByEmailSettingsEmailPut**](docs/SubAccountsApi.md#subaccountsbyemailsettingsemailput) | **PUT** /subaccounts/{email}/settings/email | Update SubAccount Email Settings
*SubAccountsApi* | [**subaccountsGet**](docs/SubAccountsApi.md#subaccountsget) | **GET** /subaccounts | Load SubAccounts
*SubAccountsApi* | [**subaccountsPost**](docs/SubAccountsApi.md#subaccountspost) | **POST** /subaccounts | Add SubAccount
*SuppressionsApi* | [**suppressionsBouncesGet**](docs/SuppressionsApi.md#suppressionsbouncesget) | **GET** /suppressions/bounces | Get Bounce List
*SuppressionsApi* | [**suppressionsBouncesImportPost**](docs/SuppressionsApi.md#suppressionsbouncesimportpost) | **POST** /suppressions/bounces/import | Add Bounces Async
*SuppressionsApi* | [**suppressionsBouncesPost**](docs/SuppressionsApi.md#suppressionsbouncespost) | **POST** /suppressions/bounces | Add Bounces
*SuppressionsApi* | [**suppressionsByEmailDelete**](docs/SuppressionsApi.md#suppressionsbyemaildelete) | **DELETE** /suppressions/{email} | Delete Suppression
*SuppressionsApi* | [**suppressionsByEmailGet**](docs/SuppressionsApi.md#suppressionsbyemailget) | **GET** /suppressions/{email} | Get Suppression
*SuppressionsApi* | [**suppressionsComplaintsGet**](docs/SuppressionsApi.md#suppressionscomplaintsget) | **GET** /suppressions/complaints | Get Complaints List
*SuppressionsApi* | [**suppressionsComplaintsImportPost**](docs/SuppressionsApi.md#suppressionscomplaintsimportpost) | **POST** /suppressions/complaints/import | Add Complaints Async
*SuppressionsApi* | [**suppressionsComplaintsPost**](docs/SuppressionsApi.md#suppressionscomplaintspost) | **POST** /suppressions/complaints | Add Complaints
*SuppressionsApi* | [**suppressionsGet**](docs/SuppressionsApi.md#suppressionsget) | **GET** /suppressions | Get Suppressions
*SuppressionsApi* | [**suppressionsUnsubscribesGet**](docs/SuppressionsApi.md#suppressionsunsubscribesget) | **GET** /suppressions/unsubscribes | Get Unsubscribes List
*SuppressionsApi* | [**suppressionsUnsubscribesImportPost**](docs/SuppressionsApi.md#suppressionsunsubscribesimportpost) | **POST** /suppressions/unsubscribes/import | Add Unsubscribes Async
*SuppressionsApi* | [**suppressionsUnsubscribesPost**](docs/SuppressionsApi.md#suppressionsunsubscribespost) | **POST** /suppressions/unsubscribes | Add Unsubscribes
*TemplatesApi* | [**templatesByNameDelete**](docs/TemplatesApi.md#templatesbynamedelete) | **DELETE** /templates/{name} | Delete Template
*TemplatesApi* | [**templatesByNameGet**](docs/TemplatesApi.md#templatesbynameget) | **GET** /templates/{name} | Load Template
*TemplatesApi* | [**templatesByNamePut**](docs/TemplatesApi.md#templatesbynameput) | **PUT** /templates/{name} | Update Template
*TemplatesApi* | [**templatesGet**](docs/TemplatesApi.md#templatesget) | **GET** /templates | Load Templates
*TemplatesApi* | [**templatesPost**](docs/TemplatesApi.md#templatespost) | **POST** /templates | Add Template
*VerificationsApi* | [**verificationsByEmailDelete**](docs/VerificationsApi.md#verificationsbyemaildelete) | **DELETE** /verifications/{email} | Delete Email Verification Result
*VerificationsApi* | [**verificationsByEmailGet**](docs/VerificationsApi.md#verificationsbyemailget) | **GET** /verifications/{email} | Get Email Verification Result
*VerificationsApi* | [**verificationsByEmailPost**](docs/VerificationsApi.md#verificationsbyemailpost) | **POST** /verifications/{email} | Verify Email
*VerificationsApi* | [**verificationsFilesByIdDelete**](docs/VerificationsApi.md#verificationsfilesbyiddelete) | **DELETE** /verifications/files/{id} | Delete File Verification Result
*VerificationsApi* | [**verificationsFilesByIdResultDownloadGet**](docs/VerificationsApi.md#verificationsfilesbyidresultdownloadget) | **GET** /verifications/files/{id}/result/download | Download File Verification Result
*VerificationsApi* | [**verificationsFilesByIdResultGet**](docs/VerificationsApi.md#verificationsfilesbyidresultget) | **GET** /verifications/files/{id}/result | Get Detailed File Verification Result
*VerificationsApi* | [**verificationsFilesByIdVerificationPost**](docs/VerificationsApi.md#verificationsfilesbyidverificationpost) | **POST** /verifications/files/{id}/verification | Start verification
*VerificationsApi* | [**verificationsFilesPost**](docs/VerificationsApi.md#verificationsfilespost) | **POST** /verifications/files | Upload File with Emails
*VerificationsApi* | [**verificationsFilesResultGet**](docs/VerificationsApi.md#verificationsfilesresultget) | **GET** /verifications/files/result | Get Files Verification Results
*VerificationsApi* | [**verificationsGet**](docs/VerificationsApi.md#verificationsget) | **GET** /verifications | Get Emails Verification Results


### Documentation For Models

 - [AccessLevel](docs/AccessLevel.md)
 - [AccountStatusEnum](docs/AccountStatusEnum.md)
 - [ApiKey](docs/ApiKey.md)
 - [ApiKeyPayload](docs/ApiKeyPayload.md)
 - [BodyContentType](docs/BodyContentType.md)
 - [BodyPart](docs/BodyPart.md)
 - [Campaign](docs/Campaign.md)
 - [CampaignOptions](docs/CampaignOptions.md)
 - [CampaignRecipient](docs/CampaignRecipient.md)
 - [CampaignStatus](docs/CampaignStatus.md)
 - [CampaignTemplate](docs/CampaignTemplate.md)
 - [CertificateValidationStatus](docs/CertificateValidationStatus.md)
 - [ChannelLogStatusSummary](docs/ChannelLogStatusSummary.md)
 - [CompressionFormat](docs/CompressionFormat.md)
 - [ConsentData](docs/ConsentData.md)
 - [ConsentTracking](docs/ConsentTracking.md)
 - [Contact](docs/Contact.md)
 - [ContactActivity](docs/ContactActivity.md)
 - [ContactPayload](docs/ContactPayload.md)
 - [ContactSource](docs/ContactSource.md)
 - [ContactStatus](docs/ContactStatus.md)
 - [ContactUpdatePayload](docs/ContactUpdatePayload.md)
 - [ContactsList](docs/ContactsList.md)
 - [DeliveryOptimizationType](docs/DeliveryOptimizationType.md)
 - [DomainData](docs/DomainData.md)
 - [DomainDetail](docs/DomainDetail.md)
 - [DomainOwner](docs/DomainOwner.md)
 - [DomainPayload](docs/DomainPayload.md)
 - [DomainUpdatePayload](docs/DomainUpdatePayload.md)
 - [EmailContent](docs/EmailContent.md)
 - [EmailData](docs/EmailData.md)
 - [EmailJobFailedStatus](docs/EmailJobFailedStatus.md)
 - [EmailJobStatus](docs/EmailJobStatus.md)
 - [EmailMessageData](docs/EmailMessageData.md)
 - [EmailPredictedValidationStatus](docs/EmailPredictedValidationStatus.md)
 - [EmailRecipient](docs/EmailRecipient.md)
 - [EmailSend](docs/EmailSend.md)
 - [EmailStatus](docs/EmailStatus.md)
 - [EmailTransactionalMessageData](docs/EmailTransactionalMessageData.md)
 - [EmailValidationResult](docs/EmailValidationResult.md)
 - [EmailValidationStatus](docs/EmailValidationStatus.md)
 - [EmailView](docs/EmailView.md)
 - [EmailsPayload](docs/EmailsPayload.md)
 - [EncodingType](docs/EncodingType.md)
 - [EventType](docs/EventType.md)
 - [EventsOrderBy](docs/EventsOrderBy.md)
 - [ExportFileFormats](docs/ExportFileFormats.md)
 - [ExportLink](docs/ExportLink.md)
 - [ExportStatus](docs/ExportStatus.md)
 - [FileInfo](docs/FileInfo.md)
 - [FilePayload](docs/FilePayload.md)
 - [FileUploadResult](docs/FileUploadResult.md)
 - [InboundPayload](docs/InboundPayload.md)
 - [InboundRoute](docs/InboundRoute.md)
 - [InboundRouteActionType](docs/InboundRouteActionType.md)
 - [InboundRouteFilterType](docs/InboundRouteFilterType.md)
 - [ListPayload](docs/ListPayload.md)
 - [ListUpdatePayload](docs/ListUpdatePayload.md)
 - [LogJobStatus](docs/LogJobStatus.md)
 - [LogStatusSummary](docs/LogStatusSummary.md)
 - [MergeEmailPayload](docs/MergeEmailPayload.md)
 - [MessageAttachment](docs/MessageAttachment.md)
 - [MessageCategory](docs/MessageCategory.md)
 - [MessageCategoryEnum](docs/MessageCategoryEnum.md)
 - [NewApiKey](docs/NewApiKey.md)
 - [NewSmtpCredentials](docs/NewSmtpCredentials.md)
 - [Options](docs/Options.md)
 - [RecipientEvent](docs/RecipientEvent.md)
 - [Segment](docs/Segment.md)
 - [SegmentPayload](docs/SegmentPayload.md)
 - [SmtpCredentials](docs/SmtpCredentials.md)
 - [SmtpCredentialsPayload](docs/SmtpCredentialsPayload.md)
 - [SortOrderItem](docs/SortOrderItem.md)
 - [SplitOptimizationType](docs/SplitOptimizationType.md)
 - [SplitOptions](docs/SplitOptions.md)
 - [SubAccountInfo](docs/SubAccountInfo.md)
 - [SubaccountEmailCreditsPayload](docs/SubaccountEmailCreditsPayload.md)
 - [SubaccountEmailSettings](docs/SubaccountEmailSettings.md)
 - [SubaccountEmailSettingsPayload](docs/SubaccountEmailSettingsPayload.md)
 - [SubaccountPayload](docs/SubaccountPayload.md)
 - [SubaccountSettingsInfo](docs/SubaccountSettingsInfo.md)
 - [SubaccountSettingsInfoPayload](docs/SubaccountSettingsInfoPayload.md)
 - [Suppression](docs/Suppression.md)
 - [Template](docs/Template.md)
 - [TemplatePayload](docs/TemplatePayload.md)
 - [TemplateScope](docs/TemplateScope.md)
 - [TemplateType](docs/TemplateType.md)
 - [TrackingType](docs/TrackingType.md)
 - [TrackingValidationStatus](docs/TrackingValidationStatus.md)
 - [TransactionalRecipient](docs/TransactionalRecipient.md)
 - [Utm](docs/Utm.md)
 - [VerificationFileResult](docs/VerificationFileResult.md)
 - [VerificationFileResultDetails](docs/VerificationFileResultDetails.md)
 - [VerificationStatus](docs/VerificationStatus.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="apikey"></a>
### apikey

- **Type**: API key
- **API key parameter name**: X-ElasticEmail-ApiKey
- **Location**: HTTP header

<a id="ApiKeyAuthCustomBranding"></a>
### ApiKeyAuthCustomBranding

- **Type**: API key
- **API key parameter name**: X-Auth-Token
- **Location**: HTTP header

