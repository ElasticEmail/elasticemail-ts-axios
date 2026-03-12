# SubaccountEmailSettingsPayload

Settings related to sending emails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequiresEmailCredits** | **boolean** | True, if Account needs credits to send emails. Otherwise, false | [optional] [default to undefined]
**EmailSizeLimit** | **number** | Maximum size of email including attachments in MB\&#39;s | [optional] [default to undefined]
**DailySendLimit** | **number** | Amount of emails Account can send daily | [optional] [default to undefined]
**MaxContacts** | **number** | Maximum number of contacts the Account can have. 0 means that parent account\&#39;s limit is used. | [optional] [default to undefined]
**EnablePrivateIPPurchase** | **boolean** | Can the SubAccount purchase Private IP for themselves | [optional] [default to undefined]
**PoolName** | **string** | Name of your custom IP Pool to be used in the sending process | [optional] [default to undefined]
**ValidSenderDomainOnly** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { SubaccountEmailSettingsPayload } from 'elasticemail-client-ts-axios';

const instance: SubaccountEmailSettingsPayload = {
    RequiresEmailCredits,
    EmailSizeLimit,
    DailySendLimit,
    MaxContacts,
    EnablePrivateIPPurchase,
    PoolName,
    ValidSenderDomainOnly,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
