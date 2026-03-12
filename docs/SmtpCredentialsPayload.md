# SmtpCredentialsPayload

Create new SMTP Credentials

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the Credential for ease of reference. It must be a valid email address. | [default to undefined]
**Expires** | **string** | Date this SmtpCredential expires. | [optional] [default to undefined]
**RestrictAccessToIPRange** | **Array&lt;string&gt;** | Which IPs can use this SmtpCredential | [optional] [default to undefined]
**Subaccount** | **string** | Email of the subaccount for which this SmtpCredential should be created | [optional] [default to undefined]

## Example

```typescript
import { SmtpCredentialsPayload } from 'elasticemail-client-ts-axios';

const instance: SmtpCredentialsPayload = {
    Name,
    Expires,
    RestrictAccessToIPRange,
    Subaccount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
