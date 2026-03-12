# SplitOptions

Optional A/X split campaign options

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OptimizeFor** | [**SplitOptimizationType**](SplitOptimizationType.md) |  | [optional] [default to undefined]
**OptimizePeriodMinutes** | **number** | For how long should the results be measured until determining the winner template (content) | [optional] [default to undefined]

## Example

```typescript
import { SplitOptions } from 'elasticemail-client-ts-axios';

const instance: SplitOptions = {
    OptimizeFor,
    OptimizePeriodMinutes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
