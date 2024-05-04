require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
// app.use(express.json());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/api/shorturl', bodyParser.json());

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use("/public", express.static(`${process.cwd()}/public`));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

// Your first API endpoint
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

//LEFT: Test post with postman
app.post('/api/shorturl', function (req, res) {
  console.log("api/shorturl fired");
  console.log(req.body);
  // console.log(req.query);
  // let url = req.query.url;
  // console.log(url);
  // res.json({ requestBody: req.body });
  res.json({ test: "test1" });
});

//JUST FOR TESTING
// app.get('/api/shorturl', function(req, res, next) {
//   console.log('api/shorturl fired');
//   res.json({ test: 'test1' });
// }
// );

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
