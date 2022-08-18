const test = require("node:test");
const assert = require("node:assert");
const server = require("../src/server.js");

test("/ returns hello world", async () => {
  const { status, body } = await request("/");

  assert.equal(status, 200);
  assert.match(body, /hello world/i);
});

async function request(pathname, options = {}) {
  const app = server.listen(9876);
  const url = new URL(pathname, "http://localhost:9876");
  const response = await fetch(url, options);
  app.close();
  const body = await response.text();
  return { status: response.status, body };
}
