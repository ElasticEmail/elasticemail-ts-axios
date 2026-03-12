# InboundPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Filter** | **string** | Filter of the inbound data | [default to undefined]
**Name** | **string** | Name of this route | [default to undefined]
**FilterType** | [**InboundRouteFilterType**](InboundRouteFilterType.md) |  | [default to undefined]
**ActionType** | [**InboundRouteActionType**](InboundRouteActionType.md) |  | [default to undefined]
**EmailAddress** | **string** | Email to forward the inbound to | [optional] [default to undefined]
**HttpAddress** | **string** | Address to notify about the inbound | [optional] [default to undefined]

## Example

```typescript
import { InboundPayload } from 'elasticemail-client-ts-axios';

const instance: InboundPayload = {
    Filter,
    Name,
    FilterType,
    ActionType,
    EmailAddress,
    HttpAddress,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
