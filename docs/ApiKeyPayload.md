# ApiKeyPayload

Create a new ApiKey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the ApiKey for ease of reference. | [default to undefined]
**AccessLevel** | [**Array&lt;AccessLevel&gt;**](AccessLevel.md) | Access level or permission to be assigned to this ApiKey. | [default to undefined]
**Expires** | **string** | Date this ApiKey expires. | [optional] [default to undefined]
**RestrictAccessToIPRange** | **Array&lt;string&gt;** | Which IPs can use this ApiKey | [optional] [default to undefined]
**Subaccount** | **string** | Email of the subaccount for which this ApiKey should be created | [optional] [default to undefined]

## Example

```typescript
import { ApiKeyPayload } from 'elasticemail-client-ts-axios';

const instance: ApiKeyPayload = {
    Name,
    AccessLevel,
    Expires,
    RestrictAccessToIPRange,
    Subaccount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
