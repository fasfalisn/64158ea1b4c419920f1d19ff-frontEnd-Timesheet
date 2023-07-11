# TempApi.SeptemberApi

All URIs are relative to *https://83.212.100.226:4008/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createseptember**](SeptemberApi.md#createseptember) | **POST** /september | Creates the data
[**deleteseptember**](SeptemberApi.md#deleteseptember) | **DELETE** /september/{septemberId} | Delete the element
[**getAllseptember**](SeptemberApi.md#getAllseptember) | **GET** /september/getAll | Get all the data
[**getByParamsseptember**](SeptemberApi.md#getByParamsseptember) | **GET** /september/getByParams | Get all the data based on user query
[**getseptember**](SeptemberApi.md#getseptember) | **GET** /september/{septemberId} | Get the element
[**updateseptember**](SeptemberApi.md#updateseptember) | **PUT** /september/{septemberId} | Updates the element



## createseptember

> September createseptember(september)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.SeptemberApi();
let september = new TempApi.September(); // September | data to be created
apiInstance.createseptember(september, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **september** | [**September**](September.md)| data to be created | 

### Return type

[**September**](September.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteseptember

> deleteseptember(septemberId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.SeptemberApi();
let septemberId = "septemberId_example"; // String | the Id parameter
apiInstance.deleteseptember(septemberId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **septemberId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllseptember

> [September] getAllseptember()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.SeptemberApi();
apiInstance.getAllseptember((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[September]**](September.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getByParamsseptember

> [September] getByParamsseptember(filter)

Get all the data based on user query

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.SeptemberApi();
let filter = "filter_example"; // String | the query based on which the search is performed
apiInstance.getByParamsseptember(filter, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| the query based on which the search is performed | 

### Return type

[**[September]**](September.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getseptember

> September getseptember(septemberId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.SeptemberApi();
let septemberId = "septemberId_example"; // String | the Id parameter
apiInstance.getseptember(septemberId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **septemberId** | **String**| the Id parameter | 

### Return type

[**September**](September.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateseptember

> September updateseptember(septemberId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.SeptemberApi();
let septemberId = "septemberId_example"; // String | the Id parameter
let opts = {
  'september': new TempApi.September() // September | data to be updated
};
apiInstance.updateseptember(septemberId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **septemberId** | **String**| the Id parameter | 
 **september** | [**September**](September.md)| data to be updated | [optional] 

### Return type

[**September**](September.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

