# SortOrderItem

Change the ordering of this inbound route for when matching the inbound

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PublicInboundId** | **string** | ID of the route to change the order of | [default to undefined]
**SortOrder** | **number** | 1 - route will be used first | [default to undefined]

## Example

```typescript
import { SortOrderItem } from 'elasticemail-client-ts-axios';

const instance: SortOrderItem = {
    PublicInboundId,
    SortOrder,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
