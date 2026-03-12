# StatisticsApi

All URIs are relative to *https://api.elasticemail.com/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**statisticsCampaignsByNameGet**](#statisticscampaignsbynameget) | **GET** /statistics/campaigns/{name} | Load Campaign Stats|
|[**statisticsCampaignsGet**](#statisticscampaignsget) | **GET** /statistics/campaigns | Load Campaigns Stats|
|[**statisticsChannelsByNameGet**](#statisticschannelsbynameget) | **GET** /statistics/channels/{name} | Load Channel Stats|
|[**statisticsChannelsGet**](#statisticschannelsget) | **GET** /statistics/channels | Load Channels Stats|
|[**statisticsGet**](#statisticsget) | **GET** /statistics | Load Statistics|

# **statisticsCampaignsByNameGet**
> ChannelLogStatusSummary statisticsCampaignsByNameGet()

Retrieve stats of an existing campaign. Required Access Level: ViewChannels

### Example

```typescript
import {
    StatisticsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new StatisticsApi(configuration);

let name: string; //The name of the campaign to get. (default to undefined)

const { status, data } = await apiInstance.statisticsCampaignsByNameGet(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | The name of the campaign to get. | defaults to undefined|


### Return type

**ChannelLogStatusSummary**

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

# **statisticsCampaignsGet**
> Array<ChannelLogStatusSummary> statisticsCampaignsGet()

Returns a list of your Campaigns\' stats. Required Access Level: ViewChannels

### Example

```typescript
import {
    StatisticsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new StatisticsApi(configuration);

let limit: number; //Maximum number of returned items. (optional) (default to undefined)
let offset: number; //How many items should be returned ahead. (optional) (default to undefined)

const { status, data } = await apiInstance.statisticsCampaignsGet(
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

**Array<ChannelLogStatusSummary>**

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

# **statisticsChannelsByNameGet**
> ChannelLogStatusSummary statisticsChannelsByNameGet()

Retrieve an existing channel stats. Required Access Level: ViewChannels

### Example

```typescript
import {
    StatisticsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new StatisticsApi(configuration);

let name: string; //The name of the channel to get. (default to undefined)

const { status, data } = await apiInstance.statisticsChannelsByNameGet(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | The name of the channel to get. | defaults to undefined|


### Return type

**ChannelLogStatusSummary**

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

# **statisticsChannelsGet**
> Array<ChannelLogStatusSummary> statisticsChannelsGet()

Returns a list of your Channels\' stats. Required Access Level: ViewChannels

### Example

```typescript
import {
    StatisticsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new StatisticsApi(configuration);

let limit: number; //Maximum number of returned items. (optional) (default to undefined)
let offset: number; //How many items should be returned ahead. (optional) (default to undefined)

const { status, data } = await apiInstance.statisticsChannelsGet(
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

**Array<ChannelLogStatusSummary>**

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

# **statisticsGet**
> LogStatusSummary statisticsGet()

Returns basic statistics. Required Access Level: ViewReports

### Example

```typescript
import {
    StatisticsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new StatisticsApi(configuration);

let from: string; //Starting date for search in YYYY-MM-DDThh:mm:ss format. (default to undefined)
let to: string; //Ending date for search in YYYY-MM-DDThh:mm:ss format. (optional) (default to undefined)

const { status, data } = await apiInstance.statisticsGet(
    from,
    to
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **from** | [**string**] | Starting date for search in YYYY-MM-DDThh:mm:ss format. | defaults to undefined|
| **to** | [**string**] | Ending date for search in YYYY-MM-DDThh:mm:ss format. | (optional) defaults to undefined|


### Return type

**LogStatusSummary**

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

