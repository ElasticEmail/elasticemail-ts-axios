# ContactUpdatePayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FirstName** | **string** | First name. | [optional] [default to undefined]
**LastName** | **string** | Last name. | [optional] [default to undefined]
**CustomFields** | **{ [key: string]: string; }** | A key-value collection of custom contact fields which can be used in the system. | [optional] [default to undefined]

## Example

```typescript
import { ContactUpdatePayload } from 'elasticemail-client-ts-axios';

const instance: ContactUpdatePayload = {
    FirstName,
    LastName,
    CustomFields,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
