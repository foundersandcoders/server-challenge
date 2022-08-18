const test = require("node:test");
const assert = require("node:assert");
const request = require("./request.js");

test("/colour renders a <form>", async () => {
  const { status, body } = await request("/colour?hex=ff0000");

  assert.equal(status, 200);
  assert.match(
    body,
    /<form/i,
    `Expected HTML to contain a form element, but received:\n${body}`
  );
  assert_attr(
    body,
    "action",
    ["/colour", ""],
    `Action attribute should be "/colour", but received:\n${body}\nNote: action can also be empty or missing as it defaults to the same page\n`
  );
  assert_attr(
    body,
    "method",
    ["GET", "get", ""],
    `Method attribute should be "GET", but received:\n${body}\nNote: method can also be empty or missing as it defaults to GET\n`
  );
  assert.match(
    body,
    /<label/i,
    `Expected HTML to include a label element, but received:\n${body}`
  );
});

function assert_attr(body, name, [expected], msg) {
  const get_attr = new RegExp(`${name}="([^"]*)"`, "i");
  const match = body.match(get_attr);
  if (match) {
    // [0] is the full match, [1] is the bit between the quotes
    const attr = match[1];
    if (!expected.includes(attr)) {
      assert.equal(attr, expected, msg);
    }
  }
}
