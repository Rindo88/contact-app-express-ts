# Contact API Spec

## Create Contact
Endpoint : POST /api/contacts

### Request Headers
- ACCESS_TOKEN : token

### Request Body: ```.json ```
```json
{
  "first_name" : "naufal",
  "last_name" : "ahmad",
  "email" : "naufal@gmail.com",
  "phone" : "08123456789"
}
```

### Response Body (Success): ```.json ```
HTTP Status Code: 201 Created
```json
{
  "status": "success",
  "message": "Contact created successfully",
  "data" : {
    "id" : 1,
    "first_name" : "naufal",
    "last_name" : "ahmad",
    "email" : "naufal@gmail.com",
    "phone" : "08123456789"
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
    "first_name must not be blank"
  ]
}
```

## Get Contact
Endpoint : GET /api/contacts/:id

### Request Headers
- ACCESS_TOKEN : token

### Response Body (Success): ```.json ```
HTTP Status Code: 200 OK
```json
{
  "status": "success",
  "message": "Contact retrieved successfully",
  "data" : {
    "id" : 1,
    "first_name" : "naufal",
    "last_name" : "ahmad",
    "email" : "naufal@gmail.com",
    "phone" : "08123456789"
  }
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

## Update Contact
Endpoint : PUT /api/contacts/:id

### Request Headers
- ACCESS_TOKEN : token

### Request Body: ```.json ```
```json
{
  "first_name" : "naufal",
  "last_name" : "ahmad",
  "email" : "naufal@gmail.com",
  "phone" : "08123456789"
}
```

### Response Body (Success): ```.json ```
HTTP Status Code: 200 OK
```json
{
  "status": "success",
  "message": "Contact updated successfully",
  "data" : {
    "id" : 1,
    "first_name" : "naufal",
    "last_name" : "ahmad",
    "email" : "naufal@gmail.com",
    "phone" : "08123456789"
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
    "first_name must not be blank"
  ]
}
```

## Remove Contact
Endpoint : DELETE /api/contacts/:id

### Request Headers
- ACCESS_TOKEN : token

### Response Body (Success): ```.json ```
HTTP Status Code: 200 OK
```json
{
  "status": "success",
  "message": "Contact deleted successfully",
  "data" : "OK"
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

## Search Contact
Endpoint : GET /api/contacts

### Query Parameters
- name : string, contact first name or contact last name, optional
- phone : string, contact phone, optional
- email : string, contact email, optional
- page : number, default 1
- size : number, default 10

### Request Headers
- ACCESS_TOKEN : token

### Response Body (Success): ```.json ```
HTTP Status Code: 200 OK
```json
{
  "status": "success",
  "message": "Contacts retrieved successfully",
  "data" : [
    {
      "id" : 1,
      "first_name" : "naufal",
      "last_name" : "ahmad",
      "email" : "naufal@gmail.com",
      "phone" : "08123456789"
    },
    {
      "id" : 2,
      "first_name" : "naufal",
      "last_name" : "ahmad",
      "email" : "naufal@gmail.com",
      "phone" : "08123456789"
    }
  ],
  "paging" : {
    "current_page" : 1,
    "total_page" : 10,
    "size" : 10
  }
}
```

### Response Body (Failed): ```.json ```
HTTP Status Code: 401 Unauthorized
```json
{
  "status": "failed",
  "message": "Unauthorized",
  "errors" : [
    "Unauthorized"
  ]
}
```