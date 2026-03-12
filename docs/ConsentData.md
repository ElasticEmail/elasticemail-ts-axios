# ConsentData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConsentIP** | **string** | IP address of consent to send this contact(s) your email. If not provided your current public IP address is used for consent. | [optional] [default to undefined]
**ConsentDate** | **string** | Date of consent to send this contact(s) your email. If not provided current date is used for consent. | [optional] [default to undefined]
**ConsentTracking** | [**ConsentTracking**](ConsentTracking.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ConsentData } from 'elasticemail-client-ts-axios';

const instance: ConsentData = {
    ConsentIP,
    ConsentDate,
    ConsentTracking,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
