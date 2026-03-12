# EmailData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Preview** | [**EmailView**](EmailView.md) |  | [optional] [default to undefined]
**Attachments** | [**Array&lt;FileInfo&gt;**](FileInfo.md) | Attachments sent with the email | [optional] [default to undefined]
**Status** | [**EmailStatus**](EmailStatus.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EmailData } from 'elasticemail-client-ts-axios';

const instance: EmailData = {
    Preview,
    Attachments,
    Status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
