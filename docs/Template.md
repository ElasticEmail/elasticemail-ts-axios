# Template

Template info

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateType** | [**TemplateType**](TemplateType.md) |  | [optional] [default to undefined]
**Name** | **string** | Template name | [optional] [default to undefined]
**DateAdded** | **string** | Date of creation in YYYY-MM-DDThh:ii:ss format | [optional] [default to undefined]
**Subject** | **string** | Default subject of email. | [optional] [default to undefined]
**Body** | [**Array&lt;BodyPart&gt;**](BodyPart.md) | Email content of this template | [optional] [default to undefined]
**TemplateScope** | [**TemplateScope**](TemplateScope.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Template } from 'elasticemail-client-ts-axios';

const instance: Template = {
    TemplateType,
    Name,
    DateAdded,
    Subject,
    Body,
    TemplateScope,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
