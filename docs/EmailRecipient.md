# EmailRecipient

List of recipients

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | **string** | Proper email address. | [default to undefined]
**Fields** | **{ [key: string]: string; }** | A key-value collection of merge fields which can be used in e-mail body. | [optional] [default to undefined]

## Example

```typescript
import { EmailRecipient } from 'elasticemail-client-ts-axios';

const instance: EmailRecipient = {
    Email,
    Fields,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
