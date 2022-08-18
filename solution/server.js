const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send(`<h1>Hello Express</h1>`);
});

server.get("/colour", (req, res) => {
  const hex = req.query.hex || "ffffff"; // defaults to white
  const html = `
    <style>
      body {
        background-color: #${hex};
      }
    </style>
    <form>
      <label for="hex">Enter hex</label>
      <input name="hex" value="${hex}">
    </form>
  `;
  res.send(html);
});

module.exports = server;
