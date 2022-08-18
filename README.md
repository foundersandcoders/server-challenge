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

## Challenge 2

Create a new route at `GET /colour`. It should check the URL's search parameters for a `hex` property. If present the returned HTML page should have its `<body>` element's background-color set to the `hex` value. E.g. this request `GET /colour?hex=ff0000` should result in an HTML page with a red background. If `hex` is not present the background should be white.

**Hint**: you can dynamically create the HTML response body using a template literal string—and HTML pages can include inline `<style>` tags...

## Challenge 3

Edit your `GET /colour` route to include a form in the HTML response. This form should include an input for the user to type in a hex code. When the form is submitted a `GET` request will be sent to the same route, which will change the background of the page to whatever the user entered.
