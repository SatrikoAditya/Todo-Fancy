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

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "data not found" }`
  
  OR

  * **Code:** 400 SequelizeValidationError <br />
    **Content:** `{ error : "Title is required" }`


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

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "data not found" }`
  
  OR

  * **Code:** 400 SequelizeValidationError <br />
    **Content:** `{ error : "Title is required" }`