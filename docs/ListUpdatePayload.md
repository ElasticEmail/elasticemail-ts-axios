# ListUpdatePayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NewListName** | **string** | Name of your list if you want to change it. | [optional] [default to undefined]
**AllowUnsubscribe** | **boolean** | True: Allow unsubscribing from this list. Otherwise, false | [optional] [default to undefined]

## Example

```typescript
import { ListUpdatePayload } from 'elasticemail-client-ts-axios';

const instance: ListUpdatePayload = {
    NewListName,
    AllowUnsubscribe,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
