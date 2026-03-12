# VerificationFileResultDetails

Detailed verification file result info

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VerificationResult** | [**Array&lt;EmailValidationResult&gt;**](EmailValidationResult.md) | Verification result\&#39;s details | [optional] [default to undefined]
**VerificationID** | **string** | Identifier of this verification result | [optional] [default to undefined]
**Filename** | **string** | Origin file name | [optional] [default to undefined]
**VerificationStatus** | [**VerificationStatus**](VerificationStatus.md) |  | [optional] [default to undefined]
**FileUploadResult** | [**FileUploadResult**](FileUploadResult.md) |  | [optional] [default to undefined]
**DateAdded** | **string** | Date of creation in YYYY-MM-DDThh:ii:ss format | [optional] [default to undefined]
**Source** | **string** | Origin file extension | [optional] [default to undefined]

## Example

```typescript
import { VerificationFileResultDetails } from 'elasticemail-client-ts-axios';

const instance: VerificationFileResultDetails = {
    VerificationResult,
    VerificationID,
    Filename,
    VerificationStatus,
    FileUploadResult,
    DateAdded,
    Source,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
