# ListPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ListName** | **string** | Name of your list. | [default to undefined]
**AllowUnsubscribe** | **boolean** | True: Allow unsubscribing from this list. Otherwise, false | [optional] [default to undefined]
**Emails** | **Array&lt;string&gt;** | Comma delimited list of existing contact emails that should be added to this list. Leave empty for all contacts | [optional] [default to undefined]

## Example

```typescript
import { ListPayload } from 'elasticemail-client-ts-axios';

const instance: ListPayload = {
    ListName,
    AllowUnsubscribe,
    Emails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
