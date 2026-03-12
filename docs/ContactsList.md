# ContactsList

List of Lists, with detailed data about its contents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ListName** | **string** | Name of your list. | [optional] [default to undefined]
**PublicListID** | **string** | ID code of list. Please note that this is different from the listid field. | [optional] [default to undefined]
**DateAdded** | **string** | Date of creation in YYYY-MM-DDThh:ii:ss format | [optional] [default to undefined]
**AllowUnsubscribe** | **boolean** | True: Allow unsubscribing from this list. Otherwise, false | [optional] [default to undefined]

## Example

```typescript
import { ContactsList } from 'elasticemail-client-ts-axios';

const instance: ContactsList = {
    ListName,
    PublicListID,
    DateAdded,
    AllowUnsubscribe,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
