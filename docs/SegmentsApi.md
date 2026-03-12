# SegmentsApi

All URIs are relative to *https://api.elasticemail.com/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**segmentsByNameDelete**](#segmentsbynamedelete) | **DELETE** /segments/{name} | Delete Segment|
|[**segmentsByNameGet**](#segmentsbynameget) | **GET** /segments/{name} | Load Segment|
|[**segmentsByNamePut**](#segmentsbynameput) | **PUT** /segments/{name} | Update Segment|
|[**segmentsGet**](#segmentsget) | **GET** /segments | Load Segments|
|[**segmentsPost**](#segmentspost) | **POST** /segments | Add Segment|

# **segmentsByNameDelete**
> segmentsByNameDelete()

Delete an existing segment. Required Access Level: ModifyContacts

### Example

```typescript
import {
    SegmentsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let name: string; //Name of your segment. (default to undefined)

const { status, data } = await apiInstance.segmentsByNameDelete(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | Name of your segment. | defaults to undefined|


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

# **segmentsByNameGet**
> Segment segmentsByNameGet()

Returns details for the specified segment. Required Access Level: ViewContacts

### Example

```typescript
import {
    SegmentsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let name: string; //Name of the segment you want to load. Will load all contacts if the \'All Contacts\' name has been provided (default to undefined)

const { status, data } = await apiInstance.segmentsByNameGet(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | Name of the segment you want to load. Will load all contacts if the \&#39;All Contacts\&#39; name has been provided | defaults to undefined|


### Return type

**Segment**

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

# **segmentsByNamePut**
> Segment segmentsByNamePut(segmentPayload)

Rename or change RULE for your segment. Required Access Level: ModifyContacts

### Example

```typescript
import {
    SegmentsApi,
    Configuration,
    SegmentPayload
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let name: string; //Name of your segment. (default to undefined)
let segmentPayload: SegmentPayload; //

const { status, data } = await apiInstance.segmentsByNamePut(
    name,
    segmentPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **segmentPayload** | **SegmentPayload**|  | |
| **name** | [**string**] | Name of your segment. | defaults to undefined|


### Return type

**Segment**

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

# **segmentsGet**
> Array<Segment> segmentsGet()

Returns a list of all your available Segments. Required Access Level: ViewContacts

### Example

```typescript
import {
    SegmentsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let limit: number; //Maximum number of returned items. (optional) (default to undefined)
let offset: number; //How many items should be returned ahead. (optional) (default to undefined)

const { status, data } = await apiInstance.segmentsGet(
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

**Array<Segment>**

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

# **segmentsPost**
> Segment segmentsPost(segmentPayload)

Add a new segment, based on specified RULE. Required Access Level: ModifyContacts

### Example

```typescript
import {
    SegmentsApi,
    Configuration,
    SegmentPayload
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SegmentsApi(configuration);

let segmentPayload: SegmentPayload; //

const { status, data } = await apiInstance.segmentsPost(
    segmentPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **segmentPayload** | **SegmentPayload**|  | |


### Return type

**Segment**

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

