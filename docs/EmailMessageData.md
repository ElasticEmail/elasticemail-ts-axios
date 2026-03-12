# EmailMessageData

Email data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Recipients** | [**Array&lt;EmailRecipient&gt;**](EmailRecipient.md) | List of recipients | [default to undefined]
**Content** | [**EmailContent**](EmailContent.md) |  | [default to undefined]
**Options** | [**Options**](Options.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EmailMessageData } from 'elasticemail-client-ts-axios';

const instance: EmailMessageData = {
    Recipients,
    Content,
    Options,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
