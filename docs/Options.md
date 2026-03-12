# Options

E-mail configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TimeOffset** | **number** | By how long should an e-mail be delayed (in minutes). Maximum is 35 days. | [optional] [default to undefined]
**PoolName** | **string** | Name of your custom IP Pool to be used in the sending process | [optional] [default to undefined]
**ChannelName** | **string** | Name of selected channel. | [optional] [default to undefined]
**Encoding** | [**EncodingType**](EncodingType.md) |  | [optional] [default to undefined]
**TrackOpens** | **boolean** | Should the opens be tracked? If no value has been provided, Account\&#39;s default setting will be used. | [optional] [default to undefined]
**TrackClicks** | **boolean** | Should the clicks be tracked? If no value has been provided, Account\&#39;s default setting will be used. | [optional] [default to undefined]

## Example

```typescript
import { Options } from 'elasticemail-client-ts-axios';

const instance: Options = {
    TimeOffset,
    PoolName,
    ChannelName,
    Encoding,
    TrackOpens,
    TrackClicks,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
