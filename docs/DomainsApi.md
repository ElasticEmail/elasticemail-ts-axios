# DomainsApi

All URIs are relative to *https://api.elasticemail.com/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**domainsByDomainDelete**](#domainsbydomaindelete) | **DELETE** /domains/{domain} | Delete Domain|
|[**domainsByDomainGet**](#domainsbydomainget) | **GET** /domains/{domain} | Load Domain|
|[**domainsByDomainPut**](#domainsbydomainput) | **PUT** /domains/{domain} | Update Domain|
|[**domainsByDomainRestrictedGet**](#domainsbydomainrestrictedget) | **GET** /domains/{domain}/restricted | Check for domain restriction|
|[**domainsByDomainVerificationPut**](#domainsbydomainverificationput) | **PUT** /domains/{domain}/verification | Verify Domain|
|[**domainsByEmailDefaultPatch**](#domainsbyemaildefaultpatch) | **PATCH** /domains/{email}/default | Set Default|
|[**domainsGet**](#domainsget) | **GET** /domains | Load Domains|
|[**domainsPost**](#domainspost) | **POST** /domains | Add Domain|

# **domainsByDomainDelete**
> domainsByDomainDelete()

Deletes configured domain from Account. Required Access Level: ModifySettings

### Example

```typescript
import {
    DomainsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new DomainsApi(configuration);

let domain: string; //Name of the given domain (default to undefined)

const { status, data } = await apiInstance.domainsByDomainDelete(
    domain
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] | Name of the given domain | defaults to undefined|


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

# **domainsByDomainGet**
> DomainData domainsByDomainGet()

Retrieve a domain configured for this Account. Required Access Level: ViewSettings

### Example

```typescript
import {
    DomainsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new DomainsApi(configuration);

let domain: string; //Name of the given domain (default to undefined)

const { status, data } = await apiInstance.domainsByDomainGet(
    domain
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] | Name of the given domain | defaults to undefined|


### Return type

**DomainData**

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

# **domainsByDomainPut**
> DomainDetail domainsByDomainPut(domainUpdatePayload)

Updates the specified domain. Required Access Level: ModifySettings

### Example

```typescript
import {
    DomainsApi,
    Configuration,
    DomainUpdatePayload
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new DomainsApi(configuration);

let domain: string; //Name of the given domain (default to undefined)
let domainUpdatePayload: DomainUpdatePayload; //Updated Domain resource

const { status, data } = await apiInstance.domainsByDomainPut(
    domain,
    domainUpdatePayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domainUpdatePayload** | **DomainUpdatePayload**| Updated Domain resource | |
| **domain** | [**string**] | Name of the given domain | defaults to undefined|


### Return type

**DomainDetail**

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

# **domainsByDomainRestrictedGet**
> boolean domainsByDomainRestrictedGet()

Checking if domain is from free provider, or restricted. Required Access Level: ViewSettings

### Example

```typescript
import {
    DomainsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new DomainsApi(configuration);

let domain: string; //Name of the given domain (default to undefined)

const { status, data } = await apiInstance.domainsByDomainRestrictedGet(
    domain
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] | Name of the given domain | defaults to undefined|


### Return type

**boolean**

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

# **domainsByDomainVerificationPut**
> DomainData domainsByDomainVerificationPut(body)

Verifies that required DNS records exist for specified domain. Required Access Level: ModifySettings

### Example

```typescript
import {
    DomainsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new DomainsApi(configuration);

let domain: string; //Name of the given domain (default to undefined)
let body: string; //Tracking type used in the Tracking verification

const { status, data } = await apiInstance.domainsByDomainVerificationPut(
    domain,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**| Tracking type used in the Tracking verification | |
| **domain** | [**string**] | Name of the given domain | defaults to undefined|


### Return type

**DomainData**

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

# **domainsByEmailDefaultPatch**
> DomainDetail domainsByEmailDefaultPatch()

Sets a verified email address as default sender. Required Access Level: ModifySettings

### Example

```typescript
import {
    DomainsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new DomainsApi(configuration);

let email: string; //Default email sender, example: mail@yourdomain.com (default to undefined)

const { status, data } = await apiInstance.domainsByEmailDefaultPatch(
    email
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **email** | [**string**] | Default email sender, example: mail@yourdomain.com | defaults to undefined|


### Return type

**DomainDetail**

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

# **domainsGet**
> Array<DomainDetail> domainsGet()

Returns a list of all domains configured for this Account. Required Access Level: ViewSettings

### Example

```typescript
import {
    DomainsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new DomainsApi(configuration);

const { status, data } = await apiInstance.domainsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<DomainDetail>**

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

# **domainsPost**
> DomainDetail domainsPost(domainPayload)

Add new domain to Account. Required Access Level: ModifySettings

### Example

```typescript
import {
    DomainsApi,
    Configuration,
    DomainPayload
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new DomainsApi(configuration);

let domainPayload: DomainPayload; //Domain to add

const { status, data } = await apiInstance.domainsPost(
    domainPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domainPayload** | **DomainPayload**| Domain to add | |


### Return type

**DomainDetail**

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

