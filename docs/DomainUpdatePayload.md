# DomainUpdatePayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CertificateStatus** | [**CertificateValidationStatus**](CertificateValidationStatus.md) |  | [optional] [default to undefined]
**VERP** | **boolean** |  | [optional] [default to undefined]
**CustomBouncesDomain** | **string** |  | [optional] [default to undefined]
**IsCustomBouncesDomainDefault** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { DomainUpdatePayload } from 'elasticemail-client-ts-axios';

const instance: DomainUpdatePayload = {
    CertificateStatus,
    VERP,
    CustomBouncesDomain,
    IsCustomBouncesDomainDefault,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
