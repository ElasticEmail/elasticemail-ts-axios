# SuppressionsApi

All URIs are relative to *https://api.elasticemail.com/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**suppressionsBouncesGet**](#suppressionsbouncesget) | **GET** /suppressions/bounces | Get Bounce List|
|[**suppressionsBouncesImportPost**](#suppressionsbouncesimportpost) | **POST** /suppressions/bounces/import | Add Bounces Async|
|[**suppressionsBouncesPost**](#suppressionsbouncespost) | **POST** /suppressions/bounces | Add Bounces|
|[**suppressionsByEmailDelete**](#suppressionsbyemaildelete) | **DELETE** /suppressions/{email} | Delete Suppression|
|[**suppressionsByEmailGet**](#suppressionsbyemailget) | **GET** /suppressions/{email} | Get Suppression|
|[**suppressionsComplaintsGet**](#suppressionscomplaintsget) | **GET** /suppressions/complaints | Get Complaints List|
|[**suppressionsComplaintsImportPost**](#suppressionscomplaintsimportpost) | **POST** /suppressions/complaints/import | Add Complaints Async|
|[**suppressionsComplaintsPost**](#suppressionscomplaintspost) | **POST** /suppressions/complaints | Add Complaints|
|[**suppressionsGet**](#suppressionsget) | **GET** /suppressions | Get Suppressions|
|[**suppressionsUnsubscribesGet**](#suppressionsunsubscribesget) | **GET** /suppressions/unsubscribes | Get Unsubscribes List|
|[**suppressionsUnsubscribesImportPost**](#suppressionsunsubscribesimportpost) | **POST** /suppressions/unsubscribes/import | Add Unsubscribes Async|
|[**suppressionsUnsubscribesPost**](#suppressionsunsubscribespost) | **POST** /suppressions/unsubscribes | Add Unsubscribes|

# **suppressionsBouncesGet**
> Array<Suppression> suppressionsBouncesGet()

Retrieve your list of bounced emails. Required Access Level: ViewContacts, ViewSuppressions

### Example

```typescript
import {
    SuppressionsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SuppressionsApi(configuration);

let search: string; //Text fragment used for searching. (optional) (default to undefined)
let limit: number; //Maximum number of returned items. (optional) (default to undefined)
let offset: number; //How many items should be returned ahead. (optional) (default to undefined)

const { status, data } = await apiInstance.suppressionsBouncesGet(
    search,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **search** | [**string**] | Text fragment used for searching. | (optional) defaults to undefined|
| **limit** | [**number**] | Maximum number of returned items. | (optional) defaults to undefined|
| **offset** | [**number**] | How many items should be returned ahead. | (optional) defaults to undefined|


### Return type

**Array<Suppression>**

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

# **suppressionsBouncesImportPost**
> suppressionsBouncesImportPost()

Add Bounced. Required Access Level: ModifyContacts, ModifySuppressions

### Example

```typescript
import {
    SuppressionsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SuppressionsApi(configuration);

let file: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.suppressionsBouncesImportPost(
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **suppressionsBouncesPost**
> Array<Suppression> suppressionsBouncesPost(requestBody)

Add Bounced. Required Access Level: ModifyContacts, ModifySuppressions

### Example

```typescript
import {
    SuppressionsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SuppressionsApi(configuration);

let requestBody: Array<string>; //Emails to add as bounces. Limited to 1000 per request

const { status, data } = await apiInstance.suppressionsBouncesPost(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Array<string>**| Emails to add as bounces. Limited to 1000 per request | |


### Return type

**Array<Suppression>**

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

# **suppressionsByEmailDelete**
> suppressionsByEmailDelete()

Delete Suppression. Required Access Level: ViewContacts, ViewSuppressions

### Example

```typescript
import {
    SuppressionsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SuppressionsApi(configuration);

let email: string; //Proper email address. (default to undefined)

const { status, data } = await apiInstance.suppressionsByEmailDelete(
    email
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **email** | [**string**] | Proper email address. | defaults to undefined|


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

# **suppressionsByEmailGet**
> Suppression suppressionsByEmailGet()

Retrieve your suppression. Required Access Level: ViewContacts, ViewSuppressions

### Example

```typescript
import {
    SuppressionsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SuppressionsApi(configuration);

let email: string; //Proper email address. (default to undefined)

const { status, data } = await apiInstance.suppressionsByEmailGet(
    email
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **email** | [**string**] | Proper email address. | defaults to undefined|


### Return type

**Suppression**

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

# **suppressionsComplaintsGet**
> Array<Suppression> suppressionsComplaintsGet()

Retrieve your list of complaints. Required Access Level: ViewContacts, ViewSuppressions

### Example

```typescript
import {
    SuppressionsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SuppressionsApi(configuration);

let search: string; //Text fragment used for searching. (optional) (default to undefined)
let limit: number; //Maximum number of returned items. (optional) (default to undefined)
let offset: number; //How many items should be returned ahead. (optional) (default to undefined)

const { status, data } = await apiInstance.suppressionsComplaintsGet(
    search,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **search** | [**string**] | Text fragment used for searching. | (optional) defaults to undefined|
| **limit** | [**number**] | Maximum number of returned items. | (optional) defaults to undefined|
| **offset** | [**number**] | How many items should be returned ahead. | (optional) defaults to undefined|


### Return type

**Array<Suppression>**

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

# **suppressionsComplaintsImportPost**
> suppressionsComplaintsImportPost()

Add Complaints. Required Access Level: ModifyContacts, ModifySuppressions

### Example

```typescript
import {
    SuppressionsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SuppressionsApi(configuration);

let file: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.suppressionsComplaintsImportPost(
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **suppressionsComplaintsPost**
> Array<Suppression> suppressionsComplaintsPost(requestBody)

Add Complaints. Required Access Level: ModifyContacts, ModifySuppressions

### Example

```typescript
import {
    SuppressionsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SuppressionsApi(configuration);

let requestBody: Array<string>; //Emails to add as complaints. Limited to 1000 per request

const { status, data } = await apiInstance.suppressionsComplaintsPost(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Array<string>**| Emails to add as complaints. Limited to 1000 per request | |


### Return type

**Array<Suppression>**

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

# **suppressionsGet**
> Array<Suppression> suppressionsGet()

Retrieve your suppressions. Required Access Level: ViewContacts, ViewSuppressions

### Example

```typescript
import {
    SuppressionsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SuppressionsApi(configuration);

let limit: number; //Maximum number of returned items. (optional) (default to undefined)
let offset: number; //How many items should be returned ahead. (optional) (default to undefined)

const { status, data } = await apiInstance.suppressionsGet(
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

**Array<Suppression>**

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

# **suppressionsUnsubscribesGet**
> Array<Suppression> suppressionsUnsubscribesGet()

Retrieve your list of unsubscribes. Required Access Level: ViewContacts, ViewSuppressions

### Example

```typescript
import {
    SuppressionsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SuppressionsApi(configuration);

let search: string; //Text fragment used for searching. (optional) (default to undefined)
let limit: number; //Maximum number of returned items. (optional) (default to undefined)
let offset: number; //How many items should be returned ahead. (optional) (default to undefined)

const { status, data } = await apiInstance.suppressionsUnsubscribesGet(
    search,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **search** | [**string**] | Text fragment used for searching. | (optional) defaults to undefined|
| **limit** | [**number**] | Maximum number of returned items. | (optional) defaults to undefined|
| **offset** | [**number**] | How many items should be returned ahead. | (optional) defaults to undefined|


### Return type

**Array<Suppression>**

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

# **suppressionsUnsubscribesImportPost**
> suppressionsUnsubscribesImportPost()

Add Unsubscribes. Required Access Level: ModifyContacts, ModifySuppressions

### Example

```typescript
import {
    SuppressionsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SuppressionsApi(configuration);

let file: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.suppressionsUnsubscribesImportPost(
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **suppressionsUnsubscribesPost**
> Array<Suppression> suppressionsUnsubscribesPost(requestBody)

Add Unsubscribes. Required Access Level: ModifyContacts, ModifySuppressions

### Example

```typescript
import {
    SuppressionsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SuppressionsApi(configuration);

let requestBody: Array<string>; //Emails to add as unsubscribes. Limited to 1000 per request

const { status, data } = await apiInstance.suppressionsUnsubscribesPost(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **Array<string>**| Emails to add as unsubscribes. Limited to 1000 per request | |


### Return type

**Array<Suppression>**

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

