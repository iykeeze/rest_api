User Management API
This is a simple Express.js and MongoDB-based API for managing users. The API supports creating, retrieving, updating, and deleting user records.

Prerequisites
Node.js
MongoDB
Getting Started
Installation
Clone the repository:

sh
Copy code
git clone <repository_url>
cd <repository_name>
Install dependencies:

sh
Copy code
npm install
Create a .env file in the root directory and add your MongoDB connection string:

env
Copy code
MONGODB_CONNECTION_STRING=your_mongodb_connection_string
Running the Application
Start the server:

sh
Copy code
npm start
The server will be running on http://localhost:3000.

API Endpoints
Get All Users
URL: /user
Method: GET
Description: Retrieves all users.
Response: An array of user objects.
Add a New User
URL: /add_user
Method: POST
Description: Adds a new user.
Request Body:
json
Copy code
{
"name": "User Name",
"email": "user@example.com",
"password": "userpassword"
}
Response: The created user object.
Update a User
URL: /edit_user/:userid
Method: PUT
Description: Updates a user's name by their ID.
Request Params:
userid: The ID of the user to update.
Request Body:
json
Copy code
{
"name": "New User Name"
}
Response: The updated user object.
Delete a User
URL: /remove/:userid
Method: DELETE
Description: Deletes a user by their ID.
Request Params:
userid: The ID of the user to delete.
Response: A success message.
Middleware
express.json(): Parses incoming JSON requests and puts the parsed data in req.body.
Database Connection
The database connection is established using Mongoose. The connection string is retrieved from the .env file.

Error Handling
Each route includes basic error handling to send a response indicating if an error occurred during the operation.

License
This project is licensed under the MIT License.
