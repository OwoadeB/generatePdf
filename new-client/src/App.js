import React, { Component } from "react";
import axios from "axios";
// import { Link, Router } from "react-router-dom";
import { saveAs } from "file-saver";

class App extends Component {
  state = {
    id: "",
  };

  handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  create = async () => {
    const id = this.state.id;
    console.log(id);

    const res = await axios.get(`http://localhost:4000/print/${id}`);
    // {
    //   responseType: "blob",
    // });
    // const pdfBlob = new Blob([res.data], { type: "application/pdf" });
    // saveAs(pdfBlob, `${this.state.name}.pdf`);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Name"
          name="id"
          onChange={this.handleChange}
        />
        {/* <input
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
        /> */}
        <button onClick={this.create}>create PDF</button>
        {/* <a href={this.state.link} target="_blank">
          {this.state.link}
        </a> */}
      </div>
    );
  }
}

export default App;
