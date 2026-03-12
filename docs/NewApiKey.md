# NewApiKey

Newly generated ApiKey with Token

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Token** | **string** | Unique token to be used in the system | [optional] [default to undefined]
**AccessLevel** | [**Array&lt;AccessLevel&gt;**](AccessLevel.md) | Access level or permission to be assigned to this ApiKey. | [optional] [default to undefined]
**Name** | **string** | Name of the ApiKey. | [optional] [default to undefined]
**DateCreated** | **string** | Date this ApiKey was created. | [optional] [default to undefined]
**LastUse** | **string** | Date this ApiKey was last used. | [optional] [default to undefined]
**Expires** | **string** | Date this ApiKey expires. | [optional] [default to undefined]
**RestrictAccessToIPRange** | **Array&lt;string&gt;** | Which IPs can use this ApiKey | [optional] [default to undefined]

## Example

```typescript
import { NewApiKey } from 'elasticemail-client-ts-axios';

const instance: NewApiKey = {
    Token,
    AccessLevel,
    Name,
    DateCreated,
    LastUse,
    Expires,
    RestrictAccessToIPRange,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
