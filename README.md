# Safecourier 
This is an api which allows users to create an account, login and create an order for a parcel.

## Tech Stack <br>
- Node.js
- Express --server handling
- JSON Web Token --Authentication
- Bcrypt -- Password hashing
- mongoose --Database Management
- nodemon --automatic refreshing of the server

## Main Files: Project Structure

    |--index.js
    |--server
        |--routes
            |--parcels.js
            |--parcelsuser.js
            |--register.js
            |--login.js
        |--helpers
            |--validation.js
        |--models
            |--Parcels.js
            |--User.js

## Envorinment Variables

- PORT -- `server port number 3003`
- DB_CONNECT -- `database URL`
- SECRET_KEY -- `Secret key for verifying the token`
- NODE_ENV -- `Specifies the Server environment (development, local, production)`

## Usage
1. `clone` this repository.
2. `cd` into project root directory.
3. run `npm install` to install all dependencies.(you must have [pre-requisites](#pre-requisites)) 
4. Run `npm start` to start the server.
5. Open up `Postman` and then test out the Endpoints.

## **Pre-requisites**

- [Node Js](https://nodejs.org/en/download/)
- [Mongo DB](https://www.mongodb.com/try/download/community)

## User CRUD Operations

## SignUp User

Signs in a user into the Application.

|**Endpoint**|**Method**|**Params**|**Data-type**|
|---|---|---|---|
|/api/v1/auth/signup|POST|None|None|

 **Request Body**

```json
{
  "name": "test",
  "email": "test@gmail.com",
  "password": "password"
}

- **Request Headers**

> None

- **Success Response:**

**Status: `200 OK`**

- **Sample Content:**

```json
{
  "Message": "User created!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
  eyJpZCI6IjVmNTc2OTlmM2U4NjFjMDAxNzBhNTFhMSIsImlhdCI6MTU5OTU2NDE5MSwiZXhwIjoxNTk5NjUwNTkxfQ.
  Hkp5ruXBMYdJ4pYdQCIJbKfB5PU6hdss5lEXehtNGUc"
}
```
- **Error Response** 
```json
{
"status": 422,
"message": "an error occured"
}
```


## Login User

Logs in a single user in the application.

|**Endpoint**|**Method**|**Params**|**Data-type**|
|---|---|---|---|
|/api/v1/auth/login|None|None|

- **Request Body**

```json
{
  "username": "test",
  "password": "password"
}
```

## Home page
|**Endpoint**|**Method**|**Params**|**Data-type**|
|---|---|---|---|
|`/home`|GET|`None`|string

##Response
Hello from Toyota
    
## Create an order

Adds a question to the database.

|**Endpoint**|**Method**|**Params**|**Data-type**|
|---|---|---|---|
|`/api/v1/parcels/users`|POST|`None`|string

## Give a response
Views the order.

|**Endpoint**|**Method**|**Params**|**Data-type**|
|---|---|---|---|
|`/api/v1/parcels/users`|GET|`required`|string|

## Get all questions

Gets specific order from the database.

**Endpoint**|**Method**|**Params**|**Data-type**
---|---|---|---
`/api/v1/parcels/:name/parcels`|GET|`None`|None


**Endpoint**|**Method**|**Params**|**Data-type**
---|---|---|---
`/api/v1/parcels/users/:parcelid/destination|PATCH|`required`|string


**Endpoint**|**Method**|**Params**|**Data-type**
---|---|---|---
`/api/v1/parcels/users/:parcelid/cancel|DELETE|`required`|string

## Contributors

- Bato Alvin
