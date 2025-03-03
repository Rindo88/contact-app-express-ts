# Address API Spec

## Create Address
Endpoint : POST /api/contacts/:idContact/addresses

### Request Headers
- ACCESS_TOKEN : token

### Request Body: ```.json ```
```json
{
  "street" : "Jalan Apa",
  "city" : "Kota Apa",
  "province" : "Provinsi Apa",
  "country" : "Negara Apa",
  "postal_code" : "23123"
}
```

### Response Body (Success): ```.json ```
HTTP Status Code: 201 Created
```json
{
  "status": "success",
  "message": "Address created successfully",
  "data" : {
    "id" : 1,
    "street" : "Jalan Apa",
    "city" : "Kota Apa",
    "province" : "Provinsi Apa",
    "country" : "Negara Apa",
    "postal_code" : "23123"
  }
}
```

### Response Body (Failed): ```.json ```
HTTP Status Code: 400 Bad Request
```json
{
  "status": "failed",
  "message": "Validation errors",
  "errors" : [
    "postal_code is required"
  ]
}
```

## Get Address
Endpoint : GET /api/contacts/:idContact/addresses/:idAddress

### Request Headers
- ACCESS_TOKEN : token

### Response Body (Success): ```.json ```
HTTP Status Code: 200 OK
```json
{
  "status": "success",
  "message": "Address retrieved successfully",
  "data" : {
    "id" : 1,
    "street" : "Jalan Apa",
    "city" : "Kota Apa",
    "province" : "Provinsi Apa",
    "country" : "Negara Apa",
    "postal_code" : "23123"
  }
}
```

### Response Body (Failed): ```.json ```
HTTP Status Code: 404 Not Found
```json
{
  "status": "failed",
  "message": "Address not found",
  "errors" : [
    "Address is not found"
  ]
}
```

## Update Address
Endpoint : PUT /api/contacts/:idContact/addresses/:idAddress

### Request Headers
- ACCESS_TOKEN : token

### Request Body: ```.json ```
```json
{
  "street" : "Jalan Apa",
  "city" : "Kota Apa",
  "province" : "Provinsi Apa",
  "country" : "Negara Apa",
  "postal_code" : "23123"
}
```

### Response Body (Success): ```.json ```
HTTP Status Code: 200 OK
```json
{
  "status": "success",
  "message": "Address updated successfully",
  "data" : {
    "id" : 1,
    "street" : "Jalan Apa",
    "city" : "Kota Apa",
    "province" : "Provinsi Apa",
    "country" : "Negara Apa",
    "postal_code" : "23123"
  }
}
```

### Response Body (Failed): ```.json ```
HTTP Status Code: 400 Bad Request
```json
{
  "status": "failed",
  "message": "Validation errors",
  "errors" : [
    "postal_code is required"
  ]
}
```

## Remove Address
Endpoint : DELETE /api/contacts/:idContact/addresses/:idAddress

### Request Headers
- ACCESS_TOKEN : token

### Response Body (Success): ```.json ```
HTTP Status Code: 200 OK
```json
{
  "status": "success",
  "message": "Address deleted successfully",
  "data" : "OK"
}
```

### Response Body (Failed): ```.json ```
HTTP Status Code: 404 Not Found
```json
{
  "status": "failed",
  "message": "Address not found",
  "errors" : [
    "Address is not found"
  ]
}
```

## List Address
Endpoint : GET /api/contacts/:idContact/addresses

### Request Headers
- ACCESS_TOKEN : token

### Response Body (Success): ```.json ```
HTTP Status Code: 200 OK
```json
{
  "status": "success",
  "message": "Addresses retrieved successfully",
  "data" : [
    {
      "id" : 1,
      "street" : "Jalan Apa",
      "city" : "Kota Apa",
      "province" : "Provinsi Apa",
      "country" : "Negara Apa",
      "postal_code" : "23123"
    },
    {
      "id" : 2,
      "street" : "Jalan Apa",
      "city" : "Kota Apa",
      "province" : "Provinsi Apa",
      "country" : "Negara Apa",
      "postal_code" : "23123"
    }
  ]
}
```

### Response Body (Failed): ```.json ```
HTTP Status Code: 404 Not Found
```json
{
  "status": "failed",
  "message": "Contact not found",
  "errors" : [
    "Contact is not found"
  ]
}
```
