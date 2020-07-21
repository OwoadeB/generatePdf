const express = require("express");
// const path = require("path");
const app = express();
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const ejs = require("ejs");

// Pdf Generator packages
const pdf = require("html-pdf");
const pdfTemplate = require("./template");

const port = process.env.PORT || 4000;

app.use(cors());
app.use(logger("dev"));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Pdf Generation POST
app.post("/download", (req, res) => {
  pdf.create(pdfTemplate(req.body)).toStream((err, stream) => {
    if (err) console.log(err);
    res.writeHead(200, {
      "Content-Type": "application/pdf",
      "Content-disposition": "attachment; filename=file.pdf",
    });
    stream.pipe(res);
  });
});

// job();

app.listen(port, () => console.log(`server running on port ${port}`));
