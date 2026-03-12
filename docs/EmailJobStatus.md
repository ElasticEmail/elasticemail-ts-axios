# EmailJobStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ID** | **string** | ID number of your attachment | [optional] [default to undefined]
**Status** | **string** | Name of status: submitted, complete, in_progress | [optional] [default to undefined]
**RecipientsCount** | **number** |  | [optional] [default to undefined]
**Failed** | [**Array&lt;EmailJobFailedStatus&gt;**](EmailJobFailedStatus.md) |  | [optional] [default to undefined]
**FailedCount** | **number** | Total emails failed. | [optional] [default to undefined]
**Sent** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**SentCount** | **number** | Total emails sent. | [optional] [default to undefined]
**Delivered** | **Array&lt;string&gt;** | Number of delivered messages | [optional] [default to undefined]
**DeliveredCount** | **number** |  | [optional] [default to undefined]
**Pending** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**PendingCount** | **number** |  | [optional] [default to undefined]
**Opened** | **Array&lt;string&gt;** | Number of opened messages | [optional] [default to undefined]
**OpenedCount** | **number** | Total emails opened. | [optional] [default to undefined]
**Clicked** | **Array&lt;string&gt;** | Number of clicked messages | [optional] [default to undefined]
**ClickedCount** | **number** | Total emails clicked | [optional] [default to undefined]
**Unsubscribed** | **Array&lt;string&gt;** | Number of unsubscribed messages | [optional] [default to undefined]
**UnsubscribedCount** | **number** | Total emails unsubscribed | [optional] [default to undefined]
**AbuseReports** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**AbuseReportsCount** | **number** |  | [optional] [default to undefined]
**MessageIDs** | **Array&lt;string&gt;** | List of all MessageIDs for this job. | [optional] [default to undefined]

## Example

```typescript
import { EmailJobStatus } from 'elasticemail-client-ts-axios';

const instance: EmailJobStatus = {
    ID,
    Status,
    RecipientsCount,
    Failed,
    FailedCount,
    Sent,
    SentCount,
    Delivered,
    DeliveredCount,
    Pending,
    PendingCount,
    Opened,
    OpenedCount,
    Clicked,
    ClickedCount,
    Unsubscribed,
    UnsubscribedCount,
    AbuseReports,
    AbuseReportsCount,
    MessageIDs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
