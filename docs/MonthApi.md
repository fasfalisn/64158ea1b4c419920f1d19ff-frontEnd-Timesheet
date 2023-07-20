# TempApi.MonthApi

All URIs are relative to *https://83.212.100.226:4008/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createmonth**](MonthApi.md#createmonth) | **POST** /month | Creates the data
[**deletemonth**](MonthApi.md#deletemonth) | **DELETE** /month/{monthId} | Delete the element
[**getAllmonth**](MonthApi.md#getAllmonth) | **GET** /month/getAll | Get all the data
[**getByParamsmonth**](MonthApi.md#getByParamsmonth) | **GET** /month/getByParams | Get all the data based on user query
[**getmonth**](MonthApi.md#getmonth) | **GET** /month/{monthId} | Get the element
[**updatemonth**](MonthApi.md#updatemonth) | **PUT** /month/{monthId} | Updates the element



## createmonth

> Month createmonth(month)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.MonthApi();
let month = new TempApi.Month(); // Month | data to be created
apiInstance.createmonth(month, (error, data, response) => {
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
 **month** | [**Month**](Month.md)| data to be created | 

### Return type

[**Month**](Month.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletemonth

> deletemonth(monthId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.MonthApi();
let monthId = "monthId_example"; // String | the Id parameter
apiInstance.deletemonth(monthId, (error, data, response) => {
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
 **monthId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllmonth

> [Month] getAllmonth()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.MonthApi();
apiInstance.getAllmonth((error, data, response) => {
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

[**[Month]**](Month.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getByParamsmonth

> [Month] getByParamsmonth(filter)

Get all the data based on user query

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.MonthApi();
let filter = "filter_example"; // String | the query based on which the search is performed
apiInstance.getByParamsmonth(filter, (error, data, response) => {
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

[**[Month]**](Month.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getmonth

> Month getmonth(monthId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.MonthApi();
let monthId = "monthId_example"; // String | the Id parameter
apiInstance.getmonth(monthId, (error, data, response) => {
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
 **monthId** | **String**| the Id parameter | 

### Return type

[**Month**](Month.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatemonth

> Month updatemonth(monthId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.MonthApi();
let monthId = "monthId_example"; // String | the Id parameter
let opts = {
  'month': new TempApi.Month() // Month | data to be updated
};
apiInstance.updatemonth(monthId, opts, (error, data, response) => {
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
 **monthId** | **String**| the Id parameter | 
 **month** | [**Month**](Month.md)| data to be updated | [optional] 

### Return type

[**Month**](Month.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

