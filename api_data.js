define({ "api": [
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "User Login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"wqerwrwe\",\n        \"userDetails\": {\n        \"userId\": \"AAwW5AL4y\",\n        \"lastName\": \"Sengar\",\n        \"firstName\": \"Rishabh\",\n        \"email\": \"someone@mail.com\",\n        \"mobile\": 2234435524,\n        \"status\":\"Makes Impossible Possible\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "to Logout.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user.(params or bodyParams or queryParams)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": {\n                \"n\": 0,\n                \"ok\": 1\n            }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersLogout"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "User SignUp.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>mobile of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User Created Successfully\",\n    \"status\": 200,\n    \"data\": {\n                \"userId\": \"DSfoJbEk8\",\n                \"firstName\": \"xyz\",\n                \"lastName\": \"abccba\",\n                \"email\": \"abc@gmail.com\",\n                \"status\": \"I am great\",\n                \"mobile\": 98078656,\n                \"createdOn\": \"2018-07-24T13:32:17.000Z\"\n            }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersSignup"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/users/forgotPwd",
    "title": "Password Reset",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"error\": false,\n   \"message\": \"Password Reset Successful\",\n   \"status\": 200,\n    \"data\": {\n               \"userId\": \"AAwW5AL4y\",\n               \"firstName\": \"vbbbbbb\",\n               \"lastName\": \"aaaaaa\",\n               \"email\": \"xxxxxx@gmail.com\",\n               \"status\": \"Makes Impossible Possible!\",\n               \"mobile\": 1234234325,\n               \"createdOn\": \"2018-07-23T04:12:35.000Z\"\n           }\n }",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "Users",
    "name": "PutApiV1UsersForgotpwd"
  },
  {
    "group": "Wines",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/wines/get/all",
    "title": "Get Wines",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user.(params or bodyParams or queryParams)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Products retrieved\",\n    \"status\": 200,\n    \"data\": {\n              [country:\"US\"\n               description:\"This tremendous 100% varietal \n                           wine hails from Oakville and was aged over \n                           three years in oak.\"\n               designation:\"Martha's Vineyard\"\n               points:96\n               price:235\n               province:\"California\"\n               region_1:\"Napa Valley\"\n               region_2:\"Napa\"\n               variety:\"Cabernet Sauvignon\"\n               winery:\"Heitz\"\n               _id:\"5b5c570aebef27f08aa80b92\"  \n              ]\n               \n            }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/wines.js",
    "groupTitle": "Wines",
    "name": "GetApiV1WinesGetAll"
  },
  {
    "group": "Wines",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/wines/get/country/:countryName",
    "title": "Country Filter",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user.(params or bodyParams or queryParams)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Products retrieved\",\n    \"status\": 200,\n    \"data\": {\n              [country:\"US\"\n               description:\"This tremendous 100% varietal \n                           wine hails from Oakville and was aged over \n                           three years in oak.\"\n               designation:\"Martha's Vineyard\"\n               points:96\n               price:235\n               province:\"California\"\n               region_1:\"Napa Valley\"\n               region_2:\"Napa\"\n               variety:\"Cabernet Sauvignon\"\n               winery:\"Heitz\"\n               _id:\"5b5c570aebef27f08aa80b92\"  \n              ]\n               \n            }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/wines.js",
    "groupTitle": "Wines",
    "name": "GetApiV1WinesGetCountryCountryname"
  },
  {
    "group": "Wines",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/wines/get/province/:provinceName",
    "title": "Province Filter",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user.(params or bodyParams or queryParams)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"error\": false,\n   \"message\": \"Password Reset Successful\",\n   \"status\": 200,\n    \"data\": {\n               \"userId\": \"AAwW5AL4y\",\n               \"firstName\": \"vbbbbbb\",\n               \"lastName\": \"aaaaaa\",\n               \"email\": \"xxxxxx@gmail.com\",\n               \"status\": \"Makes Impossible Possible!\",\n               \"mobile\": 1234234325,\n               \"createdOn\": \"2018-07-23T04:12:35.000Z\"\n           }\n }",
          "type": "object"
        }
      ]
    },
    "filename": "routes/wines.js",
    "groupTitle": "Wines",
    "name": "GetApiV1WinesGetProvinceProvincename"
  },
  {
    "group": "Wines",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/wines/get/region_1/:regionName",
    "title": "Region1 Filter",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user.(params or bodyParams or queryParams)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Products retrieved\",\n    \"status\": 200,\n    \"data\": {\n              [country:\"US\"\n               description:\"This tremendous 100% varietal \n                           wine hails from Oakville and was aged over \n                           three years in oak.\"\n               designation:\"Martha's Vineyard\"\n               points:96\n               price:235\n               province:\"California\"\n               region_1:\"Napa Valley\"\n               region_2:\"Napa\"\n               variety:\"Cabernet Sauvignon\"\n               winery:\"Heitz\"\n               _id:\"5b5c570aebef27f08aa80b92\"  \n              ]\n               \n            }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/wines.js",
    "groupTitle": "Wines",
    "name": "GetApiV1WinesGetRegion_1Regionname"
  },
  {
    "group": "Wines",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/wines/get/region_2/:regionName",
    "title": "Region2 Filter",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user.(params or bodyParams or queryParams)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Products retrieved\",\n    \"status\": 200,\n    \"data\": {\n              [country:\"US\"\n               description:\"This tremendous 100% varietal \n                           wine hails from Oakville and was aged over \n                           three years in oak.\"\n               designation:\"Martha's Vineyard\"\n               points:96\n               price:235\n               province:\"California\"\n               region_1:\"Napa Valley\"\n               region_2:\"Napa\"\n               variety:\"Cabernet Sauvignon\"\n               winery:\"Heitz\"\n               _id:\"5b5c570aebef27f08aa80b92\"  \n              ]\n               \n            }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/wines.js",
    "groupTitle": "Wines",
    "name": "GetApiV1WinesGetRegion_2Regionname"
  },
  {
    "group": "Wines",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/wines/get/variety/:varietyName",
    "title": "Variety Filter",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user.(params or bodyParams or queryParams)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Products retrieved\",\n    \"status\": 200,\n    \"data\": {\n              [country:\"US\"\n               description:\"This tremendous 100% varietal \n                           wine hails from Oakville and was aged over \n                           three years in oak.\"\n               designation:\"Martha's Vineyard\"\n               points:96\n               price:235\n               province:\"California\"\n               region_1:\"Napa Valley\"\n               region_2:\"Napa\"\n               variety:\"Cabernet Sauvignon\"\n               winery:\"Heitz\"\n               _id:\"5b5c570aebef27f08aa80b92\"  \n              ]\n               \n            }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/wines.js",
    "groupTitle": "Wines",
    "name": "GetApiV1WinesGetVarietyVarietyname"
  }
] });
