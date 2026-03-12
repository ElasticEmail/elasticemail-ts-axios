# EmailStatus

Status information of the specified email

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**From** | **string** | Email address this email was sent from. | [optional] [default to undefined]
**To** | **string** | Email address this email was sent to. | [optional] [default to undefined]
**Date** | **string** | Date the email was submitted. | [optional] [default to undefined]
**Status** | [**LogJobStatus**](LogJobStatus.md) |  | [optional] [default to undefined]
**StatusName** | **string** | Name of email\&#39;s status | [optional] [default to undefined]
**StatusChangeDate** | **string** | Date of last status change. | [optional] [default to undefined]
**DateSent** | **string** | Date when the email was sent | [optional] [default to undefined]
**DateOpened** | **string** | Date when the email changed the status to \&#39;opened\&#39; | [optional] [default to undefined]
**DateClicked** | **string** | Date when the email changed the status to \&#39;clicked\&#39; | [optional] [default to undefined]
**ErrorMessage** | **string** | Detailed error or bounced message. | [optional] [default to undefined]
**TransactionID** | **string** | ID number of transaction | [optional] [default to undefined]
**EnvelopeFrom** | **string** | Envelope from address | [optional] [default to undefined]
**ErrorCategory** | [**MessageCategoryEnum**](MessageCategoryEnum.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EmailStatus } from 'elasticemail-client-ts-axios';

const instance: EmailStatus = {
    From,
    To,
    Date,
    Status,
    StatusName,
    StatusChangeDate,
    DateSent,
    DateOpened,
    DateClicked,
    ErrorMessage,
    TransactionID,
    EnvelopeFrom,
    ErrorCategory,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
