# DomainData

Domain data, with information about domain records.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ValidationLog** | **string** | Domain validation results - when domain has been running through validation process | [optional] [default to undefined]
**Domain** | **string** | Name of selected domain. | [optional] [default to undefined]
**DefaultDomain** | **boolean** | True, if domain is used as default. Otherwise, false, | [optional] [default to undefined]
**Spf** | **boolean** | True, if SPF record is verified | [optional] [default to undefined]
**Dkim** | **boolean** | True, if DKIM record is verified | [optional] [default to undefined]
**MX** | **boolean** | True, if MX record is verified | [optional] [default to undefined]
**DMARC** | **boolean** |  | [optional] [default to undefined]
**IsRewriteDomainValid** | **boolean** | True, if tracking CNAME record is verified | [optional] [default to undefined]
**Verify** | **boolean** | True, if DKIM, SPF, or tracking are still to be verified | [optional] [default to undefined]
**Type** | [**TrackingType**](TrackingType.md) |  | [optional] [default to undefined]
**TrackingStatus** | [**TrackingValidationStatus**](TrackingValidationStatus.md) |  | [optional] [default to undefined]
**CertificateStatus** | [**CertificateValidationStatus**](CertificateValidationStatus.md) |  | [optional] [default to undefined]
**CertificateValidationError** | **string** |  | [optional] [default to undefined]
**TrackingTypeUserRequest** | [**TrackingType**](TrackingType.md) |  | [optional] [default to undefined]
**VERP** | **boolean** |  | [optional] [default to undefined]
**CustomBouncesDomain** | **string** |  | [optional] [default to undefined]
**IsCustomBouncesDomainDefault** | **boolean** |  | [optional] [default to undefined]
**IsMarkedForDeletion** | **boolean** |  | [optional] [default to undefined]
**Ownership** | [**DomainOwner**](DomainOwner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DomainData } from 'elasticemail-client-ts-axios';

const instance: DomainData = {
    ValidationLog,
    Domain,
    DefaultDomain,
    Spf,
    Dkim,
    MX,
    DMARC,
    IsRewriteDomainValid,
    Verify,
    Type,
    TrackingStatus,
    CertificateStatus,
    CertificateValidationError,
    TrackingTypeUserRequest,
    VERP,
    CustomBouncesDomain,
    IsCustomBouncesDomainDefault,
    IsMarkedForDeletion,
    Ownership,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
