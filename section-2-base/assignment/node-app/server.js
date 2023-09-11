const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>Hello from inside the very basic Node app!</h1>
  `);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
