**FANCY TODO**
----
  'aplikasi todo'

* **URL**

  /todos

* **Method:**

  `POST`
  
*  **URL Params**

   'none'

* **Data Params**

  ```json
    {
        "title":"string",
        "description":"string",
        "due_date":"date"
    }
  ```

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 201 <br />
    **Content:** 
    ```json
    {
        "data": [
            {
                "id": "integer",
                "title": "string",
                "description": "string",
                "status": "boolean",
                "due_date": "timestamp",
                "createdAt": "timestamp",
                "updatedAt": "timestamp"
            }
        ]
    }
  ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 Internal server error <br />
    **Content:** `{ error : "Internal server error" }`
  
  OR

  * **Code:** 400 SequelizeValidationError <br />
    **Content:** `{ error : "Title is required" }`




**FANCY TODO**
----
  'aplikasi todo'

* **URL**

  /todos

* **Method:**

  `GET`
  
*  **URL Params**

   'none'

* **Data Params**

  'none'

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** 
    ```json
    [
      {
          "data": [
              {
                  "id": "integer",
                  "title": "string",
                  "description": "string",
                  "status": "boolean",
                  "due_date": "timestamp",
                  "createdAt": "timestamp",
                  "updatedAt": "timestamp"
              }
          ]
      }
    ]
    
  ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 Internal server error <br />
    **Content:** `{ error : "Internal server error" }`


**FANCY TODO**
----
  'aplikasi todo'

* **URL**

  /todos

* **Method:**

  `GET`
  
*  **URL Params**

  **Required:**
 
  `id=[integer]`

* **Data Params**

  'none'

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
        "data": [
            {
                "id": "integer",
                "title": "string",
                "description": "string",
                "status": "boolean",
                "due_date": "timestamp",
                "createdAt": "timestamp",
                "updatedAt": "timestamp"
            }
        ]
    }
  ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 Internal server error <br />
    **Content:** `{ error : "Internal server error" }`


**FANCY TODO**
----
  'aplikasi todo'

* **URL**

  /todos

* **Method:**

  `PUT`
  
*  **URL Params**

  **Required:**
 
  `id=[integer]`

* **Data Params**

    ```json
    {
        "title":"string",
        "description":"string",
        "due_date":"date"
    }
  ```

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
        "msg": "success edit data",
        "data": [
            {
                "id": "integer",
                "title": "string",
                "description": "string",
                "status": "boolean",
                "due_date": "timestamp",
                "createdAt": "timestamp",
                "updatedAt": "timestamp"
            }
        ]
    }
  ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 Internal server error <br />
    **Content:** `{ error : "Internal server error" }`

  OR

  * **Code:** 404 DATA_NOT_FOUND <br />
    **Content:** `{ error : "Data not found" }`
  
  OR

  * **Code:** 400 SequelizeValidationError <br />
    **Content:** `{ error : "Title is required" }`
    
  OR

  * **Code:** 403 AUTHORIZATION_FAILED <br />
    **Content:** `{ error : "Access Forbidden" }`


**FANCY TODO**
----
  'aplikasi todo'

* **URL**

  /todos

* **Method:**

  `DELETE`
  
*  **URL Params**

  **Required:**
 
  `id=[integer]`

* **Data Params**

  'none'

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
        "msg": "success delete data",
        "data": [
            {
                "id": "integer",
                "title": "string",
                "description": "string",
                "status": "boolean",
                "due_date": "timestamp",
                "createdAt": "timestamp",
                "updatedAt": "timestamp"
            }
        ]
    }
  ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 Internal server error <br />
    **Content:** `{ error : "Internal server error" }`

  OR

  * **Code:** 404 DATA_NOT_FOUND <br />
    **Content:** `{ error : "Data not found" }`


**FANCY TODO**
----
  'aplikasi todo'

* **URL**

  /register

* **Method:**

  `POST`
  
*  **URL Params**
  
  'none'

* **Data Params**

  ```json
    {
        "email":"string",
        "password":"string"
    }
  ```

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** 
    ```json
      {
        "msg": "register user success",
        "id": "integer",
        "email": "integer"
      }
  ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 Internal server error <br />
    **Content:** `{ error : "Internal server error" }`

  OR

  * **Code:** 400 SequelizeValidationError <br />
    **Content:** `{ error : "Email is required" }`


**FANCY TODO**
----
  'aplikasi todo'

* **URL**

  /login

* **Method:**

  `GET`
  
*  **URL Params**
  
  'none'

* **Data Params**

  ```json
    {
        "email":"string",
        "password":"string"
    }
  ```

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** 
    ```json
      {
          "token": "string"
      }
  ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 Internal server error <br />
    **Content:** `{ error : "Internal server error" }`

  OR

  * **Code:** 400 LOGIN_FAILED <br />
    **Content:** `{ error : "Invalid email or password" }`



**FANCY TODO**
----
  'aplikasi todo'

* **URL**

  /activity

* **Method:**

  `GET`
  
*  **URL Params**
  
  'none'

* **Data Params**

  'none'

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** 
    ```json
      {
          "status": "integer",
          "statusText": "string",
          "headers": {
            "server": "string",
            "connection": "string",
            "x-powered-by": "string",
            "access-control-allow-origin": "string",
            "access-control-allow-headers": "string",
            "content-type": "string",
            "content-length": "integer",
            "etag": "string",
            "date": "string",
            "via": "string"
      },
  ```
  
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 Internal server error <br />
    **Content:** `{ error : "Internal server error" }`
  
