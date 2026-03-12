# FilesApi

All URIs are relative to *https://api.elasticemail.com/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**filesByNameDelete**](#filesbynamedelete) | **DELETE** /files/{name} | Delete File|
|[**filesByNameGet**](#filesbynameget) | **GET** /files/{name} | Download File|
|[**filesByNameInfoGet**](#filesbynameinfoget) | **GET** /files/{name}/info | Load File Details|
|[**filesGet**](#filesget) | **GET** /files | List Files|
|[**filesPost**](#filespost) | **POST** /files | Upload File|

# **filesByNameDelete**
> filesByNameDelete()

Permanently deletes the file from your Account. Required Access Level: ModifyFiles

### Example

```typescript
import {
    FilesApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let name: string; //Name of your file including extension. (default to undefined)

const { status, data } = await apiInstance.filesByNameDelete(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | Name of your file including extension. | defaults to undefined|


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

# **filesByNameGet**
> File filesByNameGet()

Gets content of the specified File. Required Access Level: ViewFiles

### Example

```typescript
import {
    FilesApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let name: string; //Name of your file including extension. (default to undefined)

const { status, data } = await apiInstance.filesByNameGet(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | Name of your file including extension. | defaults to undefined|


### Return type

**File**

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **filesByNameInfoGet**
> FileInfo filesByNameInfoGet()

Returns the specified File\'s details. Required Access Level: ViewFiles

### Example

```typescript
import {
    FilesApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let name: string; //Name of your file including extension. (default to undefined)

const { status, data } = await apiInstance.filesByNameInfoGet(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | Name of your file including extension. | defaults to undefined|


### Return type

**FileInfo**

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

# **filesGet**
> Array<FileInfo> filesGet()

Returns a list of all your available files. Required Access Level: ViewFiles

### Example

```typescript
import {
    FilesApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let limit: number; //Maximum number of returned items. (optional) (default to undefined)
let offset: number; //How many items should be returned ahead. (optional) (default to undefined)

const { status, data } = await apiInstance.filesGet(
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

**Array<FileInfo>**

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

# **filesPost**
> FileInfo filesPost(filePayload)

Uploads selected file to the server. Required Access Level: ModifyFiles

### Example

```typescript
import {
    FilesApi,
    Configuration,
    FilePayload
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new FilesApi(configuration);

let filePayload: FilePayload; //
let expiresAfterDays: number; //After how many days should the file be deleted. (optional) (default to undefined)

const { status, data } = await apiInstance.filesPost(
    filePayload,
    expiresAfterDays
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **filePayload** | **FilePayload**|  | |
| **expiresAfterDays** | [**number**] | After how many days should the file be deleted. | (optional) defaults to undefined|


### Return type

**FileInfo**

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

