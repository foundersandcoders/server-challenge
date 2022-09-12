const server = require("../src/server.js");

async function request(pathname, options = {}) {
  const app = server.listen(9876);
  const url = new URL(pathname, "http://localhost:9876");
  const response = await fetch(url, options);
  app.close();
  const body = await response.text();
  const headers = Object.fromEntries(response.headers);
  return { status: response.status, body, headers };
}

function assert_attr(body, name, expected, msg) {
  const get_attr = new RegExp(`${name}="([^"]*)"`, "i");
  console.log({ get_attr });
  const match = body.match(get_attr);
  console.log({ match });
  if (!match && !expected.includes("")) {
    // checks if the attribute does not exist in right format, AND it is not expected that the aattribute wont be explicitly included (i.e when there is a default such as method = GET)
    console.log({ name, expected, match });
    throw new Error(msg);
  }
  if (match) {
    // [0] is the full match, [1] is the bit between the quotes in get_attr
    const attr = match[1]; // gets the attribute value without name, saved in the 2nd match array item
    if (!expected.includes(attr)) {
      // checks if attributes value is correct
      throw new Error(msg);
    }
  }
}

module.exports = { request, assert_attr };
