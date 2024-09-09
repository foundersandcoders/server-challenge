const server = require("./server.js");

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));



server.get("/", (req, res) => {
  res.send(`<h1>Hello Express</h1>`);
});