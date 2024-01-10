const express = require("express");
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cors = require("cors");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome chatbot HVPP Sports server!");
});

require("./routes/chatbot")(app);

app.listen(port, () => {
  console.log(`Server is running with port: ${port}!`);
});
