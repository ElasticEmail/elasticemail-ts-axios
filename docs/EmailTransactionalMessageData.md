# EmailTransactionalMessageData

Email data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Recipients** | [**TransactionalRecipient**](TransactionalRecipient.md) |  | [default to undefined]
**Content** | [**EmailContent**](EmailContent.md) |  | [default to undefined]
**Options** | [**Options**](Options.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EmailTransactionalMessageData } from 'elasticemail-client-ts-axios';

const instance: EmailTransactionalMessageData = {
    Recipients,
    Content,
    Options,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
