const express = require("express");

const server = express();

const bodyParser = express.urlencoded({ extended: false });

server.get("/", (request, response) => {
  response.send(`<!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Home</title>
      </head>
      <body>
        <h1>Hello Express</h1>
      </body>
    </html>`);
});

server.get("/colour", (request, response) => {
  const colour = request.query.hex ? `${request.query.hex}` : "ffffff";
  response.send(`<!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Home</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body style="background-color:#${colour}">
        <h1>Colours</h1>
        <form action="/colour" >
          <label for="hex">Choose Colour</label>
          <input placeholder="ENTER HEX VALUE"name="hex" value="">
        </form>
      </body>
    </html>`);
});

let cheeseRatings = [];

server.get("/cheese", (request, response) => {
  // const htmlCheeseList = [];
  // for (const item of cheeseRatings) {
  //   htmlCheeseList.push(
  //     `<li>${Object.keys(item)[0]}: ${Object.values(item)[0]}</li>`
  //   );
  // }

  // const htmlCheeseList = [];
  // for (const item of cheeseRatings) {
  //   htmlCheeseList.push(`<li>${item.name}: ${item.rating}</li>`);
  // }

  // const htmlCheeseList = cheeseRatings.map((item) => {
  //   return `<li>${item.name}: ${item.rating}</li>`;
  // });

  const htmlCheeseList = cheeseRatings
    .map((item) => {
      return `<li>${item.name}: ${item.rating}</li>`;
    })
    .join();

  response.send(`<!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Home</title>
    </head>
    <body>
      <h1>Cheese</h1>
      <form action="/cheese" method="POST">
      <p>
        <label for="name">Name</label>
        <input placeholder="ENTER cheese name" name="name" value="" required>
      </p>
      <p>
        <label for="rating">Rating</label>
        <input name="rating" type="range" min="1" max="5">
      <p>
      <button type="submit">Submit Rating</button>
      </form>
      <ul>
      ${/* htmlCheeseList.join()*/ ""}
      ${htmlCheeseList}

      </ul>
    </body>
  </html>`);
});

server.post("/cheese", bodyParser, (request, response) => {
  const name = request.body.name;
  const rating = request.body.rating;
  // cheeseRatings.push({ [name]: rating });
  cheeseRatings.push({ name, rating });
  console.log({ cheeseRatings });
  response.redirect("/cheese");
});

module.exports = server;
