const express = require("express");
const path = require("path");
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// Pdf Generation POST
app.post("/create-pdf", (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
        if (err) res.send(Promise.reject());
    });
    res.send(Promise.resolve());
});

// GET Request
app.get("/fetch-pdf", (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})


app.listen(port, () => console.log(`server running on port ${port}`));