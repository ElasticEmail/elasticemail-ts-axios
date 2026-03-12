# EmailContent

Proper e-mail content

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Body** | [**Array&lt;BodyPart&gt;**](BodyPart.md) | List of e-mail body parts, with user-provided MIME types (text/html, text/plain etc) | [optional] [default to undefined]
**Merge** | **{ [key: string]: string; }** | A key-value collection of custom merge fields, shared between recipients. Should be used in e-mail body like so: {firstname}, {lastname} etc. | [optional] [default to undefined]
**Attachments** | [**Array&lt;MessageAttachment&gt;**](MessageAttachment.md) | Attachments provided by sending binary data | [optional] [default to undefined]
**Headers** | **{ [key: string]: string; }** | A key-value collection of custom e-mail headers. | [optional] [default to undefined]
**Postback** | **string** | Postback header. | [optional] [default to undefined]
**EnvelopeFrom** | **string** | E-mail with an optional name to be used as the envelope from address (e.g.: John Doe &lt;email@domain.com&gt;) | [optional] [default to undefined]
**From** | **string** | Your e-mail with an optional name (e.g.: John Doe &lt;email@domain.com&gt;) | [default to undefined]
**ReplyTo** | **string** | To what address should the recipients reply to (e.g. John Doe &lt;email@domain.com&gt;) | [optional] [default to undefined]
**Subject** | **string** | Default subject of email. | [optional] [default to undefined]
**TemplateName** | **string** | Name of template. | [optional] [default to undefined]
**AttachFiles** | **Array&lt;string&gt;** | Names of previously uploaded files that should be sent as downloadable attachments | [optional] [default to undefined]
**Utm** | [**Utm**](Utm.md) |  | [optional] [default to undefined]

## Example

```typescript
import { EmailContent } from 'elasticemail-client-ts-axios';

const instance: EmailContent = {
    Body,
    Merge,
    Attachments,
    Headers,
    Postback,
    EnvelopeFrom,
    From,
    ReplyTo,
    Subject,
    TemplateName,
    AttachFiles,
    Utm,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
