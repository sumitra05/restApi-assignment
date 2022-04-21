// getting data from eexpress
const express = require("express");

// calling express
const app = express();


// invoking logger
app.use(allBooks);


// if method + route === express will empty from stack and print everything which is in stack
app.get("/books", (req, res) => {
  return res.send({ route: "/books" });
});

// if method + route === express will empty from stack and print everything which is in stack
app.get("/studentsBook", (req, res) => {
    return res.send({ route: "/studentsBook" });
});



function allBooks(req, res, next) {
  console.log("Fetching all books");
  next();
}

app.listen(5000, () => {
  console.log("listening on port 5000");
});