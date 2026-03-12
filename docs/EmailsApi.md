# EmailsApi

All URIs are relative to *https://api.elasticemail.com/v4*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**emailsByMsgidViewGet**](#emailsbymsgidviewget) | **GET** /emails/{msgid}/view | View Email|
|[**emailsByTransactionidStatusGet**](#emailsbytransactionidstatusget) | **GET** /emails/{transactionid}/status | Get Status|
|[**emailsMergefilePost**](#emailsmergefilepost) | **POST** /emails/mergefile | Send Bulk Emails CSV|
|[**emailsPost**](#emailspost) | **POST** /emails | Send Bulk Emails|
|[**emailsTransactionalPost**](#emailstransactionalpost) | **POST** /emails/transactional | Send Transactional Email|

# **emailsByMsgidViewGet**
> EmailData emailsByMsgidViewGet()

Returns email details for viewing or rendering. Required Access Level: None

### Example

```typescript
import {
    EmailsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new EmailsApi(configuration);

let msgid: string; //Message identifier (default to undefined)

const { status, data } = await apiInstance.emailsByMsgidViewGet(
    msgid
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **msgid** | [**string**] | Message identifier | defaults to undefined|


### Return type

**EmailData**

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

# **emailsByTransactionidStatusGet**
> EmailJobStatus emailsByTransactionidStatusGet()

Get status details of an email transaction. Required Access Level: ViewReports

### Example

```typescript
import {
    EmailsApi,
    Configuration
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new EmailsApi(configuration);

let transactionid: string; //Transaction identifier (default to undefined)
let showFailed: boolean; //Include Bounced email addresses. (optional) (default to false)
let showSent: boolean; //Include Sent email addresses. (optional) (default to false)
let showDelivered: boolean; //Include all delivered email addresses. (optional) (default to false)
let showPending: boolean; //Include Ready to send email addresses. (optional) (default to false)
let showOpened: boolean; //Include Opened email addresses. (optional) (default to false)
let showClicked: boolean; //Include Clicked email addresses. (optional) (default to false)
let showAbuse: boolean; //Include Reported as abuse email addresses. (optional) (default to false)
let showUnsubscribed: boolean; //Include Unsubscribed email addresses. (optional) (default to false)
let showErrors: boolean; //Include error messages for bounced emails. (optional) (default to false)
let showMessageIDs: boolean; //Include all MessageIDs for this transaction (optional) (default to false)

const { status, data } = await apiInstance.emailsByTransactionidStatusGet(
    transactionid,
    showFailed,
    showSent,
    showDelivered,
    showPending,
    showOpened,
    showClicked,
    showAbuse,
    showUnsubscribed,
    showErrors,
    showMessageIDs
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionid** | [**string**] | Transaction identifier | defaults to undefined|
| **showFailed** | [**boolean**] | Include Bounced email addresses. | (optional) defaults to false|
| **showSent** | [**boolean**] | Include Sent email addresses. | (optional) defaults to false|
| **showDelivered** | [**boolean**] | Include all delivered email addresses. | (optional) defaults to false|
| **showPending** | [**boolean**] | Include Ready to send email addresses. | (optional) defaults to false|
| **showOpened** | [**boolean**] | Include Opened email addresses. | (optional) defaults to false|
| **showClicked** | [**boolean**] | Include Clicked email addresses. | (optional) defaults to false|
| **showAbuse** | [**boolean**] | Include Reported as abuse email addresses. | (optional) defaults to false|
| **showUnsubscribed** | [**boolean**] | Include Unsubscribed email addresses. | (optional) defaults to false|
| **showErrors** | [**boolean**] | Include error messages for bounced emails. | (optional) defaults to false|
| **showMessageIDs** | [**boolean**] | Include all MessageIDs for this transaction | (optional) defaults to false|


### Return type

**EmailJobStatus**

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

# **emailsMergefilePost**
> EmailSend emailsMergefilePost(mergeEmailPayload)

Send to a list of contacts submitted in a CSV data file. The first column in the CSV must be the email address and the CSV must contain a header row. Additional fields can be included with a named header row and can be merged with the template using {merge} tags in the content.                           Example CSV:                           email, firstname, lastname              test1@gmail.com, michael, smith              test2@gmail.com, janet, smith                           Merge file must not be empty. Required Access Level: SendHttp

### Example

```typescript
import {
    EmailsApi,
    Configuration,
    MergeEmailPayload
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new EmailsApi(configuration);

let mergeEmailPayload: MergeEmailPayload; //Email data

const { status, data } = await apiInstance.emailsMergefilePost(
    mergeEmailPayload
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mergeEmailPayload** | **MergeEmailPayload**| Email data | |


### Return type

**EmailSend**

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

# **emailsPost**
> EmailSend emailsPost(emailMessageData)

Send bulk merge email. Required Access Level: SendHttp

### Example

```typescript
import {
    EmailsApi,
    Configuration,
    EmailMessageData
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new EmailsApi(configuration);

let emailMessageData: EmailMessageData; //Email data

const { status, data } = await apiInstance.emailsPost(
    emailMessageData
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **emailMessageData** | **EmailMessageData**| Email data | |


### Return type

**EmailSend**

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

# **emailsTransactionalPost**
> EmailSend emailsTransactionalPost(emailTransactionalMessageData)

Send transactional emails (recipients will be known to each other). Required Access Level: SendHttp

### Example

```typescript
import {
    EmailsApi,
    Configuration,
    EmailTransactionalMessageData
} from 'elasticemail-client-ts-axios';

const configuration = new Configuration();
const apiInstance = new EmailsApi(configuration);

let emailTransactionalMessageData: EmailTransactionalMessageData; //Email data

const { status, data } = await apiInstance.emailsTransactionalPost(
    emailTransactionalMessageData
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **emailTransactionalMessageData** | **EmailTransactionalMessageData**| Email data | |


### Return type

**EmailSend**

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

