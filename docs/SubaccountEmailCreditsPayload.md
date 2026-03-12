# SubaccountEmailCreditsPayload

A change to SubAccount email credits pool, with an additional note.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Credits** | **number** | Positive or negative value; this will be added or subtracted from Subaccount\&#39;s current email Credits pool. | [default to undefined]
**Notes** | **string** | Note to append to this credits change, for history. | [optional] [default to undefined]

## Example

```typescript
import { SubaccountEmailCreditsPayload } from 'elasticemail-client-ts-axios';

const instance: SubaccountEmailCreditsPayload = {
    Credits,
    Notes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
