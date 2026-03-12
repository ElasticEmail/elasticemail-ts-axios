# InboundRouteApi

All URIs are relative to *https://api.elasticemail.com/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**inboundrouteByIdDelete**](#inboundroutebyiddelete) | **DELETE** /inboundroute/{id} | Delete Route|
|[**inboundrouteByIdGet**](#inboundroutebyidget) | **GET** /inboundroute/{id} | Get Route|
|[**inboundrouteByIdPut**](#inboundroutebyidput) | **PUT** /inboundroute/{id} | Update Route|
|[**inboundrouteGet**](#inboundrouteget) | **GET** /inboundroute | Get Routes|
|[**inboundrouteOrderPut**](#inboundrouteorderput) | **PUT** /inboundroute/order | Update Sorting|
|[**inboundroutePost**](#inboundroutepost) | **POST** /inboundroute | Create Route|

# **inboundrouteByIdDelete**
> inboundrouteByIdDelete()

Deletes the Inbound Route. Required Access Level: ModifySettings

### Example

```typescript
import {
    InboundRouteApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new InboundRouteApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.inboundrouteByIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


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

# **inboundrouteByIdGet**
> InboundRoute inboundrouteByIdGet()

Load an Inbound Route. Required Access Level: ViewSettings

### Example

```typescript
import {
    InboundRouteApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new InboundRouteApi(configuration);

let id: string; //ID number of your attachment (default to undefined)

const { status, data } = await apiInstance.inboundrouteByIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | ID number of your attachment | defaults to undefined|


### Return type

**InboundRoute**

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

# **inboundrouteByIdPut**
> InboundRoute inboundrouteByIdPut(inboundPayload)

Update the Inbound Route. Required Access Level: ModifySettings

### Example

```typescript
import {
    InboundRouteApi,
    Configuration,
    InboundPayload
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new InboundRouteApi(configuration);

let id: string; // (default to undefined)
let inboundPayload: InboundPayload; //

const { status, data } = await apiInstance.inboundrouteByIdPut(
    id,
    inboundPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inboundPayload** | **InboundPayload**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**InboundRoute**

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

# **inboundrouteGet**
> Array<InboundRoute> inboundrouteGet()

Get all your Inbound Routes. Required Access Level: ViewSettings

### Example

```typescript
import {
    InboundRouteApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new InboundRouteApi(configuration);

const { status, data } = await apiInstance.inboundrouteGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<InboundRoute>**

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

# **inboundrouteOrderPut**
> Array<InboundRoute> inboundrouteOrderPut(sortOrderItem)

Required Access Level: ViewSettings

### Example

```typescript
import {
    InboundRouteApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new InboundRouteApi(configuration);

let sortOrderItem: Array<SortOrderItem>; //Change the ordering of inbound routes for when matching the inbound

const { status, data } = await apiInstance.inboundrouteOrderPut(
    sortOrderItem
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sortOrderItem** | **Array<SortOrderItem>**| Change the ordering of inbound routes for when matching the inbound | |


### Return type

**Array<InboundRoute>**

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

# **inboundroutePost**
> InboundRoute inboundroutePost(inboundPayload)

Create new Inbound Route. Required Access Level: ModifySettings

### Example

```typescript
import {
    InboundRouteApi,
    Configuration,
    InboundPayload
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new InboundRouteApi(configuration);

let inboundPayload: InboundPayload; //

const { status, data } = await apiInstance.inboundroutePost(
    inboundPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inboundPayload** | **InboundPayload**|  | |


### Return type

**InboundRoute**

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

