# MessageAttachment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BinaryContent** | **string** | File\&#39;s content as byte array (or a Base64 string) | [default to undefined]
**Name** | **string** | Display name of the file | [default to undefined]
**ContentType** | **string** | MIME content type | [optional] [default to undefined]
**Size** | **number** | Size of your attachment (in bytes). | [optional] [default to undefined]

## Example

```typescript
import { MessageAttachment } from 'elasticemail-client-ts-axios';

const instance: MessageAttachment = {
    BinaryContent,
    Name,
    ContentType,
    Size,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
