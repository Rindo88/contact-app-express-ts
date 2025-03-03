# USER API SPEC

## Register User
Endpoint : POST /api/users/

### Request Headers
- Content-Type: application/json

### Request Body: ```.json ```
```json 
  {
    "username": "ahmad",
    "name": "naufal ahmad",
    "password": "pp1234" 
  }
```

### Response Body (Success): ```.json ```
HTTP Status Code: 201 Created
```json 
  {
    "status": "success",
    "message": "User registered successfully",
    "data": {
      "username": "ahmad",
      "name": "naufal ahmad"
    }
  }
```

### Response Body (Failed): ```.json ```
HTTP Status Code: 400 Bad Request
```json 
  {
    "status": "failed",
    "message": "username or password is required",
    "errors": [
      "username or password missing"
    ]
  }
```

## Login User
Endpoint : POST /api/users/login/

### Request Body: ```.json ```
```json 
  {
    "username": "ahmad",
    "password": "pp1234" 
  }
```

### Response Body (Success): ```.json ```
HTTP Status Code: 200 OK
```json 
  {
    "status": "success",
    "message": "Login successful",
    "data": {
      "username": "ahmad",
      "token": "user_token"
    }
  }
```

### Response Body (Failed): ```.json ```
HTTP Status Code: 401 Unauthorized
```json 
  {
    "status": "failed",
    "message": "invalid username or password",
    "errors": [
      "invalid username or password"
    ]
  }
```

## Get User
Endpoint: GET /api/user/current

### Request Headers: 
- ACCESS_TOKEN : token

### Response Body (Success): ``` .json ```
HTTP Status Code: 200 OK
```json
{
  "status": "success",
  "message": "successfully get user data",
  "data": {
    "username": "ahmad",
    "name": "naufal ahmad"
  }
}
```

### Response Body (Failed): ``` .json ```
HTTP Status Code: 401 Unauthorized
```json
{
  "status": "failed",
  "message": "access denied unauthorize",
  "errors": [
    "Unauthorize"
  ]
}
```

## Update User
Endpoint: PATCH /api/user/current

### Request Headers: 
- ACCESS_TOKEN : token

### Request Body: ```.json```
```json
{
  "username": "new username",
  "name": "new name",
  "password": "new password"
}
```

### Response Body (Success): ``` .json ```
HTTP Status Code: 200 OK
```json
{
  "status": "success",
  "message": "successfully update user data",
  "data": {
    "username": "new username",
    "name": "new name"
  }
}
```

### Response Body (Failed): ``` .json ```
HTTP Status Code: 401 Unauthorized
```json
{
  "status": "failed",
  "message": "access denied unauthorize",
  "errors": [
    "Unauthorize"
  ]
}
```

## Logout User
Endpoint: DELETE /api/user/current/

### Request Headers: 
- ACCESS_TOKEN :  token

### Response Body (Success): ```.json```
HTTP Status Code: 200 OK
```json
{
  "status": "success",
  "message": "successfully delete session user data"
}
```

### Response Body (Failed): ``` .json ```
HTTP Status Code: 401 Unauthorized
```json
{
  "status": "failed",
  "message": "access denied unauthorize",
  "errors": [
    "Unauthorize"
  ]
}
```

