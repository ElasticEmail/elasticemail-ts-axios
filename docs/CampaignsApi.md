# CampaignsApi

All URIs are relative to *https://api.elasticemail.com/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**campaignsByNameDelete**](#campaignsbynamedelete) | **DELETE** /campaigns/{name} | Delete Campaign|
|[**campaignsByNameGet**](#campaignsbynameget) | **GET** /campaigns/{name} | Load Campaign|
|[**campaignsByNamePausePut**](#campaignsbynamepauseput) | **PUT** /campaigns/{name}/pause | Pause Campaign|
|[**campaignsByNamePut**](#campaignsbynameput) | **PUT** /campaigns/{name} | Update Campaign|
|[**campaignsGet**](#campaignsget) | **GET** /campaigns | Load Campaigns|
|[**campaignsPost**](#campaignspost) | **POST** /campaigns | Add Campaign|

# **campaignsByNameDelete**
> campaignsByNameDelete()

Delete the specific campaign.  This does not cancel in progress email, see Cancel In Progress. Required Access Level: ModifyCampaigns

### Example

```typescript
import {
    CampaignsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new CampaignsApi(configuration);

let name: string; //Name of Campaign to delete (default to undefined)

const { status, data } = await apiInstance.campaignsByNameDelete(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | Name of Campaign to delete | defaults to undefined|


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

# **campaignsByNameGet**
> Campaign campaignsByNameGet()

Returns the specified campaign details. Required Access Level: ViewCampaigns

### Example

```typescript
import {
    CampaignsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new CampaignsApi(configuration);

let name: string; //Name of Campaign to get (default to undefined)

const { status, data } = await apiInstance.campaignsByNameGet(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | Name of Campaign to get | defaults to undefined|


### Return type

**Campaign**

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

# **campaignsByNamePausePut**
> campaignsByNamePausePut()

Pauses the specific campaign, cancelling emails that are waiting to be sent. Required Access Level: ModifyCampaigns

### Example

```typescript
import {
    CampaignsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new CampaignsApi(configuration);

let name: string; //Name of Campaign to pause (default to undefined)

const { status, data } = await apiInstance.campaignsByNamePausePut(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | Name of Campaign to pause | defaults to undefined|


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

# **campaignsByNamePut**
> Campaign campaignsByNamePut(campaign)

Updates a previously added campaign.  Only Active and Paused campaigns can be updated. Required Access Level: ModifyCampaigns

### Example

```typescript
import {
    CampaignsApi,
    Configuration,
    Campaign
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new CampaignsApi(configuration);

let name: string; //Name of Campaign to update (default to undefined)
let campaign: Campaign; //JSON representation of a campaign

const { status, data } = await apiInstance.campaignsByNamePut(
    name,
    campaign
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaign** | **Campaign**| JSON representation of a campaign | |
| **name** | [**string**] | Name of Campaign to update | defaults to undefined|


### Return type

**Campaign**

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **campaignsGet**
> Array<Campaign> campaignsGet()

Returns a list all of your campaigns. Limited to 1000 results. Required Access Level: ViewCampaigns

### Example

```typescript
import {
    CampaignsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new CampaignsApi(configuration);

let search: string; //Text fragment used for searching in Campaign name (using the \'contains\' rule) (optional) (default to undefined)
let offset: number; //How many items should be returned ahead. (optional) (default to undefined)
let limit: number; //Maximum number of returned items. (optional) (default to undefined)

const { status, data } = await apiInstance.campaignsGet(
    search,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **search** | [**string**] | Text fragment used for searching in Campaign name (using the \&#39;contains\&#39; rule) | (optional) defaults to undefined|
| **offset** | [**number**] | How many items should be returned ahead. | (optional) defaults to undefined|
| **limit** | [**number**] | Maximum number of returned items. | (optional) defaults to undefined|


### Return type

**Array<Campaign>**

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

# **campaignsPost**
> Campaign campaignsPost(campaign)

Add a campaign for processing. Required Access Level: ModifyCampaigns

### Example

```typescript
import {
    CampaignsApi,
    Configuration,
    Campaign
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new CampaignsApi(configuration);

let campaign: Campaign; //JSON representation of a campaign

const { status, data } = await apiInstance.campaignsPost(
    campaign
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaign** | **Campaign**| JSON representation of a campaign | |


### Return type

**Campaign**

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

