# TempApi.OctoberApi

All URIs are relative to *https://83.212.100.226:4008/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createoctober**](OctoberApi.md#createoctober) | **POST** /october | Creates the data
[**deleteoctober**](OctoberApi.md#deleteoctober) | **DELETE** /october/{octoberId} | Delete the element
[**getAlloctober**](OctoberApi.md#getAlloctober) | **GET** /october/getAll | Get all the data
[**getByParamsoctober**](OctoberApi.md#getByParamsoctober) | **GET** /october/getByParams | Get all the data based on user query
[**getoctober**](OctoberApi.md#getoctober) | **GET** /october/{octoberId} | Get the element
[**updateoctober**](OctoberApi.md#updateoctober) | **PUT** /october/{octoberId} | Updates the element



## createoctober

> October createoctober(october)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.OctoberApi();
let october = new TempApi.October(); // October | data to be created
apiInstance.createoctober(october, (error, data, response) => {
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
 **october** | [**October**](October.md)| data to be created | 

### Return type

[**October**](October.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteoctober

> deleteoctober(octoberId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.OctoberApi();
let octoberId = "octoberId_example"; // String | the Id parameter
apiInstance.deleteoctober(octoberId, (error, data, response) => {
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
 **octoberId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAlloctober

> [October] getAlloctober()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.OctoberApi();
apiInstance.getAlloctober((error, data, response) => {
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

[**[October]**](October.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getByParamsoctober

> [October] getByParamsoctober(filter)

Get all the data based on user query

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.OctoberApi();
let filter = "filter_example"; // String | the query based on which the search is performed
apiInstance.getByParamsoctober(filter, (error, data, response) => {
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

[**[October]**](October.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getoctober

> October getoctober(octoberId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.OctoberApi();
let octoberId = "octoberId_example"; // String | the Id parameter
apiInstance.getoctober(octoberId, (error, data, response) => {
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
 **octoberId** | **String**| the Id parameter | 

### Return type

[**October**](October.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateoctober

> October updateoctober(octoberId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.OctoberApi();
let octoberId = "octoberId_example"; // String | the Id parameter
let opts = {
  'october': new TempApi.October() // October | data to be updated
};
apiInstance.updateoctober(octoberId, opts, (error, data, response) => {
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
 **octoberId** | **String**| the Id parameter | 
 **october** | [**October**](October.md)| data to be updated | [optional] 

### Return type

[**October**](October.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

