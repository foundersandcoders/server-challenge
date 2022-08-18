const server = require("../src/server.js");

async function request(pathname, options = {}) {
  const app = server.listen(9876);
  const url = new URL(pathname, "http://localhost:9876");
  const response = await fetch(url, options);
  app.close();
  const body = await response.text();
  return { status: response.status, body };
}

module.exports = request;
