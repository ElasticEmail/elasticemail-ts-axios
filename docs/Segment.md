# Segment

Dynamic collection of Contacts, managed by SQL-like rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Segment name | [optional] [default to undefined]
**Rule** | **string** | SQL-like rule to determine which Contacts belong to this Segment. | [optional] [default to undefined]

## Example

```typescript
import { Segment } from 'elasticemail-client-ts-axios';

const instance: Segment = {
    Name,
    Rule,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
