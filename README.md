# fodp_vmp
Friends of Discovery Park - Vegetation Management Platform

## Running the Frontend Vue.js client
Run `yarn install` within the _new_ folder
The server should install the necessary dependencies 
Run `yarn run serve` within the _new_ folder
This will launch the server on localhost:8080
You can now look at the application by visiting http://localhost:8080 on a browser

## Running the Backend server
Run `npm install` within the _server_ folder
The server should install the necessary dependencies
Run `npm run start` to start the server on port 5000
This will launch the server on localhost:5000
Port of the server can be changed by editing the `.env / env.js` files
Requests can be made to the API from the frontend or using Postman or any other API client
These are the following Endpoints:

**User Routes**
+ /api/v1/signup | __POST: creates an user__
_Sample Body:_
```
{
	"email": "email@email.com",
	"first_name": "John",
	"last_name": "Doe",
	"password": "Extra_S1r0ng_passw0rD"
}
```
+ /api/v1/signin | __POST: login for admin/user__
_Sample Body:_
```
{
	"email": "email@email.com",
	"password": "Extra_S1r0ng_passw0rD"
}
```

**Admin Routes**
+ /api/v1/admin/signup | __POST: create admin__
+ /api/v1/user/:id/admin | __POST: upgrade the user to admin status__
+ /api/vi/admin/users | __GET: get a list of users__
+ /api/vi/admin/table/:tableName | __GET: retrieve a specific data table__
