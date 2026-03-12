# EventsApi

All URIs are relative to *https://api.elasticemail.com/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**eventsByTransactionidGet**](#eventsbytransactionidget) | **GET** /events/{transactionid} | Load Email Events|
|[**eventsChannelsByNameExportPost**](#eventschannelsbynameexportpost) | **POST** /events/channels/{name}/export | Export Channel Events|
|[**eventsChannelsByNameGet**](#eventschannelsbynameget) | **GET** /events/channels/{name} | Load Channel Events|
|[**eventsChannelsExportByIdStatusGet**](#eventschannelsexportbyidstatusget) | **GET** /events/channels/export/{id}/status | Check Channel Export Status|
|[**eventsExportByIdStatusGet**](#eventsexportbyidstatusget) | **GET** /events/export/{id}/status | Check Export Status|
|[**eventsExportPost**](#eventsexportpost) | **POST** /events/export | Export Events|
|[**eventsGet**](#eventsget) | **GET** /events | Load Events|

# **eventsByTransactionidGet**
> Array<RecipientEvent> eventsByTransactionidGet()

Returns a log of delivery events for the specific transaction ID. Required Access Level: ViewReports

### Example

```typescript
import {
    EventsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new EventsApi(configuration);

let transactionid: string; //ID number of transaction (default to undefined)
let from: string; //Starting date for search in YYYY-MM-DDThh:mm:ss format. (optional) (default to undefined)
let to: string; //Ending date for search in YYYY-MM-DDThh:mm:ss format. (optional) (default to undefined)
let orderBy: EventsOrderBy; // (optional) (default to undefined)
let limit: number; //Maximum number of returned items. (optional) (default to undefined)
let offset: number; //How many items should be returned ahead. (optional) (default to undefined)

const { status, data } = await apiInstance.eventsByTransactionidGet(
    transactionid,
    from,
    to,
    orderBy,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionid** | [**string**] | ID number of transaction | defaults to undefined|
| **from** | [**string**] | Starting date for search in YYYY-MM-DDThh:mm:ss format. | (optional) defaults to undefined|
| **to** | [**string**] | Ending date for search in YYYY-MM-DDThh:mm:ss format. | (optional) defaults to undefined|
| **orderBy** | **EventsOrderBy** |  | (optional) defaults to undefined|
| **limit** | [**number**] | Maximum number of returned items. | (optional) defaults to undefined|
| **offset** | [**number**] | How many items should be returned ahead. | (optional) defaults to undefined|


### Return type

**Array<RecipientEvent>**

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

# **eventsChannelsByNameExportPost**
> ExportLink eventsChannelsByNameExportPost()

Export delivery events log information to the specified file format. Required Access Level: Export

### Example

```typescript
import {
    EventsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new EventsApi(configuration);

let name: string; //Name of selected channel. (default to undefined)
let eventTypes: Array<EventType>; //Types of Events to return (optional) (default to undefined)
let from: string; //Starting date for search in YYYY-MM-DDThh:mm:ss format. (optional) (default to undefined)
let to: string; //Ending date for search in YYYY-MM-DDThh:mm:ss format. (optional) (default to undefined)
let fileFormat: ExportFileFormats; //Format of the exported file (optional) (default to undefined)
let compressionFormat: CompressionFormat; //FileResponse compression format. None or Zip. (optional) (default to undefined)
let fileName: string; //Name of your file including extension. (optional) (default to undefined)

const { status, data } = await apiInstance.eventsChannelsByNameExportPost(
    name,
    eventTypes,
    from,
    to,
    fileFormat,
    compressionFormat,
    fileName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | Name of selected channel. | defaults to undefined|
| **eventTypes** | **Array&lt;EventType&gt;** | Types of Events to return | (optional) defaults to undefined|
| **from** | [**string**] | Starting date for search in YYYY-MM-DDThh:mm:ss format. | (optional) defaults to undefined|
| **to** | [**string**] | Ending date for search in YYYY-MM-DDThh:mm:ss format. | (optional) defaults to undefined|
| **fileFormat** | **ExportFileFormats** | Format of the exported file | (optional) defaults to undefined|
| **compressionFormat** | **CompressionFormat** | FileResponse compression format. None or Zip. | (optional) defaults to undefined|
| **fileName** | [**string**] | Name of your file including extension. | (optional) defaults to undefined|


### Return type

**ExportLink**

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **eventsChannelsByNameGet**
> Array<RecipientEvent> eventsChannelsByNameGet()

Returns a log of delivery events filtered by specified parameters. Required Access Level: ViewReports

### Example

```typescript
import {
    EventsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new EventsApi(configuration);

let name: string; //Name of selected channel. (default to undefined)
let eventTypes: Array<EventType>; //Types of Events to return (optional) (default to undefined)
let from: string; //Starting date for search in YYYY-MM-DDThh:mm:ss format. (optional) (default to undefined)
let to: string; //Ending date for search in YYYY-MM-DDThh:mm:ss format. (optional) (default to undefined)
let orderBy: EventsOrderBy; // (optional) (default to undefined)
let limit: number; //How many items to load. Maximum for this request is 1000 items (optional) (default to undefined)
let offset: number; //How many items should be returned ahead. (optional) (default to undefined)

const { status, data } = await apiInstance.eventsChannelsByNameGet(
    name,
    eventTypes,
    from,
    to,
    orderBy,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | Name of selected channel. | defaults to undefined|
| **eventTypes** | **Array&lt;EventType&gt;** | Types of Events to return | (optional) defaults to undefined|
| **from** | [**string**] | Starting date for search in YYYY-MM-DDThh:mm:ss format. | (optional) defaults to undefined|
| **to** | [**string**] | Ending date for search in YYYY-MM-DDThh:mm:ss format. | (optional) defaults to undefined|
| **orderBy** | **EventsOrderBy** |  | (optional) defaults to undefined|
| **limit** | [**number**] | How many items to load. Maximum for this request is 1000 items | (optional) defaults to undefined|
| **offset** | [**number**] | How many items should be returned ahead. | (optional) defaults to undefined|


### Return type

**Array<RecipientEvent>**

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

# **eventsChannelsExportByIdStatusGet**
> ExportStatus eventsChannelsExportByIdStatusGet()

Check the current status of the channel export. Required Access Level: Export

### Example

```typescript
import {
    EventsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new EventsApi(configuration);

let id: string; //ID of the exported file (default to undefined)

const { status, data } = await apiInstance.eventsChannelsExportByIdStatusGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | ID of the exported file | defaults to undefined|


### Return type

**ExportStatus**

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

# **eventsExportByIdStatusGet**
> ExportStatus eventsExportByIdStatusGet()

Check the current status of the export. Required Access Level: Export

### Example

```typescript
import {
    EventsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new EventsApi(configuration);

let id: string; //ID of the exported file (default to undefined)

const { status, data } = await apiInstance.eventsExportByIdStatusGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | ID of the exported file | defaults to undefined|


### Return type

**ExportStatus**

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

# **eventsExportPost**
> ExportLink eventsExportPost()

Export delivery events log information to the specified file format. Required Access Level: Export

### Example

```typescript
import {
    EventsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new EventsApi(configuration);

let eventTypes: Array<EventType>; //Types of Events to return (optional) (default to undefined)
let from: string; //Starting date for search in YYYY-MM-DDThh:mm:ss format. (optional) (default to undefined)
let to: string; //Ending date for search in YYYY-MM-DDThh:mm:ss format. (optional) (default to undefined)
let fileFormat: ExportFileFormats; //Format of the exported file (optional) (default to undefined)
let compressionFormat: CompressionFormat; //FileResponse compression format. None or Zip. (optional) (default to undefined)
let fileName: string; //Name of your file including extension. (optional) (default to undefined)

const { status, data } = await apiInstance.eventsExportPost(
    eventTypes,
    from,
    to,
    fileFormat,
    compressionFormat,
    fileName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventTypes** | **Array&lt;EventType&gt;** | Types of Events to return | (optional) defaults to undefined|
| **from** | [**string**] | Starting date for search in YYYY-MM-DDThh:mm:ss format. | (optional) defaults to undefined|
| **to** | [**string**] | Ending date for search in YYYY-MM-DDThh:mm:ss format. | (optional) defaults to undefined|
| **fileFormat** | **ExportFileFormats** | Format of the exported file | (optional) defaults to undefined|
| **compressionFormat** | **CompressionFormat** | FileResponse compression format. None or Zip. | (optional) defaults to undefined|
| **fileName** | [**string**] | Name of your file including extension. | (optional) defaults to undefined|


### Return type

**ExportLink**

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **eventsGet**
> Array<RecipientEvent> eventsGet()

Returns a log of delivery events filtered by specified parameters. Required Access Level: ViewReports

### Example

```typescript
import {
    EventsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new EventsApi(configuration);

let eventTypes: Array<EventType>; //Types of Events to return (optional) (default to undefined)
let from: string; //Starting date for search in YYYY-MM-DDThh:mm:ss format. (optional) (default to undefined)
let to: string; //Ending date for search in YYYY-MM-DDThh:mm:ss format. (optional) (default to undefined)
let orderBy: EventsOrderBy; // (optional) (default to undefined)
let limit: number; //How many items to load. Maximum for this request is 1000 items (optional) (default to undefined)
let offset: number; //How many items should be returned ahead. (optional) (default to undefined)

const { status, data } = await apiInstance.eventsGet(
    eventTypes,
    from,
    to,
    orderBy,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **eventTypes** | **Array&lt;EventType&gt;** | Types of Events to return | (optional) defaults to undefined|
| **from** | [**string**] | Starting date for search in YYYY-MM-DDThh:mm:ss format. | (optional) defaults to undefined|
| **to** | [**string**] | Ending date for search in YYYY-MM-DDThh:mm:ss format. | (optional) defaults to undefined|
| **orderBy** | **EventsOrderBy** |  | (optional) defaults to undefined|
| **limit** | [**number**] | How many items to load. Maximum for this request is 1000 items | (optional) defaults to undefined|
| **offset** | [**number**] | How many items should be returned ahead. | (optional) defaults to undefined|


### Return type

**Array<RecipientEvent>**

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

