# SubAccountInfo

Detailed information about SubAccount.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PublicAccountID** | **string** | Public key for limited access to your Account such as contact/add so you can use it safely on public websites. | [optional] [default to undefined]
**Email** | **string** | Proper email address. | [optional] [default to undefined]
**Settings** | [**SubaccountSettingsInfo**](SubaccountSettingsInfo.md) |  | [optional] [default to undefined]
**LastActivity** | **string** | Date of last activity on Account | [optional] [default to undefined]
**EmailCredits** | **number** | Amount of email credits | [optional] [default to undefined]
**TotalEmailsSent** | **number** | Amount of emails sent from this Account | [optional] [default to undefined]
**Reputation** | **number** | Numeric reputation | [optional] [default to undefined]
**Status** | [**AccountStatusEnum**](AccountStatusEnum.md) |  | [optional] [default to undefined]
**ContactsCount** | **number** | How many contacts this SubAccount has stored | [optional] [default to undefined]

## Example

```typescript
import { SubAccountInfo } from 'elasticemail-client-ts-axios';

const instance: SubAccountInfo = {
    PublicAccountID,
    Email,
    Settings,
    LastActivity,
    EmailCredits,
    TotalEmailsSent,
    Reputation,
    Status,
    ContactsCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
