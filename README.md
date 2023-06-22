# Contact API

This repository contains a Contact API project built with Node.js, Express.js, and MongoDB. The API provides functionality for managing contacts, including creating, reading, updating, and deleting contact records.

## Features

- User authentication: Register and login functionality for secure access to the API.
- CRUD operations: Perform Create, Read, Update, and Delete operations on contacts.
- Search functionality: Find contacts by name or email.
- Pagination: Retrieve contacts in paginated format.
- Error handling: Comprehensive error handling with descriptive error messages.
- Input validation: Validate and sanitize user input to ensure data integrity.
- Data persistence: Store contact data in a MongoDB database.
- Token-based authentication: Secure API endpoints using JWT (JSON Web Tokens).
- Role-based access control: Differentiate between admin and regular user roles with specific privileges.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Udayan-Singh/Contact-API.git

2. Install the dependencies: 
   ```bash
   cd Contact-API
   npm install

3. Configure the environment variables:

  - Rename the .env.example file to .env.
  - Update the .env file with your MongoDB connection URL and a secret key for JWT token generation.

4. Start the server: 
   ```bash
   npm run dev

