# TempApi.DecemberApi

All URIs are relative to *https://83.212.100.226:4008/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createdecember**](DecemberApi.md#createdecember) | **POST** /december | Creates the data
[**deletedecember**](DecemberApi.md#deletedecember) | **DELETE** /december/{decemberId} | Delete the element
[**getAlldecember**](DecemberApi.md#getAlldecember) | **GET** /december/getAll | Get all the data
[**getByParamsdecember**](DecemberApi.md#getByParamsdecember) | **GET** /december/getByParams | Get all the data based on user query
[**getdecember**](DecemberApi.md#getdecember) | **GET** /december/{decemberId} | Get the element
[**updatedecember**](DecemberApi.md#updatedecember) | **PUT** /december/{decemberId} | Updates the element



## createdecember

> December createdecember(december)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DecemberApi();
let december = new TempApi.December(); // December | data to be created
apiInstance.createdecember(december, (error, data, response) => {
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
 **december** | [**December**](December.md)| data to be created | 

### Return type

[**December**](December.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletedecember

> deletedecember(decemberId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DecemberApi();
let decemberId = "decemberId_example"; // String | the Id parameter
apiInstance.deletedecember(decemberId, (error, data, response) => {
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
 **decemberId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAlldecember

> [December] getAlldecember()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DecemberApi();
apiInstance.getAlldecember((error, data, response) => {
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

[**[December]**](December.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getByParamsdecember

> [December] getByParamsdecember(filter)

Get all the data based on user query

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DecemberApi();
let filter = "filter_example"; // String | the query based on which the search is performed
apiInstance.getByParamsdecember(filter, (error, data, response) => {
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

[**[December]**](December.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getdecember

> December getdecember(decemberId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DecemberApi();
let decemberId = "decemberId_example"; // String | the Id parameter
apiInstance.getdecember(decemberId, (error, data, response) => {
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
 **decemberId** | **String**| the Id parameter | 

### Return type

[**December**](December.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatedecember

> December updatedecember(decemberId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.DecemberApi();
let decemberId = "decemberId_example"; // String | the Id parameter
let opts = {
  'december': new TempApi.December() // December | data to be updated
};
apiInstance.updatedecember(decemberId, opts, (error, data, response) => {
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
 **decemberId** | **String**| the Id parameter | 
 **december** | [**December**](December.md)| data to be updated | [optional] 

### Return type

[**December**](December.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

