# TemplatePayload

New template object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Template name | [default to undefined]
**Subject** | **string** | Default subject of email. | [optional] [default to undefined]
**Body** | [**Array&lt;BodyPart&gt;**](BodyPart.md) | Email content of this template | [optional] [default to undefined]
**TemplateScope** | [**TemplateScope**](TemplateScope.md) |  | [optional] [default to undefined]

## Example

```typescript
import { TemplatePayload } from 'elasticemail-client-ts-axios';

const instance: TemplatePayload = {
    Name,
    Subject,
    Body,
    TemplateScope,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
