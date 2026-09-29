<div align="center">

<img src=".github/ee-logo.png" alt="Elastic Email" width="96" />

# Elastic Email TypeScript SDK

The official TypeScript / JavaScript client library for the [Elastic Email](https://elasticemail.com) REST API v4, built on [axios](https://axios-http.com).

[![npm](https://img.shields.io/npm/v/@elasticemail/elasticemail-client-ts-axios?logo=npm&label=npm&color=CB3837)](https://www.npmjs.com/package/@elasticemail/elasticemail-client-ts-axios)
[![npm downloads](https://img.shields.io/npm/dm/@elasticemail/elasticemail-client-ts-axios?logo=npm&label=downloads&color=CB3837)](https://www.npmjs.com/package/@elasticemail/elasticemail-client-ts-axios)
[![TypeScript](https://img.shields.io/badge/TypeScript-types%20included-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![API](https://img.shields.io/badge/API-v4-0A7BBB)](https://elasticemail.com/developers/api-documentation/rest-api)
[![OpenAPI Generator](https://img.shields.io/badge/generated%20by-OpenAPI%20Generator-6BA539?logo=openapiinitiative&logoColor=white)](https://openapi-generator.tech)
[![License: MIT](https://img.shields.io/github/license/ElasticEmail/elasticemail-ts-axios?color=yellow)](LICENSE)

[![Latest release](https://img.shields.io/github/v/release/ElasticEmail/elasticemail-ts-axios?logo=github&label=release)](https://github.com/ElasticEmail/elasticemail-ts-axios/releases)
[![Last commit](https://img.shields.io/github/last-commit/ElasticEmail/elasticemail-ts-axios?logo=github)](https://github.com/ElasticEmail/elasticemail-ts-axios/commits/master)
[![Open issues](https://img.shields.io/github/issues/ElasticEmail/elasticemail-ts-axios?logo=github)](https://github.com/ElasticEmail/elasticemail-ts-axios/issues)
[![GitHub stars](https://img.shields.io/github/stars/ElasticEmail/elasticemail-ts-axios?style=flat&logo=github)](https://github.com/ElasticEmail/elasticemail-ts-axios/stargazers)

[Installation](#installation) •
[Quick start](#quick-start) •
[Examples](#more-examples) •
[API reference](#api-reference) •
[Models](#models) •
[Contributing](#contributing)

</div>

---

## Features

- **Transactional and bulk email.** Send single messages, bulk campaigns or CSV merge-file sends.
- **Contacts, lists and segments.** Add, update, import, export and bulk-delete contacts.
- **Campaigns and automations.** Create, update, pause and trigger automations for a contact.
- **Templates, files and attachments.** Manage templates and uploaded files.
- **Domains.** Verify sending domains and check SPF, DKIM, tracking and certificate status.
- **Webhooks and inbound routes.** Receive delivery events and route incoming mail.
- **Statistics, events and suppressions.** Track delivery, bounces, complaints and unsubscribes.
- **Subaccounts and security.** Manage subaccounts and API keys.
- **Typed and promise-based.** Every request and response has a TypeScript type, and every method returns an axios promise, so it works with `async`/`await` in TypeScript and plain JavaScript.

## Requirements

| Platform | Version |
| --- | --- |
| Node.js | Current LTS recommended (the SDK uses [axios](https://www.npmjs.com/package/axios) 1.x) |
| TypeScript | Optional. Type definitions ship with the package, no `@types` install needed |
| Browsers | Via a bundler (webpack, Vite, esbuild) |

You'll also need an Elastic Email **API key**. You can create one in your [API settings](https://app.elasticemail.com/marketing/settings/new/manage-api). Each endpoint's documentation lists the access level it needs.

## Installation

Install the [`@elasticemail/elasticemail-client-ts-axios`](https://www.npmjs.com/package/@elasticemail/elasticemail-client-ts-axios) package from npm:

```bash
npm install @elasticemail/elasticemail-client-ts-axios
```

Or with yarn or pnpm:

```bash
yarn add @elasticemail/elasticemail-client-ts-axios
pnpm add @elasticemail/elasticemail-client-ts-axios
```

npm installs the runtime dependency ([axios](https://www.npmjs.com/package/axios)) for you. The package ships compiled CommonJS and `.d.ts` files in `dist/`, so there's nothing to compile.

## Quick start

> [!IMPORTANT]
> Elastic Email only sends from verified domains. Before your first send, [verify your sending domain](https://help.elasticemail.com/en/articles/4934400-how-to-verify-your-domain) and use an address on that domain as the sender.

### Configure the client

```typescript
import { Configuration, EmailsApi } from '@elasticemail/elasticemail-client-ts-axios';

const config = new Configuration({
  apiKey: process.env.ELASTICEMAIL_API_KEY,
});

const emails = new EmailsApi(config);
```

> [!TIP]
> Keep your API key out of source code. Load it from an environment variable, a `.env` file that isn't committed, or a secrets manager.

### Send a transactional email

```typescript
import { isAxiosError } from 'axios';
import { BodyContentType, EmailTransactionalMessageData } from '@elasticemail/elasticemail-client-ts-axios';

const message: EmailTransactionalMessageData = {
  Recipients: {
    To: ['john.doe@example.com'],
  },
  Content: {
    From: 'My App <no-reply@yourdomain.com>',
    Subject: 'Welcome aboard!',
    Body: [
      { ContentType: BodyContentType.Html, Content: '<h1>Hello!</h1><p>Thanks for signing up.</p>' },
      { ContentType: BodyContentType.PlainText, Content: 'Hello! Thanks for signing up.' },
    ],
  },
};

try {
  const { data } = await emails.emailsTransactionalPost(message);
  console.log(`Sent. TransactionID: ${data.TransactionID}, MessageID: ${data.MessageID}`);
} catch (error) {
  if (isAxiosError(error)) {
    console.error(`Elastic Email API error ${error.response?.status}:`, error.response?.data);
  } else {
    throw error;
  }
}
```

The `From` address must use a domain you've [verified in your Elastic Email account](https://help.elasticemail.com/en/articles/4934400-how-to-verify-your-domain).

> [!NOTE]
> Each method resolves to an axios response, so the API result is in `response.data`. Field names match the API's PascalCase names (`Recipients`, `Content`, `TransactionID`…).

### Send from a template with merge fields

```typescript
await emails.emailsTransactionalPost({
  Recipients: { To: ['john.doe@example.com'] },
  Content: {
    From: 'My App <no-reply@yourdomain.com>',
    TemplateName: 'welcome-template',
    Merge: { firstname: 'John' },
  },
});
```

### Timeouts, headers and proxies

`baseOptions` are axios request options applied to every call:

```typescript
const config = new Configuration({
  apiKey: process.env.ELASTICEMAIL_API_KEY,
  baseOptions: {
    timeout: 30000,                        // ms
    headers: { 'X-My-Header': 'x' },       // sent with every request
  },
});
```

For a proxy or custom agent, pass your own axios instance as the third constructor argument:

```typescript
import axios from 'axios';
import { HttpsProxyAgent } from 'https-proxy-agent'; // npm install https-proxy-agent

const http = axios.create({
  httpsAgent: new HttpsProxyAgent('http://myProxyUrl:80/'),
  proxy: false,
});

const emails = new EmailsApi(config, undefined, http);
```

> [!IMPORTANT]
> Never ship your API key to a browser. Call the Elastic Email API from your server and expose only what your front end needs.

## More examples

More complete, runnable samples are in the **[Elastic Email examples repository](https://github.com/ElasticEmail/elasticemail-examples)**. It covers transactional email, SMTP, webhooks, inbound email, contacts and serverless platforms across 20+ languages and frameworks.

- 🟢 [Node.js examples](https://github.com/ElasticEmail/elasticemail-examples/tree/main/nodejs-elasticemail-examples) (TypeScript samples use this package)
- 📂 [All examples](https://github.com/ElasticEmail/elasticemail-examples)

<details>
<summary><strong>Snippets in this repository</strong></summary>

The [`examples/`](examples) folder has one small script per common task. See [examples/README.md](examples/README.md) for how to run them.

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

</details>

## Authentication

| Scheme | Header | Used for |
| --- | --- | --- |
| `apikey` | `X-ElasticEmail-ApiKey` | All API calls. Set it with `new Configuration({ apiKey })` |

## API limits

- Up to **20 concurrent connections** per account
- A hard timeout of **600 seconds** per request

## API reference

All URIs are relative to `https://api.elasticemail.com/v4`. The SDK covers **114 endpoints** across 16 API classes: `CampaignsApi`, `ContactsApi`, `DomainsApi`, `EmailsApi`, `EventsApi`, `FilesApi`, `InboundRouteApi`, `ListsApi`, `SecurityApi`, `SegmentsApi`, `StatisticsApi`, `SubAccountsApi`, `SuppressionsApi`, `TemplatesApi`, `VerificationsApi` and `WebhookApi`.

<details>
<summary><strong>Show all endpoints</strong></summary>


All URIs are relative to *https://api.elasticemail.com/v4*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CampaignsApi* | [**campaignsAutomationByNameTriggerPost**](ee-api/campaigns-api.ts) | **POST** /campaigns/automation/{name}/trigger | Trigger Automation for Contact
*CampaignsApi* | [**campaignsByNameDelete**](ee-api/campaigns-api.ts) | **DELETE** /campaigns/{name} | Delete Campaign
*CampaignsApi* | [**campaignsByNameGet**](ee-api/campaigns-api.ts) | **GET** /campaigns/{name} | Load Campaign
*CampaignsApi* | [**campaignsByNamePausePut**](ee-api/campaigns-api.ts) | **PUT** /campaigns/{name}/pause | Pause Campaign
*CampaignsApi* | [**campaignsByNamePut**](ee-api/campaigns-api.ts) | **PUT** /campaigns/{name} | Update Campaign
*CampaignsApi* | [**campaignsGet**](ee-api/campaigns-api.ts) | **GET** /campaigns | Load Campaigns
*CampaignsApi* | [**campaignsPost**](ee-api/campaigns-api.ts) | **POST** /campaigns | Add Campaign
*ContactsApi* | [**contactsByEmailDelete**](ee-api/contacts-api.ts) | **DELETE** /contacts/{email} | Delete Contact
*ContactsApi* | [**contactsByEmailGet**](ee-api/contacts-api.ts) | **GET** /contacts/{email} | Load Contact
*ContactsApi* | [**contactsByEmailPut**](ee-api/contacts-api.ts) | **PUT** /contacts/{email} | Update Contact
*ContactsApi* | [**contactsDeletePost**](ee-api/contacts-api.ts) | **POST** /contacts/delete | Delete Contacts Bulk
*ContactsApi* | [**contactsExportByIdStatusGet**](ee-api/contacts-api.ts) | **GET** /contacts/export/{id}/status | Check Export Status
*ContactsApi* | [**contactsExportPost**](ee-api/contacts-api.ts) | **POST** /contacts/export | Export Contacts
*ContactsApi* | [**contactsGet**](ee-api/contacts-api.ts) | **GET** /contacts | Load Contacts
*ContactsApi* | [**contactsImportPost**](ee-api/contacts-api.ts) | **POST** /contacts/import | Upload Contacts
*ContactsApi* | [**contactsPost**](ee-api/contacts-api.ts) | **POST** /contacts | Add Contact
*DomainsApi* | [**domainsByDomainDelete**](ee-api/domains-api.ts) | **DELETE** /domains/{domain} | Delete Domain
*DomainsApi* | [**domainsByDomainGet**](ee-api/domains-api.ts) | **GET** /domains/{domain} | Load Domain
*DomainsApi* | [**domainsByDomainPut**](ee-api/domains-api.ts) | **PUT** /domains/{domain} | Update Domain
*DomainsApi* | [**domainsByDomainRestrictedGet**](ee-api/domains-api.ts) | **GET** /domains/{domain}/restricted | Check for domain restriction
*DomainsApi* | [**domainsByDomainVerificationPut**](ee-api/domains-api.ts) | **PUT** /domains/{domain}/verification | Verify Domain
*DomainsApi* | [**domainsByEmailDefaultPatch**](ee-api/domains-api.ts) | **PATCH** /domains/{email}/default | Set Default
*DomainsApi* | [**domainsGet**](ee-api/domains-api.ts) | **GET** /domains | Load Domains
*DomainsApi* | [**domainsPost**](ee-api/domains-api.ts) | **POST** /domains | Add Domain
*EmailsApi* | [**emailsByMsgidViewGet**](ee-api/emails-api.ts) | **GET** /emails/{msgid}/view | View Email
*EmailsApi* | [**emailsByTransactionidStatusGet**](ee-api/emails-api.ts) | **GET** /emails/{transactionid}/status | Get Status
*EmailsApi* | [**emailsMergefilePost**](ee-api/emails-api.ts) | **POST** /emails/mergefile | Send Bulk Emails CSV
*EmailsApi* | [**emailsPost**](ee-api/emails-api.ts) | **POST** /emails | Send Bulk Emails
*EmailsApi* | [**emailsTransactionalPost**](ee-api/emails-api.ts) | **POST** /emails/transactional | Send Transactional Email
*EventsApi* | [**eventsByTransactionidGet**](ee-api/events-api.ts) | **GET** /events/{transactionid} | Load Email Events
*EventsApi* | [**eventsChannelsByNameExportPost**](ee-api/events-api.ts) | **POST** /events/channels/{name}/export | Export Channel Events
*EventsApi* | [**eventsChannelsByNameGet**](ee-api/events-api.ts) | **GET** /events/channels/{name} | Load Channel Events
*EventsApi* | [**eventsChannelsExportByIdStatusGet**](ee-api/events-api.ts) | **GET** /events/channels/export/{id}/status | Check Channel Export Status
*EventsApi* | [**eventsExportByIdStatusGet**](ee-api/events-api.ts) | **GET** /events/export/{id}/status | Check Export Status
*EventsApi* | [**eventsExportPost**](ee-api/events-api.ts) | **POST** /events/export | Export Events
*EventsApi* | [**eventsGet**](ee-api/events-api.ts) | **GET** /events | Load Events
*FilesApi* | [**filesByNameDelete**](ee-api/files-api.ts) | **DELETE** /files/{name} | Delete File
*FilesApi* | [**filesByNameGet**](ee-api/files-api.ts) | **GET** /files/{name} | Download File
*FilesApi* | [**filesByNameInfoGet**](ee-api/files-api.ts) | **GET** /files/{name}/info | Load File Details
*FilesApi* | [**filesGet**](ee-api/files-api.ts) | **GET** /files | List Files
*FilesApi* | [**filesPost**](ee-api/files-api.ts) | **POST** /files | Upload File
*InboundRouteApi* | [**inboundrouteByIdDelete**](ee-api/inbound-route-api.ts) | **DELETE** /inboundroute/{id} | Delete Route
*InboundRouteApi* | [**inboundrouteByIdGet**](ee-api/inbound-route-api.ts) | **GET** /inboundroute/{id} | Get Route
*InboundRouteApi* | [**inboundrouteByIdPut**](ee-api/inbound-route-api.ts) | **PUT** /inboundroute/{id} | Update Route
*InboundRouteApi* | [**inboundrouteGet**](ee-api/inbound-route-api.ts) | **GET** /inboundroute | Get Routes
*InboundRouteApi* | [**inboundrouteOrderPut**](ee-api/inbound-route-api.ts) | **PUT** /inboundroute/order | Update Sorting
*InboundRouteApi* | [**inboundroutePost**](ee-api/inbound-route-api.ts) | **POST** /inboundroute | Create Route
*ListsApi* | [**listsByListnameContactsGet**](ee-api/lists-api.ts) | **GET** /lists/{listname}/contacts | Load Contacts in List
*ListsApi* | [**listsByNameContactsPost**](ee-api/lists-api.ts) | **POST** /lists/{name}/contacts | Add Contacts to List
*ListsApi* | [**listsByNameContactsRemovePost**](ee-api/lists-api.ts) | **POST** /lists/{name}/contacts/remove | Remove Contacts from List
*ListsApi* | [**listsByNameDelete**](ee-api/lists-api.ts) | **DELETE** /lists/{name} | Delete List
*ListsApi* | [**listsByNameGet**](ee-api/lists-api.ts) | **GET** /lists/{name} | Load List
*ListsApi* | [**listsByNamePut**](ee-api/lists-api.ts) | **PUT** /lists/{name} | Update List
*ListsApi* | [**listsGet**](ee-api/lists-api.ts) | **GET** /lists | Load Lists
*ListsApi* | [**listsPost**](ee-api/lists-api.ts) | **POST** /lists | Add List
*SecurityApi* | [**securityApikeysByNameDelete**](ee-api/security-api.ts) | **DELETE** /security/apikeys/{name} | Delete ApiKey
*SecurityApi* | [**securityApikeysByNameGet**](ee-api/security-api.ts) | **GET** /security/apikeys/{name} | Load ApiKey
*SecurityApi* | [**securityApikeysByNamePut**](ee-api/security-api.ts) | **PUT** /security/apikeys/{name} | Update ApiKey
*SecurityApi* | [**securityApikeysGet**](ee-api/security-api.ts) | **GET** /security/apikeys | List ApiKeys
*SecurityApi* | [**securityApikeysPost**](ee-api/security-api.ts) | **POST** /security/apikeys | Add ApiKey
*SecurityApi* | [**securitySmtpByNameDelete**](ee-api/security-api.ts) | **DELETE** /security/smtp/{name} | Delete SMTP Credential
*SecurityApi* | [**securitySmtpByNameGet**](ee-api/security-api.ts) | **GET** /security/smtp/{name} | Load SMTP Credential
*SecurityApi* | [**securitySmtpByNamePut**](ee-api/security-api.ts) | **PUT** /security/smtp/{name} | Update SMTP Credential
*SecurityApi* | [**securitySmtpGet**](ee-api/security-api.ts) | **GET** /security/smtp | List SMTP Credentials
*SecurityApi* | [**securitySmtpPost**](ee-api/security-api.ts) | **POST** /security/smtp | Add SMTP Credential
*SegmentsApi* | [**segmentsByNameDelete**](ee-api/segments-api.ts) | **DELETE** /segments/{name} | Delete Segment
*SegmentsApi* | [**segmentsByNameGet**](ee-api/segments-api.ts) | **GET** /segments/{name} | Load Segment
*SegmentsApi* | [**segmentsByNamePut**](ee-api/segments-api.ts) | **PUT** /segments/{name} | Update Segment
*SegmentsApi* | [**segmentsGet**](ee-api/segments-api.ts) | **GET** /segments | Load Segments
*SegmentsApi* | [**segmentsPost**](ee-api/segments-api.ts) | **POST** /segments | Add Segment
*StatisticsApi* | [**statisticsCampaignsByNameGet**](ee-api/statistics-api.ts) | **GET** /statistics/campaigns/{name} | Load Campaign Stats
*StatisticsApi* | [**statisticsCampaignsGet**](ee-api/statistics-api.ts) | **GET** /statistics/campaigns | Load Campaigns Stats
*StatisticsApi* | [**statisticsChannelsByNameGet**](ee-api/statistics-api.ts) | **GET** /statistics/channels/{name} | Load Channel Stats
*StatisticsApi* | [**statisticsChannelsGet**](ee-api/statistics-api.ts) | **GET** /statistics/channels | Load Channels Stats
*StatisticsApi* | [**statisticsGet**](ee-api/statistics-api.ts) | **GET** /statistics | Load Statistics
*SubAccountsApi* | [**subaccountsByEmailApikeyGet**](ee-api/sub-accounts-api.ts) | **GET** /subaccounts/{email}/apikey | Get SubAccount ApiKey
*SubAccountsApi* | [**subaccountsByEmailCreditsPatch**](ee-api/sub-accounts-api.ts) | **PATCH** /subaccounts/{email}/credits | Add, Subtract Email Credits
*SubAccountsApi* | [**subaccountsByEmailDelete**](ee-api/sub-accounts-api.ts) | **DELETE** /subaccounts/{email} | Delete SubAccount
*SubAccountsApi* | [**subaccountsByEmailGet**](ee-api/sub-accounts-api.ts) | **GET** /subaccounts/{email} | Load SubAccount
*SubAccountsApi* | [**subaccountsByEmailSettingsEmailPut**](ee-api/sub-accounts-api.ts) | **PUT** /subaccounts/{email}/settings/email | Update SubAccount Email Settings
*SubAccountsApi* | [**subaccountsGet**](ee-api/sub-accounts-api.ts) | **GET** /subaccounts | Load SubAccounts
*SubAccountsApi* | [**subaccountsPost**](ee-api/sub-accounts-api.ts) | **POST** /subaccounts | Add SubAccount
*SuppressionsApi* | [**suppressionsBouncesGet**](ee-api/suppressions-api.ts) | **GET** /suppressions/bounces | Get Bounce List
*SuppressionsApi* | [**suppressionsBouncesImportPost**](ee-api/suppressions-api.ts) | **POST** /suppressions/bounces/import | Add Bounces Async
*SuppressionsApi* | [**suppressionsBouncesPost**](ee-api/suppressions-api.ts) | **POST** /suppressions/bounces | Add Bounces
*SuppressionsApi* | [**suppressionsByEmailDelete**](ee-api/suppressions-api.ts) | **DELETE** /suppressions/{email} | Delete Suppression
*SuppressionsApi* | [**suppressionsByEmailGet**](ee-api/suppressions-api.ts) | **GET** /suppressions/{email} | Get Suppression
*SuppressionsApi* | [**suppressionsComplaintsGet**](ee-api/suppressions-api.ts) | **GET** /suppressions/complaints | Get Complaints List
*SuppressionsApi* | [**suppressionsComplaintsImportPost**](ee-api/suppressions-api.ts) | **POST** /suppressions/complaints/import | Add Complaints Async
*SuppressionsApi* | [**suppressionsComplaintsPost**](ee-api/suppressions-api.ts) | **POST** /suppressions/complaints | Add Complaints
*SuppressionsApi* | [**suppressionsGet**](ee-api/suppressions-api.ts) | **GET** /suppressions | Get Suppressions
*SuppressionsApi* | [**suppressionsUnsubscribesGet**](ee-api/suppressions-api.ts) | **GET** /suppressions/unsubscribes | Get Unsubscribes List
*SuppressionsApi* | [**suppressionsUnsubscribesImportPost**](ee-api/suppressions-api.ts) | **POST** /suppressions/unsubscribes/import | Add Unsubscribes Async
*SuppressionsApi* | [**suppressionsUnsubscribesPost**](ee-api/suppressions-api.ts) | **POST** /suppressions/unsubscribes | Add Unsubscribes
*TemplatesApi* | [**templatesByNameDelete**](ee-api/templates-api.ts) | **DELETE** /templates/{name} | Delete Template
*TemplatesApi* | [**templatesByNameGet**](ee-api/templates-api.ts) | **GET** /templates/{name} | Load Template
*TemplatesApi* | [**templatesByNamePut**](ee-api/templates-api.ts) | **PUT** /templates/{name} | Update Template
*TemplatesApi* | [**templatesGet**](ee-api/templates-api.ts) | **GET** /templates | Load Templates
*TemplatesApi* | [**templatesPost**](ee-api/templates-api.ts) | **POST** /templates | Add Template
*VerificationsApi* | [**verificationsByEmailDelete**](ee-api/verifications-api.ts) | **DELETE** /verifications/{email} | Delete Email Verification Result
*VerificationsApi* | [**verificationsByEmailGet**](ee-api/verifications-api.ts) | **GET** /verifications/{email} | Get Email Verification Result
*VerificationsApi* | [**verificationsByEmailPost**](ee-api/verifications-api.ts) | **POST** /verifications/{email} | Verify Email
*VerificationsApi* | [**verificationsFilesByIdDelete**](ee-api/verifications-api.ts) | **DELETE** /verifications/files/{id} | Delete File Verification Result
*VerificationsApi* | [**verificationsFilesByIdResultDownloadGet**](ee-api/verifications-api.ts) | **GET** /verifications/files/{id}/result/download | Download File Verification Result
*VerificationsApi* | [**verificationsFilesByIdResultGet**](ee-api/verifications-api.ts) | **GET** /verifications/files/{id}/result | Get Detailed File Verification Result
*VerificationsApi* | [**verificationsFilesByIdVerificationPost**](ee-api/verifications-api.ts) | **POST** /verifications/files/{id}/verification | Start verification
*VerificationsApi* | [**verificationsFilesPost**](ee-api/verifications-api.ts) | **POST** /verifications/files | Upload File with Emails
*VerificationsApi* | [**verificationsFilesResultGet**](ee-api/verifications-api.ts) | **GET** /verifications/files/result | Get Files Verification Results
*VerificationsApi* | [**verificationsGet**](ee-api/verifications-api.ts) | **GET** /verifications | Get Emails Verification Results
*WebhookApi* | [**webhookByPublicidDelete**](ee-api/webhook-api.ts) | **DELETE** /webhook/{publicid} | Delete Webhook
*WebhookApi* | [**webhookByPublicidGet**](ee-api/webhook-api.ts) | **GET** /webhook/{publicid} | Load Webhook
*WebhookApi* | [**webhookByPublicidPut**](ee-api/webhook-api.ts) | **PUT** /webhook/{publicid} | Update Webhook
*WebhookApi* | [**webhookGet**](ee-api/webhook-api.ts) | **GET** /webhook | Load Webhooks
*WebhookApi* | [**webhookPost**](ee-api/webhook-api.ts) | **POST** /webhook | Add Webhook

</details>

## Models

All models are TypeScript interfaces (or `as const` enums) exported from the package root.

<details>
<summary><strong>Show all 98 models</strong></summary>

 - [AccessLevel](ee-api-models/access-level.ts)
 - [AccountStatusEnum](ee-api-models/account-status-enum.ts)
 - [ApiKey](ee-api-models/api-key.ts)
 - [ApiKeyPayload](ee-api-models/api-key-payload.ts)
 - [BodyContentType](ee-api-models/body-content-type.ts)
 - [BodyPart](ee-api-models/body-part.ts)
 - [Campaign](ee-api-models/campaign.ts)
 - [CampaignOptions](ee-api-models/campaign-options.ts)
 - [CampaignRecipient](ee-api-models/campaign-recipient.ts)
 - [CampaignStatus](ee-api-models/campaign-status.ts)
 - [CampaignTemplate](ee-api-models/campaign-template.ts)
 - [CertificateValidationStatus](ee-api-models/certificate-validation-status.ts)
 - [ChannelLogStatusSummary](ee-api-models/channel-log-status-summary.ts)
 - [CompressionFormat](ee-api-models/compression-format.ts)
 - [ConsentData](ee-api-models/consent-data.ts)
 - [ConsentTracking](ee-api-models/consent-tracking.ts)
 - [Contact](ee-api-models/contact.ts)
 - [ContactActivity](ee-api-models/contact-activity.ts)
 - [ContactPayload](ee-api-models/contact-payload.ts)
 - [ContactsList](ee-api-models/contacts-list.ts)
 - [ContactSource](ee-api-models/contact-source.ts)
 - [ContactStatus](ee-api-models/contact-status.ts)
 - [ContactUpdatePayload](ee-api-models/contact-update-payload.ts)
 - [DeliveryOptimizationType](ee-api-models/delivery-optimization-type.ts)
 - [DKIMRecord](ee-api-models/dkimrecord.ts)
 - [DomainData](ee-api-models/domain-data.ts)
 - [DomainDetail](ee-api-models/domain-detail.ts)
 - [DomainOwner](ee-api-models/domain-owner.ts)
 - [DomainPayload](ee-api-models/domain-payload.ts)
 - [DomainUpdatePayload](ee-api-models/domain-update-payload.ts)
 - [EmailContent](ee-api-models/email-content.ts)
 - [EmailData](ee-api-models/email-data.ts)
 - [EmailJobFailedStatus](ee-api-models/email-job-failed-status.ts)
 - [EmailJobStatus](ee-api-models/email-job-status.ts)
 - [EmailMessageData](ee-api-models/email-message-data.ts)
 - [EmailPredictedValidationStatus](ee-api-models/email-predicted-validation-status.ts)
 - [EmailRecipient](ee-api-models/email-recipient.ts)
 - [EmailSend](ee-api-models/email-send.ts)
 - [EmailsPayload](ee-api-models/emails-payload.ts)
 - [EmailStatus](ee-api-models/email-status.ts)
 - [EmailTransactionalMessageData](ee-api-models/email-transactional-message-data.ts)
 - [EmailValidationResult](ee-api-models/email-validation-result.ts)
 - [EmailValidationStatus](ee-api-models/email-validation-status.ts)
 - [EmailView](ee-api-models/email-view.ts)
 - [EncodingType](ee-api-models/encoding-type.ts)
 - [EventsOrderBy](ee-api-models/events-order-by.ts)
 - [EventType](ee-api-models/event-type.ts)
 - [ExportFileFormats](ee-api-models/export-file-formats.ts)
 - [ExportLink](ee-api-models/export-link.ts)
 - [ExportStatus](ee-api-models/export-status.ts)
 - [FileInfo](ee-api-models/file-info.ts)
 - [FilePayload](ee-api-models/file-payload.ts)
 - [FileUploadResult](ee-api-models/file-upload-result.ts)
 - [InboundPayload](ee-api-models/inbound-payload.ts)
 - [InboundRoute](ee-api-models/inbound-route.ts)
 - [InboundRouteActionType](ee-api-models/inbound-route-action-type.ts)
 - [InboundRouteFilterType](ee-api-models/inbound-route-filter-type.ts)
 - [ListPayload](ee-api-models/list-payload.ts)
 - [ListUpdatePayload](ee-api-models/list-update-payload.ts)
 - [LogJobStatus](ee-api-models/log-job-status.ts)
 - [LogStatusSummary](ee-api-models/log-status-summary.ts)
 - [MergeEmailPayload](ee-api-models/merge-email-payload.ts)
 - [MessageAttachment](ee-api-models/message-attachment.ts)
 - [MessageCategory](ee-api-models/message-category.ts)
 - [MessageCategoryEnum](ee-api-models/message-category-enum.ts)
 - [NewApiKey](ee-api-models/new-api-key.ts)
 - [NewSmtpCredentials](ee-api-models/new-smtp-credentials.ts)
 - [Options](ee-api-models/options.ts)
 - [RecipientEvent](ee-api-models/recipient-event.ts)
 - [Segment](ee-api-models/segment.ts)
 - [SegmentPayload](ee-api-models/segment-payload.ts)
 - [SmtpCredentials](ee-api-models/smtp-credentials.ts)
 - [SmtpCredentialsPayload](ee-api-models/smtp-credentials-payload.ts)
 - [SortOrderItem](ee-api-models/sort-order-item.ts)
 - [SplitOptimizationType](ee-api-models/split-optimization-type.ts)
 - [SplitOptions](ee-api-models/split-options.ts)
 - [SubaccountEmailCreditsPayload](ee-api-models/subaccount-email-credits-payload.ts)
 - [SubaccountEmailSettings](ee-api-models/subaccount-email-settings.ts)
 - [SubaccountEmailSettingsPayload](ee-api-models/subaccount-email-settings-payload.ts)
 - [SubAccountInfo](ee-api-models/sub-account-info.ts)
 - [SubaccountPayload](ee-api-models/subaccount-payload.ts)
 - [SubaccountSettingsInfo](ee-api-models/subaccount-settings-info.ts)
 - [SubaccountSettingsInfoPayload](ee-api-models/subaccount-settings-info-payload.ts)
 - [Suppression](ee-api-models/suppression.ts)
 - [Template](ee-api-models/template.ts)
 - [TemplatePayload](ee-api-models/template-payload.ts)
 - [TemplateScope](ee-api-models/template-scope.ts)
 - [TemplateType](ee-api-models/template-type.ts)
 - [TrackingType](ee-api-models/tracking-type.ts)
 - [TrackingValidationStatus](ee-api-models/tracking-validation-status.ts)
 - [TransactionalRecipient](ee-api-models/transactional-recipient.ts)
 - [Utm](ee-api-models/utm.ts)
 - [VerificationFileResult](ee-api-models/verification-file-result.ts)
 - [VerificationFileResultDetails](ee-api-models/verification-file-result-details.ts)
 - [VerificationStatus](ee-api-models/verification-status.ts)
 - [Webhook](ee-api-models/webhook.ts)
 - [WebhookCreatePayload](ee-api-models/webhook-create-payload.ts)
 - [WebhookUpdatePayload](ee-api-models/webhook-update-payload.ts)


</details>

## Building from source

```bash
npm install
npm run build
```

`npm run build` compiles the TypeScript sources into `dist/` with `tsc`.

## Versioning

The SDK follows the Elastic Email API v4. Package versions are listed on [npm](https://www.npmjs.com/package/@elasticemail/elasticemail-client-ts-axios?activeTab=versions) and release notes in [GitHub Releases](https://github.com/ElasticEmail/elasticemail-ts-axios/releases).

<details>
<summary>Build details</summary>

- API version: 4.0.0
- SDK version: 4.2.0
- Build package: `org.openapitools.codegen.languages.TypeScriptAxiosClientCodegen`

</details>

## Contributing

Contributions are welcome! Most of this SDK is generated by [OpenAPI Generator](https://openapi-generator.tech) from the Elastic Email API specification, so please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

- 🐛 [Report a bug](https://github.com/ElasticEmail/elasticemail-ts-axios/issues/new?template=bug_report.md)
- 💡 [Request a feature](https://github.com/ElasticEmail/elasticemail-ts-axios/issues/new?template=feature_request.md)
- 🔒 [Report a security issue](SECURITY.md)

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md).

## Support

> [!IMPORTANT]
> The fastest way to get help is the **chat widget on [elasticemail.com](https://elasticemail.com)**. Our support team can help with your account, sending, deliverability and API questions.

- 💬 [Chat with support on elasticemail.com](https://elasticemail.com) (preferred)
- 📚 [API documentation](https://elasticemail.com/developers/api-documentation/rest-api)
- 🧪 [Examples repository](https://github.com/ElasticEmail/elasticemail-examples)
- 🐛 [GitHub issues](https://github.com/ElasticEmail/elasticemail-ts-axios/issues), for bugs in this SDK only

## License

Released under the [MIT License](LICENSE). Copyright © 2021–2026 Elastic Email.
