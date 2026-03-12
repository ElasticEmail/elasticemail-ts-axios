# SegmentPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Segment name | [default to undefined]
**Rule** | **string** | SQL-like rule to determine which Contacts belong to this Segment. Help for building a segment rule can be found here: https://help.elasticemail.com/en/articles/5162182-segment-rules | [default to undefined]

## Example

```typescript
import { SegmentPayload } from 'elasticemail-client-ts-axios';

const instance: SegmentPayload = {
    Name,
    Rule,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
