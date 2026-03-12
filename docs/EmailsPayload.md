# EmailsPayload

Provide either rule or a list of emails, not both.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Rule** | **string** | SQL-like rule. Sending \&#39;All\&#39; as a value loads all resources of the given type. Help for building a segment rule can be found here: https://help.elasticemail.com/en/articles/5162182-segment-rules | [optional] [default to undefined]
**Emails** | **Array&lt;string&gt;** | Comma delimited list of contact emails | [optional] [default to undefined]

## Example

```typescript
import { EmailsPayload } from 'elasticemail-client-ts-axios';

const instance: EmailsPayload = {
    Rule,
    Emails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
