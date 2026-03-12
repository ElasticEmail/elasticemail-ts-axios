# LogStatusSummary

Summary of log status

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Recipients** | **number** | Number of recipients | [optional] [default to undefined]
**EmailTotal** | **number** | Number of emails | [optional] [default to undefined]
**SmsTotal** | **number** | Number of SMS | [optional] [default to undefined]
**Delivered** | **number** | Number of delivered messages | [optional] [default to undefined]
**Bounced** | **number** | Number of bounced messages | [optional] [default to undefined]
**InProgress** | **number** | Number of messages in progress | [optional] [default to undefined]
**Opened** | **number** | Number of opened messages | [optional] [default to undefined]
**Clicked** | **number** | Number of clicked messages | [optional] [default to undefined]
**Unsubscribed** | **number** | Number of unsubscribed messages | [optional] [default to undefined]
**Complaints** | **number** | Number of complaint messages | [optional] [default to undefined]
**Inbound** | **number** | Number of inbound messages | [optional] [default to undefined]
**ManualCancel** | **number** | Number of manually cancelled messages | [optional] [default to undefined]
**NotDelivered** | **number** | Number of messages flagged with \&#39;Not Delivered\&#39; | [optional] [default to undefined]

## Example

```typescript
import { LogStatusSummary } from 'elasticemail-client-ts-axios';

const instance: LogStatusSummary = {
    Recipients,
    EmailTotal,
    SmsTotal,
    Delivered,
    Bounced,
    InProgress,
    Opened,
    Clicked,
    Unsubscribed,
    Complaints,
    Inbound,
    ManualCancel,
    NotDelivered,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
