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

One deployment is complete, you'll see a message like this on your terminal:

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
 - [lib/routes/example.js](tree/master/lib/routes/exmaple) - the medial handlers are defined here
 - [lambdas.js](tree/master/lambdas.js) - wraps the medial handlers to return AWS lambda functions
 - [serverless.yml](serverless.yml) - Serverless configuration

Invoking a lambda from another lambda
 - [lambda-invoke.js](tree/master/lambda-invoke.js) - A lambda function that invokes another lambda function

Hapi configuration so that you can run on your local machine
  - [lib/routes/index.js](tree/master/lib/routes/index.js) - Hapi routes configuration
  - [lib/server](tree/master/lib/server) - Hapi server configuration


