# CarRentalApi.DefaultApi

All URIs are relative to *https://api.carrental.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCar**](DefaultApi.md#createCar) | **POST** /cars | Add a new car
[**createReservation**](DefaultApi.md#createReservation) | **POST** /reservations | Create a new reservation
[**deleteCar**](DefaultApi.md#deleteCar) | **DELETE** /cars/{carId} | Delete a car by ID
[**deleteReservation**](DefaultApi.md#deleteReservation) | **DELETE** /reservations/{reservationId} | Delete a reservation by ID
[**getCarById**](DefaultApi.md#getCarById) | **GET** /cars/{carId} | Retrieve car details by ID
[**getCars**](DefaultApi.md#getCars) | **GET** /cars | Retrieve a list of all cars
[**getReservationById**](DefaultApi.md#getReservationById) | **GET** /reservations/{reservationId} | Retrieve reservation details by ID
[**getReservations**](DefaultApi.md#getReservations) | **GET** /reservations | Retrieve a list of all reservations
[**updateCar**](DefaultApi.md#updateCar) | **PUT** /cars/{carId} | Update a car by ID
[**updateReservation**](DefaultApi.md#updateReservation) | **PUT** /reservations/{reservationId} | Update a reservation by ID

<a name="createCar"></a>
# **createCar**
> Car createCar(body)

Add a new car

### Example
```javascript
import {CarRentalApi} from 'car_rental_api';

let apiInstance = new CarRentalApi.DefaultApi();
let body = new CarRentalApi.Car(); // Car | 

apiInstance.createCar(body, (error, data, response) => {
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
 **body** | [**Car**](Car.md)|  | 

### Return type

[**Car**](Car.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createReservation"></a>
# **createReservation**
> Reservation createReservation(body)

Create a new reservation

### Example
```javascript
import {CarRentalApi} from 'car_rental_api';

let apiInstance = new CarRentalApi.DefaultApi();
let body = new CarRentalApi.Reservation(); // Reservation | 

apiInstance.createReservation(body, (error, data, response) => {
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
 **body** | [**Reservation**](Reservation.md)|  | 

### Return type

[**Reservation**](Reservation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCar"></a>
# **deleteCar**
> deleteCar(carId)

Delete a car by ID

### Example
```javascript
import {CarRentalApi} from 'car_rental_api';

let apiInstance = new CarRentalApi.DefaultApi();
let carId = "carId_example"; // String | 

apiInstance.deleteCar(carId, (error, data, response) => {
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
 **carId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteReservation"></a>
# **deleteReservation**
> deleteReservation(reservationId)

Delete a reservation by ID

### Example
```javascript
import {CarRentalApi} from 'car_rental_api';

let apiInstance = new CarRentalApi.DefaultApi();
let reservationId = "reservationId_example"; // String | 

apiInstance.deleteReservation(reservationId, (error, data, response) => {
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
 **reservationId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getCarById"></a>
# **getCarById**
> Car getCarById(carId)

Retrieve car details by ID

### Example
```javascript
import {CarRentalApi} from 'car_rental_api';

let apiInstance = new CarRentalApi.DefaultApi();
let carId = "carId_example"; // String | 

apiInstance.getCarById(carId, (error, data, response) => {
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
 **carId** | **String**|  | 

### Return type

[**Car**](Car.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCars"></a>
# **getCars**
> [Car] getCars(opts)

Retrieve a list of all cars

### Example
```javascript
import {CarRentalApi} from 'car_rental_api';

let apiInstance = new CarRentalApi.DefaultApi();
let opts = { 
  'status': "status_example" // String | Filter cars by status (available, rented, maintenance)
};
apiInstance.getCars(opts, (error, data, response) => {
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
 **status** | **String**| Filter cars by status (available, rented, maintenance) | [optional] 

### Return type

[**[Car]**](Car.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReservationById"></a>
# **getReservationById**
> Reservation getReservationById(reservationId)

Retrieve reservation details by ID

### Example
```javascript
import {CarRentalApi} from 'car_rental_api';

let apiInstance = new CarRentalApi.DefaultApi();
let reservationId = "reservationId_example"; // String | 

apiInstance.getReservationById(reservationId, (error, data, response) => {
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
 **reservationId** | **String**|  | 

### Return type

[**Reservation**](Reservation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReservations"></a>
# **getReservations**
> [Reservation] getReservations(opts)

Retrieve a list of all reservations

### Example
```javascript
import {CarRentalApi} from 'car_rental_api';

let apiInstance = new CarRentalApi.DefaultApi();
let opts = { 
  'status': "status_example" // String | Filter reservations by status (pending, confirmed, canceled)
};
apiInstance.getReservations(opts, (error, data, response) => {
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
 **status** | **String**| Filter reservations by status (pending, confirmed, canceled) | [optional] 

### Return type

[**[Reservation]**](Reservation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateCar"></a>
# **updateCar**
> updateCar(body, carId)

Update a car by ID

### Example
```javascript
import {CarRentalApi} from 'car_rental_api';

let apiInstance = new CarRentalApi.DefaultApi();
let body = new CarRentalApi.Car(); // Car | 
let carId = "carId_example"; // String | 

apiInstance.updateCar(body, carId, (error, data, response) => {
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
 **body** | [**Car**](Car.md)|  | 
 **carId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="updateReservation"></a>
# **updateReservation**
> updateReservation(body, reservationId)

Update a reservation by ID

### Example
```javascript
import {CarRentalApi} from 'car_rental_api';

let apiInstance = new CarRentalApi.DefaultApi();
let body = new CarRentalApi.Reservation(); // Reservation | 
let reservationId = "reservationId_example"; // String | 

apiInstance.updateReservation(body, reservationId, (error, data, response) => {
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
 **body** | [**Reservation**](Reservation.md)|  | 
 **reservationId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

