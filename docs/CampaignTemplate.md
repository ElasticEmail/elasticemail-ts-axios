# CampaignTemplate

Content of a Campaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Poolname** | **string** | Name of your custom IP Pool to be used in the sending process | [optional] [default to undefined]
**From** | **string** | Your e-mail with an optional name (e.g.: John Doe &lt;email@domain.com&gt;) | [default to undefined]
**ReplyTo** | **string** | To what address should the recipients reply to (e.g. John Doe &lt;email@domain.com&gt;) | [optional] [default to undefined]
**Subject** | **string** | Default subject of email. | [optional] [default to undefined]
**TemplateName** | **string** | Name of template. | [optional] [default to undefined]
**AttachFiles** | **Array&lt;string&gt;** | Names of previously uploaded files that should be sent as downloadable attachments | [optional] [default to undefined]
**Utm** | [**Utm**](Utm.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CampaignTemplate } from 'elasticemail-client-ts-axios';

const instance: CampaignTemplate = {
    Poolname,
    From,
    ReplyTo,
    Subject,
    TemplateName,
    AttachFiles,
    Utm,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
