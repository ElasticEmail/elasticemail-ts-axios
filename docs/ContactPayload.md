# ContactPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | **string** | Proper email address. | [default to undefined]
**Status** | [**ContactStatus**](ContactStatus.md) |  | [optional] [default to undefined]
**FirstName** | **string** | First name. | [optional] [default to undefined]
**LastName** | **string** | Last name. | [optional] [default to undefined]
**CustomFields** | **{ [key: string]: string; }** | A key-value collection of custom contact fields which can be used in the system. Only already existing custom fields will be saved. | [optional] [default to undefined]
**Consent** | [**ConsentData**](ConsentData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ContactPayload } from 'elasticemail-client-ts-axios';

const instance: ContactPayload = {
    Email,
    Status,
    FirstName,
    LastName,
    CustomFields,
    Consent,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
