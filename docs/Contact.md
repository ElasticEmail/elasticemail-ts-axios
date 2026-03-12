# Contact

Contact

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | **string** | Proper email address. | [optional] [default to undefined]
**Status** | [**ContactStatus**](ContactStatus.md) |  | [optional] [default to undefined]
**FirstName** | **string** | First name. | [optional] [default to undefined]
**LastName** | **string** | Last name. | [optional] [default to undefined]
**CustomFields** | **{ [key: string]: string; }** | A key-value collection of custom contact fields which can be used in the system. | [optional] [default to undefined]
**Consent** | [**ConsentData**](ConsentData.md) |  | [optional] [default to undefined]
**Source** | [**ContactSource**](ContactSource.md) |  | [optional] [default to undefined]
**SourceInfo** | **string** |  | [optional] [default to undefined]
**DateAdded** | **string** | Date of creation in YYYY-MM-DDThh:ii:ss format | [optional] [default to undefined]
**DateUpdated** | **string** | Last change date | [optional] [default to undefined]
**StatusChangeDate** | **string** | Date of last status change. | [optional] [default to undefined]
**Activity** | [**ContactActivity**](ContactActivity.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Contact } from 'elasticemail-client-ts-axios';

const instance: Contact = {
    Email,
    Status,
    FirstName,
    LastName,
    CustomFields,
    Consent,
    Source,
    SourceInfo,
    DateAdded,
    DateUpdated,
    StatusChangeDate,
    Activity,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
