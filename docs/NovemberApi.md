# TempApi.NovemberApi

All URIs are relative to *https://83.212.100.226:4008/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createnovember**](NovemberApi.md#createnovember) | **POST** /november | Creates the data
[**deletenovember**](NovemberApi.md#deletenovember) | **DELETE** /november/{novemberId} | Delete the element
[**getAllnovember**](NovemberApi.md#getAllnovember) | **GET** /november/getAll | Get all the data
[**getByParamsnovember**](NovemberApi.md#getByParamsnovember) | **GET** /november/getByParams | Get all the data based on user query
[**getnovember**](NovemberApi.md#getnovember) | **GET** /november/{novemberId} | Get the element
[**updatenovember**](NovemberApi.md#updatenovember) | **PUT** /november/{novemberId} | Updates the element



## createnovember

> November createnovember(november)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.NovemberApi();
let november = new TempApi.November(); // November | data to be created
apiInstance.createnovember(november, (error, data, response) => {
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
 **november** | [**November**](November.md)| data to be created | 

### Return type

[**November**](November.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletenovember

> deletenovember(novemberId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.NovemberApi();
let novemberId = "novemberId_example"; // String | the Id parameter
apiInstance.deletenovember(novemberId, (error, data, response) => {
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
 **novemberId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllnovember

> [November] getAllnovember()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.NovemberApi();
apiInstance.getAllnovember((error, data, response) => {
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

[**[November]**](November.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getByParamsnovember

> [November] getByParamsnovember(filter)

Get all the data based on user query

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.NovemberApi();
let filter = "filter_example"; // String | the query based on which the search is performed
apiInstance.getByParamsnovember(filter, (error, data, response) => {
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

[**[November]**](November.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getnovember

> November getnovember(novemberId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.NovemberApi();
let novemberId = "novemberId_example"; // String | the Id parameter
apiInstance.getnovember(novemberId, (error, data, response) => {
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
 **novemberId** | **String**| the Id parameter | 

### Return type

[**November**](November.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatenovember

> November updatenovember(novemberId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.NovemberApi();
let novemberId = "novemberId_example"; // String | the Id parameter
let opts = {
  'november': new TempApi.November() // November | data to be updated
};
apiInstance.updatenovember(novemberId, opts, (error, data, response) => {
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
 **novemberId** | **String**| the Id parameter | 
 **november** | [**November**](November.md)| data to be updated | [optional] 

### Return type

[**November**](November.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

