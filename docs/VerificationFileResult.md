# VerificationFileResult

Simple verification file result info

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VerificationID** | **string** | Identifier of this verification result | [optional] [default to undefined]
**Filename** | **string** | Origin file name | [optional] [default to undefined]
**VerificationStatus** | [**VerificationStatus**](VerificationStatus.md) |  | [optional] [default to undefined]
**FileUploadResult** | [**FileUploadResult**](FileUploadResult.md) |  | [optional] [default to undefined]
**DateAdded** | **string** | Date of creation in YYYY-MM-DDThh:ii:ss format | [optional] [default to undefined]
**Source** | **string** | Origin file extension | [optional] [default to undefined]

## Example

```typescript
import { VerificationFileResult } from 'elasticemail-client-ts-axios';

const instance: VerificationFileResult = {
    VerificationID,
    Filename,
    VerificationStatus,
    FileUploadResult,
    DateAdded,
    Source,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
