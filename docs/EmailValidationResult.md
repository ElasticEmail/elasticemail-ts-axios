# EmailValidationResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Account** | **string** | Local part of an email | [optional] [default to undefined]
**Domain** | **string** | Name of selected domain. | [optional] [default to undefined]
**Email** | **string** | Full email address that was verified | [optional] [default to undefined]
**SuggestedSpelling** | **string** | Suggested spelling if a possible mistake was found | [optional] [default to undefined]
**Disposable** | **boolean** | Does the email have a temporary domain | [optional] [default to undefined]
**Role** | **boolean** | Is an email a role email (e.g. info@, noreply@ etc.) | [optional] [default to undefined]
**Reason** | **string** | All detected issues | [optional] [default to undefined]
**DateAdded** | **string** | Added date | [optional] [default to undefined]
**Result** | [**EmailValidationStatus**](EmailValidationStatus.md) |  | [optional] [default to undefined]
**PredictedScore** | **number** | Predicted score | [optional] [default to undefined]
**PredictedStatus** | [**EmailPredictedValidationStatus**](EmailPredictedValidationStatus.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EmailValidationResult } from 'elasticemail-client-ts-axios';

const instance: EmailValidationResult = {
    Account,
    Domain,
    Email,
    SuggestedSpelling,
    Disposable,
    Role,
    Reason,
    DateAdded,
    Result,
    PredictedScore,
    PredictedStatus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
