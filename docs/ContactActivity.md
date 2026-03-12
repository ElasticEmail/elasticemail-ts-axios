# ContactActivity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalSent** | **number** | Total emails sent. | [optional] [default to undefined]
**TotalOpened** | **number** | Total emails opened. | [optional] [default to undefined]
**TotalClicked** | **number** | Total emails clicked | [optional] [default to undefined]
**TotalFailed** | **number** | Total emails failed. | [optional] [default to undefined]
**LastSent** | **string** | Last date when an email was sent to this contact | [optional] [default to undefined]
**LastOpened** | **string** | Date this contact last opened an email | [optional] [default to undefined]
**LastClicked** | **string** | Date this contact last clicked an email | [optional] [default to undefined]
**LastFailed** | **string** | Last date when an email sent to this contact bounced | [optional] [default to undefined]
**LastIP** | **string** | IP from which this contact opened or clicked their email last time | [optional] [default to undefined]
**ErrorCode** | **number** | Last RFC Error code if any occurred | [optional] [default to undefined]
**FriendlyErrorMessage** | **string** | Last RFC error message if any occurred | [optional] [default to undefined]

## Example

```typescript
import { ContactActivity } from 'elasticemail-client-ts-axios';

const instance: ContactActivity = {
    TotalSent,
    TotalOpened,
    TotalClicked,
    TotalFailed,
    LastSent,
    LastOpened,
    LastClicked,
    LastFailed,
    LastIP,
    ErrorCode,
    FriendlyErrorMessage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
