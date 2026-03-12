# TransactionalRecipient

List of transactional recipients

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**To** | **Array&lt;string&gt;** | List of recipients (visible to others) | [default to undefined]
**CC** | **Array&lt;string&gt;** | List of Carbon Copy recipients (visible to others) | [optional] [default to undefined]
**BCC** | **Array&lt;string&gt;** | List of Blind Carbon Copy recipients (hidden from other recipients) | [optional] [default to undefined]

## Example

```typescript
import { TransactionalRecipient } from 'elasticemail-client-ts-axios';

const instance: TransactionalRecipient = {
    To,
    CC,
    BCC,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
