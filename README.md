## Purpose

The purpose of RannLab Publication is to provide a streamlined platform for publishers to upload their raw files, add author details, and generate PDFs for distribution. It simplifies the publishing process and ensures consistent formatting and inclusion of author information.

## Live and for login

 Live : `https://thunderous-monstera-bfa708.netlify.app/`
```json
{
  "name": "xyz",
  "email": "has@gmail.com",
  "password": "harqwe"
}

```
## Installation

To install and run RannLab Publication on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/your/repo.git`
2. Navigate to the project directory: `cd rannlab-publication`
3. Install dependencies: `npm install`
4. Configure the database connection in the .env file.
5. Run the application: `npm start`
6. Access the application in your browser at `http://localhost:3000`

## API Endpoints

RannLab Publication provides the following API endpoints:

- **POST /register** - Register a new user. Requires the following parameters: `name`, `email`, `photo` (base64 string), `file` (raw file upload), `password`.
- **POST /login** - Authenticate a user and generate a JWT token. Requires the following parameters: `email`, `password`.
- **POST /upload** - Upload a raw file with author details. Requires authentication and accepts the following parameters: `file` (raw file upload), `authorDetails` (JSON object containing author details).
- **GET /download/:id** - Download the PDF file with the specified ID.
- **GET /authors** - Retrieve a list of all authors.

## Usage Examples

### Registration

To register a new user, make a `POST` request to `/register` with the following JSON payload:

```json
{
  "name": "xyz",
  "email": "has@gmail.com",
  "photo": "base64 string",
  "file": "raw file",
  "password": "harqwe"
}
```

## Note 
Ensure that you have a stable internet connection to access the MongoDB server.
Check the connection string or configuration settings for any errors or typos.
Verify that the MongoDB server's IP address and port number are correct.
Check for any firewall or security restrictions that may be blocking the connection to the MongoDB server.

## Screenshot
![Screenshot (600)](https://github.com/harshsingh11-cyber/Ranlab-front/assets/65847214/cae5cb25-2f68-436a-812c-fc6777e0fa23)
![Screenshot (601)](https://github.com/harshsingh11-cyber/Ranlab-front/assets/65847214/7b7f825b-da0e-45a3-9b4e-276594b85b80)
![Screenshot (603)](https://github.com/harshsingh11-cyber/Ranlab-front/assets/65847214/0c41e8e7-8409-4c7c-8d3d-29437ad8d6fa)














