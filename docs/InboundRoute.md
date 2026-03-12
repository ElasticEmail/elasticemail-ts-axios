# InboundRoute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PublicId** | **string** |  | [optional] [default to undefined]
**Name** | **string** | Name of this route | [optional] [default to undefined]
**FilterType** | [**InboundRouteFilterType**](InboundRouteFilterType.md) |  | [optional] [default to undefined]
**Filter** | **string** | Filter of the inbound data | [optional] [default to undefined]
**ActionType** | [**InboundRouteActionType**](InboundRouteActionType.md) |  | [optional] [default to undefined]
**ActionParameter** | **string** | URL address or Email to notify about the inbound | [optional] [default to undefined]
**SortOrder** | **number** | Place of this route in your routes queue\&#39;s order | [optional] [default to undefined]

## Example

```typescript
import { InboundRoute } from 'elasticemail-client-ts-axios';

const instance: InboundRoute = {
    PublicId,
    Name,
    FilterType,
    Filter,
    ActionType,
    ActionParameter,
    SortOrder,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
