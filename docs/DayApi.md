# TempApi.DayApi

All URIs are relative to *https://83.212.100.226:4008/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createday**](DayApi.md#createday) | **POST** /day | Creates the data
[**deleteday**](DayApi.md#deleteday) | **DELETE** /day/{dayId} | Delete the element
[**getAllday**](DayApi.md#getAllday) | **GET** /day/getAll | Get all the data
[**getByParamsday**](DayApi.md#getByParamsday) | **GET** /day/getByParams | Get all the data based on user query
[**getday**](DayApi.md#getday) | **GET** /day/{dayId} | Get the element
[**updateday**](DayApi.md#updateday) | **PUT** /day/{dayId} | Updates the element



## createday

> Day createday(day)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DayApi();
let day = new TempApi.Day(); // Day | data to be created
apiInstance.createday(day, (error, data, response) => {
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
 **day** | [**Day**](Day.md)| data to be created | 

### Return type

[**Day**](Day.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteday

> deleteday(dayId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DayApi();
let dayId = "dayId_example"; // String | the Id parameter
apiInstance.deleteday(dayId, (error, data, response) => {
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
 **dayId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllday

> [Day] getAllday()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DayApi();
apiInstance.getAllday((error, data, response) => {
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

[**[Day]**](Day.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getByParamsday

> [Day] getByParamsday(filter)

Get all the data based on user query

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DayApi();
let filter = "filter_example"; // String | the query based on which the search is performed
apiInstance.getByParamsday(filter, (error, data, response) => {
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

[**[Day]**](Day.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getday

> Day getday(dayId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DayApi();
let dayId = "dayId_example"; // String | the Id parameter
apiInstance.getday(dayId, (error, data, response) => {
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
 **dayId** | **String**| the Id parameter | 

### Return type

[**Day**](Day.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateday

> Day updateday(dayId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DayApi();
let dayId = "dayId_example"; // String | the Id parameter
let opts = {
  'day': new TempApi.Day() // Day | data to be updated
};
apiInstance.updateday(dayId, opts, (error, data, response) => {
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
 **dayId** | **String**| the Id parameter | 
 **day** | [**Day**](Day.md)| data to be updated | [optional] 

### Return type

[**Day**](Day.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

