# Campaign


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Content** | [**Array&lt;CampaignTemplate&gt;**](CampaignTemplate.md) | Campaign\&#39;s email content. Provide multiple items to send an A/X Split Campaign | [optional] [default to undefined]
**Name** | **string** | Campaign name | [default to undefined]
**Status** | [**CampaignStatus**](CampaignStatus.md) |  | [optional] [default to undefined]
**Recipients** | [**CampaignRecipient**](CampaignRecipient.md) |  | [default to undefined]
**ExcludedRecipients** | [**CampaignRecipient**](CampaignRecipient.md) |  | [optional] [default to undefined]
**Options** | [**CampaignOptions**](CampaignOptions.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Campaign } from 'elasticemail-client-ts-axios';

const instance: Campaign = {
    Content,
    Name,
    Status,
    Recipients,
    ExcludedRecipients,
    Options,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
