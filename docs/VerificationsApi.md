# VerificationsApi

All URIs are relative to *https://api.elasticemail.com/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**verificationsByEmailDelete**](#verificationsbyemaildelete) | **DELETE** /verifications/{email} | Delete Email Verification Result|
|[**verificationsByEmailGet**](#verificationsbyemailget) | **GET** /verifications/{email} | Get Email Verification Result|
|[**verificationsByEmailPost**](#verificationsbyemailpost) | **POST** /verifications/{email} | Verify Email|
|[**verificationsFilesByIdDelete**](#verificationsfilesbyiddelete) | **DELETE** /verifications/files/{id} | Delete File Verification Result|
|[**verificationsFilesByIdResultDownloadGet**](#verificationsfilesbyidresultdownloadget) | **GET** /verifications/files/{id}/result/download | Download File Verification Result|
|[**verificationsFilesByIdResultGet**](#verificationsfilesbyidresultget) | **GET** /verifications/files/{id}/result | Get Detailed File Verification Result|
|[**verificationsFilesByIdVerificationPost**](#verificationsfilesbyidverificationpost) | **POST** /verifications/files/{id}/verification | Start verification|
|[**verificationsFilesPost**](#verificationsfilespost) | **POST** /verifications/files | Upload File with Emails|
|[**verificationsFilesResultGet**](#verificationsfilesresultget) | **GET** /verifications/files/result | Get Files Verification Results|
|[**verificationsGet**](#verificationsget) | **GET** /verifications | Get Emails Verification Results|

# **verificationsByEmailDelete**
> verificationsByEmailDelete()

Delete a result with given email if exists. Required Access Level: VerifyEmails

### Example

```typescript
import {
    VerificationsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new VerificationsApi(configuration);

let email: string; //Email address to verification (default to undefined)

const { status, data } = await apiInstance.verificationsByEmailDelete(
    email
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **email** | [**string**] | Email address to verification | defaults to undefined|


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

# **verificationsByEmailGet**
> EmailValidationResult verificationsByEmailGet()

Returns a result of verified email. Required Access Level: ViewVerifyEmails

### Example

```typescript
import {
    VerificationsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new VerificationsApi(configuration);

let email: string; //Email address to view verification result of (default to undefined)

const { status, data } = await apiInstance.verificationsByEmailGet(
    email
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **email** | [**string**] | Email address to view verification result of | defaults to undefined|


### Return type

**EmailValidationResult**

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

# **verificationsByEmailPost**
> EmailValidationResult verificationsByEmailPost()

Verify single email address and returns result of verification. Required Access Level: VerifyEmails

### Example

```typescript
import {
    VerificationsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new VerificationsApi(configuration);

let email: string; //Email address to verify (default to undefined)

const { status, data } = await apiInstance.verificationsByEmailPost(
    email
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **email** | [**string**] | Email address to verify | defaults to undefined|


### Return type

**EmailValidationResult**

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

# **verificationsFilesByIdDelete**
> verificationsFilesByIdDelete()

Delete Verification Results if they exist. Required Access Level: VerifyEmails

### Example

```typescript
import {
    VerificationsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new VerificationsApi(configuration);

let id: string; //ID of the exported file (default to undefined)

const { status, data } = await apiInstance.verificationsFilesByIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | ID of the exported file | defaults to undefined|


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

# **verificationsFilesByIdResultDownloadGet**
> File verificationsFilesByIdResultDownloadGet()

Download verification results as a ZIP file. Required Access Level: ViewVerifyEmails

### Example

```typescript
import {
    VerificationsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new VerificationsApi(configuration);

let id: string; //Verification ID to download (default to undefined)

const { status, data } = await apiInstance.verificationsFilesByIdResultDownloadGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Verification ID to download | defaults to undefined|


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
|**200** | A ZIP file with verification details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verificationsFilesByIdResultGet**
> VerificationFileResultDetails verificationsFilesByIdResultGet()

Returns status and results (if verified) of file with given ID. Required Access Level: ViewVerifyEmails

### Example

```typescript
import {
    VerificationsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new VerificationsApi(configuration);

let id: string; //ID of the Verification to display status of (default to undefined)
let limit: number; //Maximum number of returned email verification results (optional) (default to undefined)
let offset: number; //How many result items should be returned ahead (optional) (default to undefined)

const { status, data } = await apiInstance.verificationsFilesByIdResultGet(
    id,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | ID of the Verification to display status of | defaults to undefined|
| **limit** | [**number**] | Maximum number of returned email verification results | (optional) defaults to undefined|
| **offset** | [**number**] | How many result items should be returned ahead | (optional) defaults to undefined|


### Return type

**VerificationFileResultDetails**

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

# **verificationsFilesByIdVerificationPost**
> verificationsFilesByIdVerificationPost()

Start a verification of the previously uploaded file with emails. Required Access Level: VerifyEmails

### Example

```typescript
import {
    VerificationsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new VerificationsApi(configuration);

let id: string; //File ID to start verification (default to undefined)

const { status, data } = await apiInstance.verificationsFilesByIdVerificationPost(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | File ID to start verification | defaults to undefined|


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

# **verificationsFilesPost**
> VerificationFileResult verificationsFilesPost()

Uploads a CSV file with list of emails that can then be triggered for verification. An \'email\' column is required. Required Access Level: VerifyEmails

### Example

```typescript
import {
    VerificationsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new VerificationsApi(configuration);

let file: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.verificationsFilesPost(
    file
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | (optional) defaults to undefined|


### Return type

**VerificationFileResult**

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verificationsFilesResultGet**
> Array<VerificationFileResult> verificationsFilesResultGet()

Returns a list of uploaded files, their statuses and results. Required Access Level: ViewVerifyEmails

### Example

```typescript
import {
    VerificationsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new VerificationsApi(configuration);

const { status, data } = await apiInstance.verificationsFilesResultGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<VerificationFileResult>**

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

# **verificationsGet**
> Array<EmailValidationResult> verificationsGet()

Returns a results of all verified single emails. Required Access Level: ViewVerifyEmails

### Example

```typescript
import {
    VerificationsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new VerificationsApi(configuration);

let limit: number; //Maximum number of returned items. (optional) (default to undefined)
let offset: number; //How many items should be returned ahead. (optional) (default to undefined)

const { status, data } = await apiInstance.verificationsGet(
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

**Array<EmailValidationResult>**

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

