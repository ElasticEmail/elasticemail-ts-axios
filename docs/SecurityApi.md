# SecurityApi

All URIs are relative to *https://api.elasticemail.com/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**securityApikeysByNameDelete**](#securityapikeysbynamedelete) | **DELETE** /security/apikeys/{name} | Delete ApiKey|
|[**securityApikeysByNameGet**](#securityapikeysbynameget) | **GET** /security/apikeys/{name} | Load ApiKey|
|[**securityApikeysByNamePut**](#securityapikeysbynameput) | **PUT** /security/apikeys/{name} | Update ApiKey|
|[**securityApikeysGet**](#securityapikeysget) | **GET** /security/apikeys | List ApiKeys|
|[**securityApikeysPost**](#securityapikeyspost) | **POST** /security/apikeys | Add ApiKey|
|[**securitySmtpByNameDelete**](#securitysmtpbynamedelete) | **DELETE** /security/smtp/{name} | Delete SMTP Credential|
|[**securitySmtpByNameGet**](#securitysmtpbynameget) | **GET** /security/smtp/{name} | Load SMTP Credential|
|[**securitySmtpByNamePut**](#securitysmtpbynameput) | **PUT** /security/smtp/{name} | Update SMTP Credential|
|[**securitySmtpGet**](#securitysmtpget) | **GET** /security/smtp | List SMTP Credentials|
|[**securitySmtpPost**](#securitysmtppost) | **POST** /security/smtp | Add SMTP Credential|

# **securityApikeysByNameDelete**
> securityApikeysByNameDelete()

Delete your existing ApiKey. Required Access Level: ModifyAccessTokens

### Example

```typescript
import {
    SecurityApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SecurityApi(configuration);

let name: string; //Name of the ApiKey (default to undefined)
let subaccount: string; //Email of the subaccount of which ApiKey should be deleted (optional) (default to undefined)

const { status, data } = await apiInstance.securityApikeysByNameDelete(
    name,
    subaccount
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | Name of the ApiKey | defaults to undefined|
| **subaccount** | [**string**] | Email of the subaccount of which ApiKey should be deleted | (optional) defaults to undefined|


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

# **securityApikeysByNameGet**
> ApiKey securityApikeysByNameGet()

Load your existing ApiKey info. Required Access Level: ViewAccessTokens

### Example

```typescript
import {
    SecurityApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SecurityApi(configuration);

let name: string; //Name of the ApiKey (default to undefined)
let subaccount: string; //Email of the subaccount of which ApiKey should be loaded (optional) (default to undefined)

const { status, data } = await apiInstance.securityApikeysByNameGet(
    name,
    subaccount
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | Name of the ApiKey | defaults to undefined|
| **subaccount** | [**string**] | Email of the subaccount of which ApiKey should be loaded | (optional) defaults to undefined|


### Return type

**ApiKey**

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

# **securityApikeysByNamePut**
> ApiKey securityApikeysByNamePut(apiKeyPayload)

Update your existing ApiKey. Required Access Level: ModifyAccessTokens

### Example

```typescript
import {
    SecurityApi,
    Configuration,
    ApiKeyPayload
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SecurityApi(configuration);

let name: string; //Name of the ApiKey (default to undefined)
let apiKeyPayload: ApiKeyPayload; //

const { status, data } = await apiInstance.securityApikeysByNamePut(
    name,
    apiKeyPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKeyPayload** | **ApiKeyPayload**|  | |
| **name** | [**string**] | Name of the ApiKey | defaults to undefined|


### Return type

**ApiKey**

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

# **securityApikeysGet**
> Array<ApiKey> securityApikeysGet()

List all your existing ApiKeys. Required Access Level: ViewAccessTokens

### Example

```typescript
import {
    SecurityApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SecurityApi(configuration);

let subaccount: string; //Email of the subaccount of which ApiKeys should be loaded (optional) (default to undefined)

const { status, data } = await apiInstance.securityApikeysGet(
    subaccount
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **subaccount** | [**string**] | Email of the subaccount of which ApiKeys should be loaded | (optional) defaults to undefined|


### Return type

**Array<ApiKey>**

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

# **securityApikeysPost**
> NewApiKey securityApikeysPost(apiKeyPayload)

Add a new ApiKey. Required Access Level: ModifyAccessTokens

### Example

```typescript
import {
    SecurityApi,
    Configuration,
    ApiKeyPayload
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SecurityApi(configuration);

let apiKeyPayload: ApiKeyPayload; //

const { status, data } = await apiInstance.securityApikeysPost(
    apiKeyPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKeyPayload** | **ApiKeyPayload**|  | |


### Return type

**NewApiKey**

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

# **securitySmtpByNameDelete**
> securitySmtpByNameDelete()

Delete your existing SMTP Credentials. Required Access Level: ModifyAccessTokens

### Example

```typescript
import {
    SecurityApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SecurityApi(configuration);

let name: string; //Name of the SMTP Credential (default to undefined)
let subaccount: string; //Email of the subaccount of which credential should be deleted (optional) (default to undefined)

const { status, data } = await apiInstance.securitySmtpByNameDelete(
    name,
    subaccount
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | Name of the SMTP Credential | defaults to undefined|
| **subaccount** | [**string**] | Email of the subaccount of which credential should be deleted | (optional) defaults to undefined|


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

# **securitySmtpByNameGet**
> SmtpCredentials securitySmtpByNameGet()

Load your existing SMTP Credential info. Required Access Level: ViewAccessTokens

### Example

```typescript
import {
    SecurityApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SecurityApi(configuration);

let name: string; //Name of the SMTP Credential (default to undefined)
let subaccount: string; //Email of the subaccount of which credential should be loaded (optional) (default to undefined)

const { status, data } = await apiInstance.securitySmtpByNameGet(
    name,
    subaccount
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | Name of the SMTP Credential | defaults to undefined|
| **subaccount** | [**string**] | Email of the subaccount of which credential should be loaded | (optional) defaults to undefined|


### Return type

**SmtpCredentials**

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

# **securitySmtpByNamePut**
> SmtpCredentials securitySmtpByNamePut(smtpCredentialsPayload)

Update your existing SMTP Credentials. Required Access Level: ModifyAccessTokens

### Example

```typescript
import {
    SecurityApi,
    Configuration,
    SmtpCredentialsPayload
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SecurityApi(configuration);

let name: string; //Name of the SMTP Credential (default to undefined)
let smtpCredentialsPayload: SmtpCredentialsPayload; //

const { status, data } = await apiInstance.securitySmtpByNamePut(
    name,
    smtpCredentialsPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **smtpCredentialsPayload** | **SmtpCredentialsPayload**|  | |
| **name** | [**string**] | Name of the SMTP Credential | defaults to undefined|


### Return type

**SmtpCredentials**

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

# **securitySmtpGet**
> Array<SmtpCredentials> securitySmtpGet()

List all your existing SMTP Credentials. Required Access Level: ViewAccessTokens

### Example

```typescript
import {
    SecurityApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SecurityApi(configuration);

let subaccount: string; //Email of the subaccount of which credentials should be listed (optional) (default to undefined)

const { status, data } = await apiInstance.securitySmtpGet(
    subaccount
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **subaccount** | [**string**] | Email of the subaccount of which credentials should be listed | (optional) defaults to undefined|


### Return type

**Array<SmtpCredentials>**

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

# **securitySmtpPost**
> NewSmtpCredentials securitySmtpPost(smtpCredentialsPayload)

Add new SMTP Credential. Required Access Level: ModifyAccessTokens

### Example

```typescript
import {
    SecurityApi,
    Configuration,
    SmtpCredentialsPayload
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new SecurityApi(configuration);

let smtpCredentialsPayload: SmtpCredentialsPayload; //

const { status, data } = await apiInstance.securitySmtpPost(
    smtpCredentialsPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **smtpCredentialsPayload** | **SmtpCredentialsPayload**|  | |


### Return type

**NewSmtpCredentials**

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

