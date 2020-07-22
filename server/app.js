const express = require("express");
// const path = require("path");
const app = express();
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

// Pdf Generator packages
const pdf = require("html-pdf");
const pdfTemplate = require("./template");

app.use(cors());
app.use(logger("dev"));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/print/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const transaction = await axios.get(
      `xdev.buypower.ng/client/transaction/${id}`
    );
    console.log(transaction);
    res.json(transaction);
  } catch (error) {
    throw new Error("unable to connect");
  }
});

// Pdf Generation POST
app.post("/download", async (req, res) => {
  pdf.create(
    pdfTemplate(transaction).toStream((err, stream) => {
      if (err) console.log(err);
      res.writeHead(200, {
        "Content-Type": "application/pdf",
        "Content-disposition": "attachment; filename=file.pdf",
      });
      stream.pipe(res);
    })
  );
});

// job();

app.listen(process.env.PORT, () =>
  console.log(`server running on port ${process.env.PORT}`)
);
