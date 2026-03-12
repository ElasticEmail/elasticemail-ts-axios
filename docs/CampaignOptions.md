# CampaignOptions

Different send options for a Campaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DeliveryOptimization** | [**DeliveryOptimizationType**](DeliveryOptimizationType.md) |  | [optional] [default to undefined]
**TrackOpens** | **boolean** | Should the opens be tracked? If no value has been provided, Account\&#39;s default setting will be used. | [optional] [default to undefined]
**TrackClicks** | **boolean** | Should the clicks be tracked? If no value has been provided, Account\&#39;s default setting will be used. | [optional] [default to undefined]
**ScheduleFor** | **string** | Date when this Campaign is scheduled to be sent on | [optional] [default to undefined]
**TriggerFrequency** | **number** | How often (in minutes) to send the campaign | [optional] [default to undefined]
**TriggerCount** | **number** | How many times send the campaign | [optional] [default to undefined]
**SplitOptions** | [**SplitOptions**](SplitOptions.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CampaignOptions } from 'elasticemail-client-ts-axios';

const instance: CampaignOptions = {
    DeliveryOptimization,
    TrackOpens,
    TrackClicks,
    ScheduleFor,
    TriggerFrequency,
    TriggerCount,
    SplitOptions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
