# RecipientEvent

Detailed information about message recipient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransactionID** | **string** | ID number of transaction | [optional] [default to undefined]
**MsgID** | **string** | ID number of selected message. | [optional] [default to undefined]
**FromEmail** | **string** | Default From: email address. | [optional] [default to undefined]
**To** | **string** | Ending date for search in YYYY-MM-DDThh:mm:ss format. | [optional] [default to undefined]
**Subject** | **string** | Default subject of email. | [optional] [default to undefined]
**EventType** | [**EventType**](EventType.md) |  | [optional] [default to undefined]
**EventDate** | **string** | Creation date | [optional] [default to undefined]
**ChannelName** | **string** | Name of selected channel. | [optional] [default to undefined]
**MessageCategory** | [**MessageCategory**](MessageCategory.md) |  | [optional] [default to undefined]
**NextTryOn** | **string** | Date of next try | [optional] [default to undefined]
**Message** | **string** | Error message if sending has failed (FailedAttempt or Bounce) | [optional] [default to undefined]
**IPAddress** | **string** | IP which this email was sent through | [optional] [default to undefined]
**PoolName** | **string** | Name of an IP pool this email was sent through | [optional] [default to undefined]

## Example

```typescript
import { RecipientEvent } from 'elasticemail-client-ts-axios';

const instance: RecipientEvent = {
    TransactionID,
    MsgID,
    FromEmail,
    To,
    Subject,
    EventType,
    EventDate,
    ChannelName,
    MessageCategory,
    NextTryOn,
    Message,
    IPAddress,
    PoolName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
