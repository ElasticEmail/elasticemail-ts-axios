# FileInfo

File information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FileName** | **string** | Name of your file including extension. | [optional] [default to undefined]
**Size** | **number** | Size of your attachment (in bytes). | [optional] [default to undefined]
**DateAdded** | **string** | Date of creation in YYYY-MM-DDThh:ii:ss format | [optional] [default to undefined]
**ExpirationDate** | **string** | Date when the file will be deleted from your Account. | [optional] [default to undefined]
**ContentType** | **string** | Content type of the file. | [optional] [default to undefined]

## Example

```typescript
import { FileInfo } from 'elasticemail-client-ts-axios';

const instance: FileInfo = {
    FileName,
    Size,
    DateAdded,
    ExpirationDate,
    ContentType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
