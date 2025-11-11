
## About

An **API (Application Programming Interface)** is a set of rules and protocols that allows different software applications to communicate with each other. It defines the methods and data formats that applications can use to request and exchange information.


### Key Concepts

> [!NOTE]
> - **Endpoints**: Specific URLs where API requests are sent
> - **HTTP Methods**: GET, POST, PUT, DELETE, etc.
> - **Request/Response**: Client sends a request, server returns a response
> - **Data Format**: Typically JSON or XML

## REQUEST :  ##
  : When a device asks for a " resourse" (data, image, html page, authentication token, etc)
  : Requires a connection to the internet somehow

## RESPONSE :  ##
  : The reply  to the request
  : could contain the resource (HTML, JSON, data, etc..)
  : Could contain a response saying the client isn't authorized to receive the resource

<<<<<<< HEAD
## JSON : ##
    - JSON (JavaScript Object Notation) is a lightweight, text-based format for structuring data. It is language-independent and commonly used for API request and response bodies.
    - Content type: application/json

Syntax basics:
    - Object: { "key": value }
    - Array: [ value1, value2 ]
    - Allowed values: string, number, boolean, null, object, array
    - Keys must be double-quoted strings; no comments or trailing commas

Example:
    ```json
    {
        "userId": 42,
        "name": "Ada Lovelace",
        "isActive": true,
        "roles": ["admin", "editor"],
        "profile": {
            "email": "ada@example.com",
            "joinedAt": "2024-09-01T12:00:00Z"
        }
    }
    ```

## URL & ENDPOINTS ##

### URL & Endpoints

- **Base URL**: The root URL for the API, e.g., `https://api.example.com/v1/`
- **Resource Endpoints**:
    - **Users**: `/users` - Manage user data (GET, POST, PUT, DELETE)
    - **Posts**: `/posts` - Manage blog posts (GET, POST, PUT, DELETE)
    - **Comments**: `/comments` - Manage comments on posts (GET, POST, DELETE)
- **Query Parameters**: Additional parameters that can be added to the endpoint to filter or modify the request, e.g., `?sort=asc&limit=10`

- Example Endpoint Usage:
        - **GET** `/users` - Retrieve a list of users
        - **POST** `/posts` - Create a new blog post

- **Authentication**: Many APIs require authentication, typically using tokens passed in headers.

- **Versioning**: APIs may have different versions, indicated in the URL, e.g., `/v1/users`.

- **Error Handling**: APIs should return appropriate HTTP status codes and error messages for failed requests.


=======
<img width="853" height="359" alt="images" src="https://github.com/user-attachments/assets/88da559b-1c3a-4144-966d-225fb885caa2" />
>>>>>>> 0eaa19592667b487e9fd82e8a3d2141ce4fe36e5

### Common Uses

- Retrieving data from a server
- Sending data to be processed or stored
- Integrating third-party services
- Building microservices architecture
