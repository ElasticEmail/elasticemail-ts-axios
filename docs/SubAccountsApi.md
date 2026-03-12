# SubAccountsApi

All URIs are relative to *https://api.elasticemail.com/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**subaccountsByEmailCreditsPatch**](#subaccountsbyemailcreditspatch) | **PATCH** /subaccounts/{email}/credits | Add, Subtract Email Credits|
|[**subaccountsByEmailDelete**](#subaccountsbyemaildelete) | **DELETE** /subaccounts/{email} | Delete SubAccount|
|[**subaccountsByEmailGet**](#subaccountsbyemailget) | **GET** /subaccounts/{email} | Load SubAccount|
|[**subaccountsByEmailSettingsEmailPut**](#subaccountsbyemailsettingsemailput) | **PUT** /subaccounts/{email}/settings/email | Update SubAccount Email Settings|
|[**subaccountsGet**](#subaccountsget) | **GET** /subaccounts | Load SubAccounts|
|[**subaccountsPost**](#subaccountspost) | **POST** /subaccounts | Add SubAccount|

# **subaccountsByEmailCreditsPatch**
> subaccountsByEmailCreditsPatch(subaccountEmailCreditsPayload)

Update email credits of a subaccount by the given amount. Required Access Level: ModifySubAccounts

### Example

```typescript
import {
    SubAccountsApi,
    Configuration,
    SubaccountEmailCreditsPayload
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SubAccountsApi(configuration);

let email: string; //Email address of Sub-Account (default to undefined)
let subaccountEmailCreditsPayload: SubaccountEmailCreditsPayload; //Amount of email credits to add or subtract from the current SubAccount email credits pool (positive or negative value)

const { status, data } = await apiInstance.subaccountsByEmailCreditsPatch(
    email,
    subaccountEmailCreditsPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **subaccountEmailCreditsPayload** | **SubaccountEmailCreditsPayload**| Amount of email credits to add or subtract from the current SubAccount email credits pool (positive or negative value) | |
| **email** | [**string**] | Email address of Sub-Account | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subaccountsByEmailDelete**
> subaccountsByEmailDelete()

Deletes specified SubAccount. An email will be sent to confirm this change. Required Access Level: ModifySubAccounts

### Example

```typescript
import {
    SubAccountsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SubAccountsApi(configuration);

let email: string; //Email address of Sub-Account (default to undefined)

const { status, data } = await apiInstance.subaccountsByEmailDelete(
    email
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **email** | [**string**] | Email address of Sub-Account | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subaccountsByEmailGet**
> SubAccountInfo subaccountsByEmailGet()

Returns details for the specified SubAccount. Required Access Level: ViewSubAccounts

### Example

```typescript
import {
    SubAccountsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SubAccountsApi(configuration);

let email: string; //Email address of Sub-Account (default to undefined)

const { status, data } = await apiInstance.subaccountsByEmailGet(
    email
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **email** | [**string**] | Email address of Sub-Account | defaults to undefined|


### Return type

**SubAccountInfo**

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subaccountsByEmailSettingsEmailPut**
> SubaccountEmailSettings subaccountsByEmailSettingsEmailPut(subaccountEmailSettings)

Update SubAccount email settings. Required Access Level: ModifySubAccounts

### Example

```typescript
import {
    SubAccountsApi,
    Configuration,
    SubaccountEmailSettings
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SubAccountsApi(configuration);

let email: string; // (default to undefined)
let subaccountEmailSettings: SubaccountEmailSettings; //Updated Email Settings

const { status, data } = await apiInstance.subaccountsByEmailSettingsEmailPut(
    email,
    subaccountEmailSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **subaccountEmailSettings** | **SubaccountEmailSettings**| Updated Email Settings | |
| **email** | [**string**] |  | defaults to undefined|


### Return type

**SubaccountEmailSettings**

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subaccountsGet**
> Array<SubAccountInfo> subaccountsGet()

Returns a list of all your SubAccounts. Required Access Level: ViewSubAccounts

### Example

```typescript
import {
    SubAccountsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SubAccountsApi(configuration);

let limit: number; //Maximum number of returned items. (optional) (default to undefined)
let offset: number; //How many items should be returned ahead. (optional) (default to undefined)

const { status, data } = await apiInstance.subaccountsGet(
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Maximum number of returned items. | (optional) defaults to undefined|
| **offset** | [**number**] | How many items should be returned ahead. | (optional) defaults to undefined|


### Return type

**Array<SubAccountInfo>**

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subaccountsPost**
> SubAccountInfo subaccountsPost(subaccountPayload)

Add a new SubAccount to your Account. To receive an access token for this SubAccount, make a POST security/apikeys request using the \'subaccount\' parameter. Required Access Level: ModifySubAccounts

### Example

```typescript
import {
    SubAccountsApi,
    Configuration,
    SubaccountPayload
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SubAccountsApi(configuration);

let subaccountPayload: SubaccountPayload; //

const { status, data } = await apiInstance.subaccountsPost(
    subaccountPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **subaccountPayload** | **SubaccountPayload**|  | |


### Return type

**SubAccountInfo**

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

