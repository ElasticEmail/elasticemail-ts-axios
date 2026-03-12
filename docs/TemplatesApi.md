# TemplatesApi

All URIs are relative to *https://api.elasticemail.com/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**templatesByNameDelete**](#templatesbynamedelete) | **DELETE** /templates/{name} | Delete Template|
|[**templatesByNameGet**](#templatesbynameget) | **GET** /templates/{name} | Load Template|
|[**templatesByNamePut**](#templatesbynameput) | **PUT** /templates/{name} | Update Template|
|[**templatesGet**](#templatesget) | **GET** /templates | Load Templates|
|[**templatesPost**](#templatespost) | **POST** /templates | Add Template|

# **templatesByNameDelete**
> templatesByNameDelete()

Delete template with the specified name. Required Access Level: ModifyTemplates

### Example

```typescript
import {
    TemplatesApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new TemplatesApi(configuration);

let name: string; //Name of template. (default to undefined)

const { status, data } = await apiInstance.templatesByNameDelete(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | Name of template. | defaults to undefined|


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

# **templatesByNameGet**
> Template templatesByNameGet()

Load detailed information of the specified template. Required Access Level: ViewTemplates

### Example

```typescript
import {
    TemplatesApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new TemplatesApi(configuration);

let name: string; //Name of template. (default to undefined)

const { status, data } = await apiInstance.templatesByNameGet(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | Name of template. | defaults to undefined|


### Return type

**Template**

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Serialized template |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **templatesByNamePut**
> Template templatesByNamePut(templatePayload)

Update existing template, overwriting existing data. Required Access Level: ModifyTemplates

### Example

```typescript
import {
    TemplatesApi,
    Configuration,
    TemplatePayload
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new TemplatesApi(configuration);

let name: string; //Name of template. (default to undefined)
let templatePayload: TemplatePayload; //

const { status, data } = await apiInstance.templatesByNamePut(
    name,
    templatePayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **templatePayload** | **TemplatePayload**|  | |
| **name** | [**string**] | Name of template. | defaults to undefined|


### Return type

**Template**

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

# **templatesGet**
> Array<Template> templatesGet()

Returns a list of templates for the specified type. Required Access Level: ViewTemplates

### Example

```typescript
import {
    TemplatesApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new TemplatesApi(configuration);

let scopeType: Array<TemplateScope>; //Return templates with specified scope only (default to undefined)
let templateTypes: Array<TemplateType>; //Return templates with specified type only (optional) (default to undefined)
let limit: number; //Maximum number of returned items. (optional) (default to undefined)
let offset: number; //How many items should be returned ahead. (optional) (default to undefined)

const { status, data } = await apiInstance.templatesGet(
    scopeType,
    templateTypes,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **scopeType** | **Array&lt;TemplateScope&gt;** | Return templates with specified scope only | defaults to undefined|
| **templateTypes** | **Array&lt;TemplateType&gt;** | Return templates with specified type only | (optional) defaults to undefined|
| **limit** | [**number**] | Maximum number of returned items. | (optional) defaults to undefined|
| **offset** | [**number**] | How many items should be returned ahead. | (optional) defaults to undefined|


### Return type

**Array<Template>**

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

# **templatesPost**
> Template templatesPost(templatePayload)

Add a new Template. Required Access Level: ModifyTemplates

### Example

```typescript
import {
    TemplatesApi,
    Configuration,
    TemplatePayload
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new TemplatesApi(configuration);

let templatePayload: TemplatePayload; //

const { status, data } = await apiInstance.templatesPost(
    templatePayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **templatePayload** | **TemplatePayload**|  | |


### Return type

**Template**

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Template |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

