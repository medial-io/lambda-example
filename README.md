# An example to showcase Medial Lambda

This example assumes that you have Serverless [installed](https://www.serverless.com/framework/docs/getting-started/) and [configured](https://www.serverless.com/framework/docs/providers/aws/cli-reference/config-credentials/)


## Install
```
npm ci
```

## Deploy to AWS
```
sls deploy --region us-east-1     //or whichever region you'd like
```

Once deployment is complete, you'll see a message like this on your terminal:

```
.....

endpoints:
  GET - https://abc123.execute-api.us-east-1.amazonaws.com/dev/example
  POST - https://abc123.execute-api.us-east-1.amazonaws.com/dev/example
functions:
  get: medial-example-dev-get
  post: medial-example-dev-post
  invokeLambda: medial-example-dev-invokeLambda
layers:
  None

.......
  ```

Use the endpoints to exlpore your new lambda backed http services

### **GET** https://{server}.execute-api.{region}.amazonaws.com/dev/example
- The GET endpoint sets a header called `my-header` with a value of `value1` and also sets two cookies:
  - `cookieKey` with value `cookieValue`
  - `cookieKey1` with value `cookieValue` (HttpOnly cookie)

*Returns*
```
{"hello": "world"}
```

### **GET** https://{server}.execute-api.{region}.amazonaws.com/dev/example?error=true
This will force a 404 error 

*Returns*
 ```
 {
    "statusCode": 404,
    "error": "Not Found",
    "message": "boo boo"
}
```

### **GET** https://{server}.execute-api.{region}.amazonaws.com/dev/example?a=1

*Returns*
```
 {
    "hello": "world",
    "a": [
        "1"
    ]
}
```

### **GET** https://{server}.execute-api.{region}.amazonaws.com/dev/example?a=1&a=2

*Returns* 
```
{
    "hello": "world",
    "a": [
        "1",
        "2"
    ]
}
```

### **GET** https://{server}.execute-api.{region}.amazonaws.com/dev/example?b=1

This will throw a 400 error

*Returns* 
```
{
    "statusCode": 400,
    "error": "Bad Request",
    "message": "\"b\" is not allowed",
    "validation": {
        "source": "query",
        "keys": [
            "b"
        ]
    }
}
```

### **POST** https://{server}.execute-api.{region}.amazonaws.com/dev/example

The payload takes two attributes:
 - a - **required** - A number
 - c - **optional** - Anything

 For example: This payload:
 ```
 {
  "a": "1",
  "c": {
    "d": "hello"
  }
}
 ```

*Returns* 
```
{
  "a": "1",
  "c": {
    "d": "hello"
  }
}
```

## Run on local machine
```npm start```

This will start a hapi server and you'll see a message like this on your terminal:

```
....

Server running on http://localhost:8080
Documentation at: http://localhost:8080/documentation
```

The documentation url will display the Swagger documentation. Try out the endpoints

## Invoking a lambda from another lamda
```
sls invoke local --function invokeLambda
```

This will invoke the lambda locally

## Explore
 - [lib/routes/example.js](lib/routes/example.js) - the medial handlers are defined here
 - [lambdas.js](lambdas.js) - wraps the medial handlers to return AWS lambda functions
 - [serverless.yml](serverless.yml) - Serverless configuration

Invoking a lambda from another lambda
 - [lib/lambda-invoke.js](lib/lambda-invoke.js) - A lambda function that invokes another lambda function

Hapi configuration so that you can run on your local machine
  - [lib/routes/index.js](lib/routes/index.js) - Hapi routes configuration
  - [lib/server](lib/server) - Hapi server configuration


