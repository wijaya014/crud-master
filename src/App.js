import React, { Component } from "react";
import "./App.css";
import Navbar from "./component/NavbarComponent";
import TableComponent from "./component/TableComponent";
import FormComponent from "./component/FormComponent";

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      makanan: [],
      deskripsi: "",
      harga: 0,
      id: 0,
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("halo");
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="container mt-5">
          <TableComponent />
          <FormComponent
            {...this.state}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
