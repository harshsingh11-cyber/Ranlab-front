## Purpose

The purpose of RannLab Publication is to provide a streamlined platform for publishers to upload their raw files, add author details, and generate PDFs for distribution. It simplifies the publishing process and ensures consistent formatting and inclusion of author information.

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
