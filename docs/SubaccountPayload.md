# SubaccountPayload

New SubAccount payload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | **string** | Proper email address. | [default to undefined]
**Password** | **string** | Current password. | [default to undefined]
**SendActivation** | **boolean** | True, if you want to send activation email to this Account to confirm the creation of a new SubAccount. Otherwise, false (SubAccount will immediately be Active). | [optional] [default to undefined]
**Settings** | [**SubaccountSettingsInfoPayload**](SubaccountSettingsInfoPayload.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SubaccountPayload } from 'elasticemail-client-ts-axios';

const instance: SubaccountPayload = {
    Email,
    Password,
    SendActivation,
    Settings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
