const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let users = [];

app.post("/api/users", (req, res) => {
  const { name, email } = req.body;
  const id = users.length + 1;
  const user = { id, name, email };
  users.push(user);

  res.status(201).json(user);
});

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
