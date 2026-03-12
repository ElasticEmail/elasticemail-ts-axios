# EmailView

Email details formatted in json

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Body** | **string** | Body (HTML, otherwise plain text) of email | [optional] [default to undefined]
**Subject** | **string** | Default subject of email. | [optional] [default to undefined]
**From** | **string** | From email address | [optional] [default to undefined]

## Example

```typescript
import { EmailView } from 'elasticemail-client-ts-axios';

const instance: EmailView = {
    Body,
    Subject,
    From,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
