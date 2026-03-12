# Suppression

Suppression - Email returning Hard Bounces

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | **string** | Proper email address. | [optional] [default to undefined]
**FriendlyErrorMessage** | **string** | RFC error message | [optional] [default to undefined]
**ErrorCode** | **number** | SMTP Error code | [optional] [default to undefined]
**DateUpdated** | **string** | Last change date | [optional] [default to undefined]

## Example

```typescript
import { Suppression } from 'elasticemail-client-ts-axios';

const instance: Suppression = {
    Email,
    FriendlyErrorMessage,
    ErrorCode,
    DateUpdated,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
