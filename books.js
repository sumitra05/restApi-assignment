const express = require("express");

const app = express();

app.use(singleBook);

app.get("/book/GameOfThrones", (req, res) => {
  return res.send({ route: "/book/GameOfThrones", bookName: req.name });
});


app.get("/book/HarryPotter", (req, res) => {
  return res.send({ route: "/book/HarryPotter", bookName: req.name });
});


app.get("/book", (req, res) => {
  return res.send({ route: "/book", bookName: req.name });
});


function singleBook(req, res, next) {
  if (req.path === "/book/GameOfThrones") {
    req.name = "GameOfThrones";
  } else if (req.path === "/book/HarryPotter") {
    req.name = "HarryPotter";
  } else {
    req.name = "You can try (/book/HarryPotter) ";
  }
  next();
}

app.listen(6200, () => {
  console.log("listening on port 6200");
});