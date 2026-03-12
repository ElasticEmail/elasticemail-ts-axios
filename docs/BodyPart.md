# BodyPart

Email body part with user-provided MIME type (text/html, text/plain, etc)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContentType** | [**BodyContentType**](BodyContentType.md) |  | [default to undefined]
**Content** | **string** | Actual content of the body part | [optional] [default to undefined]
**Charset** | **string** | Text value of charset encoding for example: iso-8859-1, windows-1251, utf-8, us-ascii, windows-1250 and more... | [optional] [default to undefined]

## Example

```typescript
import { BodyPart } from 'elasticemail-client-ts-axios';

const instance: BodyPart = {
    ContentType,
    Content,
    Charset,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
