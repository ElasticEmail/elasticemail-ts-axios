# FilePayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BinaryContent** | **string** | Content of the file sent as binary data | [default to undefined]
**Name** | **string** | Filename | [optional] [default to undefined]
**ContentType** | **string** | Type of file\&#39;s content (e.g. image/jpeg) | [optional] [default to undefined]

## Example

```typescript
import { FilePayload } from 'elasticemail-client-ts-axios';

const instance: FilePayload = {
    BinaryContent,
    Name,
    ContentType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
