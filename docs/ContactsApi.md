# ContactsApi

All URIs are relative to *https://api.elasticemail.com/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**contactsByEmailDelete**](#contactsbyemaildelete) | **DELETE** /contacts/{email} | Delete Contact|
|[**contactsByEmailGet**](#contactsbyemailget) | **GET** /contacts/{email} | Load Contact|
|[**contactsByEmailPut**](#contactsbyemailput) | **PUT** /contacts/{email} | Update Contact|
|[**contactsDeletePost**](#contactsdeletepost) | **POST** /contacts/delete | Delete Contacts Bulk|
|[**contactsExportByIdStatusGet**](#contactsexportbyidstatusget) | **GET** /contacts/export/{id}/status | Check Export Status|
|[**contactsExportPost**](#contactsexportpost) | **POST** /contacts/export | Export Contacts|
|[**contactsGet**](#contactsget) | **GET** /contacts | Load Contacts|
|[**contactsImportPost**](#contactsimportpost) | **POST** /contacts/import | Upload Contacts|
|[**contactsPost**](#contactspost) | **POST** /contacts | Add Contact|

# **contactsByEmailDelete**
> contactsByEmailDelete()

Deletes the provided contact. Required Access Level: ModifyContacts

### Example

```typescript
import {
    ContactsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new ContactsApi(configuration);

let email: string; //Proper email address. (default to undefined)

const { status, data } = await apiInstance.contactsByEmailDelete(
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

# **contactsByEmailGet**
> Contact contactsByEmailGet()

Load detailed contact information for specified email. Required Access Level: ViewContacts

### Example

```typescript
import {
    ContactsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new ContactsApi(configuration);

let email: string; //Proper email address. (default to undefined)

const { status, data } = await apiInstance.contactsByEmailGet(
    email
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **email** | [**string**] | Proper email address. | defaults to undefined|


### Return type

**Contact**

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

# **contactsByEmailPut**
> Contact contactsByEmailPut(contactUpdatePayload)

Update selected contact. Omitted contact\'s fields will not be changed. Required Access Level: ModifyContacts

### Example

```typescript
import {
    ContactsApi,
    Configuration,
    ContactUpdatePayload
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new ContactsApi(configuration);

let email: string; //Proper email address. (default to undefined)
let contactUpdatePayload: ContactUpdatePayload; //

const { status, data } = await apiInstance.contactsByEmailPut(
    email,
    contactUpdatePayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contactUpdatePayload** | **ContactUpdatePayload**|  | |
| **email** | [**string**] | Proper email address. | defaults to undefined|


### Return type

**Contact**

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

# **contactsDeletePost**
> contactsDeletePost(emailsPayload)

Deletes provided contacts in bulk. Required Access Level: ModifyContacts

### Example

```typescript
import {
    ContactsApi,
    Configuration,
    EmailsPayload
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new ContactsApi(configuration);

let emailsPayload: EmailsPayload; //Provide either rule or a list of emails, not both.

const { status, data } = await apiInstance.contactsDeletePost(
    emailsPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **emailsPayload** | **EmailsPayload**| Provide either rule or a list of emails, not both. | |


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

# **contactsExportByIdStatusGet**
> ExportStatus contactsExportByIdStatusGet()

Check the current status of the export. Required Access Level: Export

### Example

```typescript
import {
    ContactsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new ContactsApi(configuration);

let id: string; //ID of the exported file (default to undefined)

const { status, data } = await apiInstance.contactsExportByIdStatusGet(
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

# **contactsExportPost**
> ExportLink contactsExportPost()

Request an Export of specified Contacts. Required Access Level: Export

### Example

```typescript
import {
    ContactsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new ContactsApi(configuration);

let fileFormat: ExportFileFormats; //Format of the exported file (optional) (default to undefined)
let rule: string; //Query used for filtering. (optional) (default to undefined)
let emails: Array<string>; //Comma delimited list of contact emails (optional) (default to undefined)
let compressionFormat: CompressionFormat; //FileResponse compression format. None or Zip. (optional) (default to undefined)
let fileName: string; //Name of your file including extension. (optional) (default to undefined)

const { status, data } = await apiInstance.contactsExportPost(
    fileFormat,
    rule,
    emails,
    compressionFormat,
    fileName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileFormat** | **ExportFileFormats** | Format of the exported file | (optional) defaults to undefined|
| **rule** | [**string**] | Query used for filtering. | (optional) defaults to undefined|
| **emails** | **Array&lt;string&gt;** | Comma delimited list of contact emails | (optional) defaults to undefined|
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

# **contactsGet**
> Array<Contact> contactsGet()

Returns a list of contacts. Required Access Level: ViewContacts

### Example

```typescript
import {
    ContactsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new ContactsApi(configuration);

let limit: number; //Maximum number of returned items. (optional) (default to undefined)
let offset: number; //How many items should be returned ahead. (optional) (default to undefined)

const { status, data } = await apiInstance.contactsGet(
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

# **contactsImportPost**
> contactsImportPost()

Upload contacts from a file. Required Access Level: ModifyContacts

### Example

```typescript
import {
    ContactsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new ContactsApi(configuration);

let listName: string; //Name of an existing list to add these contacts to (optional) (default to undefined)
let encodingName: string; //In what encoding the file is uploaded (optional) (default to undefined)
let fileUrl: string; //Optional url of csv to import (optional) (default to undefined)
let file: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.contactsImportPost(
    listName,
    encodingName,
    fileUrl,
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **listName** | [**string**] | Name of an existing list to add these contacts to | (optional) defaults to undefined|
| **encodingName** | [**string**] | In what encoding the file is uploaded | (optional) defaults to undefined|
| **fileUrl** | [**string**] | Optional url of csv to import | (optional) defaults to undefined|
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

# **contactsPost**
> Array<Contact> contactsPost(contactPayload)

Add new Contacts to your Lists. Up to 1000 can be added (for more please refer to the import request). Required Access Level: ModifyContacts

### Example

```typescript
import {
    ContactsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new ContactsApi(configuration);

let contactPayload: Array<ContactPayload>; //
let listnames: Array<string>; //Names of lists to which the uploaded contacts should be added to (optional) (default to undefined)

const { status, data } = await apiInstance.contactsPost(
    contactPayload,
    listnames
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contactPayload** | **Array<ContactPayload>**|  | |
| **listnames** | **Array&lt;string&gt;** | Names of lists to which the uploaded contacts should be added to | (optional) defaults to undefined|


### Return type

**Array<Contact>**

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

