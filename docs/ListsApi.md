# ListsApi

All URIs are relative to *https://api.elasticemail.com/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**listsByListnameContactsGet**](#listsbylistnamecontactsget) | **GET** /lists/{listname}/contacts | Load Contacts in List|
|[**listsByNameContactsPost**](#listsbynamecontactspost) | **POST** /lists/{name}/contacts | Add Contacts to List|
|[**listsByNameContactsRemovePost**](#listsbynamecontactsremovepost) | **POST** /lists/{name}/contacts/remove | Remove Contacts from List|
|[**listsByNameDelete**](#listsbynamedelete) | **DELETE** /lists/{name} | Delete List|
|[**listsByNameGet**](#listsbynameget) | **GET** /lists/{name} | Load List|
|[**listsByNamePut**](#listsbynameput) | **PUT** /lists/{name} | Update List|
|[**listsGet**](#listsget) | **GET** /lists | Load Lists|
|[**listsPost**](#listspost) | **POST** /lists | Add List|

# **listsByListnameContactsGet**
> Array<Contact> listsByListnameContactsGet()

Returns a list of contacts. Required Access Level: ViewContacts

### Example

```typescript
import {
    ListsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let listname: string; //Name of your list. (default to undefined)
let limit: number; //Maximum number of returned items. (optional) (default to undefined)
let offset: number; //How many items should be returned ahead. (optional) (default to undefined)

const { status, data } = await apiInstance.listsByListnameContactsGet(
    listname,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **listname** | [**string**] | Name of your list. | defaults to undefined|
| **limit** | [**number**] | Maximum number of returned items. | (optional) defaults to undefined|
| **offset** | [**number**] | How many items should be returned ahead. | (optional) defaults to undefined|


### Return type

**Array<Contact>**

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

# **listsByNameContactsPost**
> ContactsList listsByNameContactsPost(emailsPayload)

Add existing Contacts to specified list. Required Access Level: ModifyContacts

### Example

```typescript
import {
    ListsApi,
    Configuration,
    EmailsPayload
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let name: string; //Name of your list. (default to undefined)
let emailsPayload: EmailsPayload; //Provide either rule or a list of emails, not both.

const { status, data } = await apiInstance.listsByNameContactsPost(
    name,
    emailsPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **emailsPayload** | **EmailsPayload**| Provide either rule or a list of emails, not both. | |
| **name** | [**string**] | Name of your list. | defaults to undefined|


### Return type

**ContactsList**

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

# **listsByNameContactsRemovePost**
> listsByNameContactsRemovePost(emailsPayload)

Remove specified Contacts from your list. Required Access Level: ModifyContacts

### Example

```typescript
import {
    ListsApi,
    Configuration,
    EmailsPayload
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let name: string; //Name of your list. (default to undefined)
let emailsPayload: EmailsPayload; //Provide either rule or a list of emails, not both.

const { status, data } = await apiInstance.listsByNameContactsRemovePost(
    name,
    emailsPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **emailsPayload** | **EmailsPayload**| Provide either rule or a list of emails, not both. | |
| **name** | [**string**] | Name of your list. | defaults to undefined|


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

# **listsByNameDelete**
> listsByNameDelete()

Deletes List and removes all the Contacts from it (does not delete Contacts). Required Access Level: ModifyContacts

### Example

```typescript
import {
    ListsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let name: string; //Name of your list. (default to undefined)

const { status, data } = await apiInstance.listsByNameDelete(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | Name of your list. | defaults to undefined|


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

# **listsByNameGet**
> ContactsList listsByNameGet()

Returns detailed information about specified list. Required Access Level: ViewContacts

### Example

```typescript
import {
    ListsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let name: string; //Name of your list. (default to undefined)

const { status, data } = await apiInstance.listsByNameGet(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | Name of your list. | defaults to undefined|


### Return type

**ContactsList**

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

# **listsByNamePut**
> ContactsList listsByNamePut(listUpdatePayload)

Update existing list. Required Access Level: ModifyContacts

### Example

```typescript
import {
    ListsApi,
    Configuration,
    ListUpdatePayload
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let name: string; //Name of your list. (default to undefined)
let listUpdatePayload: ListUpdatePayload; //

const { status, data } = await apiInstance.listsByNamePut(
    name,
    listUpdatePayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **listUpdatePayload** | **ListUpdatePayload**|  | |
| **name** | [**string**] | Name of your list. | defaults to undefined|


### Return type

**ContactsList**

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

# **listsGet**
> Array<ContactsList> listsGet()

Returns all your existing lists. Required Access Level: ViewContacts

### Example

```typescript
import {
    ListsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let limit: number; //Maximum number of returned items. (optional) (default to undefined)
let offset: number; //How many items should be returned ahead. (optional) (default to undefined)

const { status, data } = await apiInstance.listsGet(
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

**Array<ContactsList>**

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

# **listsPost**
> ContactsList listsPost(listPayload)

Add a new list. Required Access Level: ModifyContacts

### Example

```typescript
import {
    ListsApi,
    Configuration,
    ListPayload
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let listPayload: ListPayload; //

const { status, data } = await apiInstance.listsPost(
    listPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **listPayload** | **ListPayload**|  | |


### Return type

**ContactsList**

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

