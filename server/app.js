const express = require("express");
// const path = require("path");
const app = express();
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

// Pdf Generator packages
const pdf = require("html-pdf");
const pdfTemplate = require("./documents");

const port = process.env.PORT || 4000;

app.use(cors());
app.use(logger("dev"));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const job = require("./job");

// Pdf Generation POST
app.post("/create-pdf", (req, res) => {
  const pdfFile = Date.now();
  pdf
    .create(pdfTemplate(req.body), {})
    .toFile(`./public/${pdfFile}.pdf`, (err) => {
      if (err) res.send(Promise.reject());
    });
  res.send(`localhost:4000/${pdfFile}.pdf`);
});

job();

app.listen(port, () => console.log(`server running on port ${port}`));
