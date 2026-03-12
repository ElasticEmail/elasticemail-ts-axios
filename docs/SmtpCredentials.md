# SmtpCredentials

SMTP Credentials info

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessLevel** | [**AccessLevel**](AccessLevel.md) |  | [optional] [default to undefined]
**Name** | **string** | Name of the key. | [optional] [default to undefined]
**DateCreated** | **string** | Date this SmtpCredential was created. | [optional] [default to undefined]
**LastUse** | **string** | Date this SmtpCredential was last used. | [optional] [default to undefined]
**Expires** | **string** | Date this SmtpCredential expires. | [optional] [default to undefined]
**RestrictAccessToIPRange** | **Array&lt;string&gt;** | Which IPs can use this SmtpCredential | [optional] [default to undefined]

## Example

```typescript
import { SmtpCredentials } from 'elasticemail-client-ts-axios';

const instance: SmtpCredentials = {
    AccessLevel,
    Name,
    DateCreated,
    LastUse,
    Expires,
    RestrictAccessToIPRange,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
