import React, { Component } from "react";
import axios from "axios";
// import { Link, Router } from "react-router-dom";
import { saveAs } from "file-saver";

class App extends Component {
  state = {
    name: "",
    recieptId: 0,
    price1: 0,
    price2: 0,
    link: "",
  };

  handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  create = async () => {
    const res = await axios.post(
      "http://localhost:4000/create-pdf",
      this.state
    );
    this.setState({ link: res.data });
  };

  download = async () => {
    const res = await axios.get("http://localhost:4000/fetch-pdf", {
      responseType: "blob",
    });
    const pdfBlob = new Blob([res.data], { type: "application/pdf" });
    saveAs(pdfBlob, "newPdf.pdf");
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="Reciept ID"
          name="recieptId"
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="Price 1"
          name="price1"
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="Price 2"
          name="price2"
          onChange={this.handleChange}
        />
        <button onClick={this.create}>create PDF</button>
        <a href={this.state.link} target="_blank">
          {this.state.link}
        </a>
      </div>
    );
  }
}

export default App;
