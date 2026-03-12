# CampaignRecipient

A set of lists and segments names to read recipients from

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ListNames** | **Array&lt;string&gt;** | Names of lists from your Account to read recipients from | [optional] [default to undefined]
**SegmentNames** | **Array&lt;string&gt;** | Names of segments from your Account to read recipients from | [optional] [default to undefined]

## Example

```typescript
import { CampaignRecipient } from 'elasticemail-client-ts-axios';

const instance: CampaignRecipient = {
    ListNames,
    SegmentNames,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
