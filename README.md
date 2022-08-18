# Server challenge

Practice using Express to create an HTTP server with a variety of different features.

## Setup

Make sure you have Git and Node (v18) installed.

1. Clone this repo and `cd` into the directory
1. Run `npm install` to install all the dependencies
1. Run `npm run dev` to start the server.
   This uses the `nodemon` library to auto-restart the server when you save changes.

## Checking your work

Each challenge has associated unit tests. You can either run all the tests with `npm test`, or each individual challenge's tests with `npm run test:1`, `npm run test:2` etc.

Make sure you read test failures carefully—the output can be noisy but the error message should provide useful information to help you. For example:

```
not ok 1 - Home route returns hello world
  ---
  duration_ms: 0.022335834
  failureType: 'testCodeFailure'
  error: |-
    Expected HTML to include <h1>Hello Express</h1>, but received:
    <h1>Hello world</h1>
```

## Challenge 1

Create a new route for the homepage at `GET /`. It should return an HTML body including a `<h1>Hello Express</h1>`.

