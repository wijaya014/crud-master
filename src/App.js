import React, { Component } from "react";
import "./App.css";
import Navbar from "./component/NavbarComponent";
import TableComponent from "./component/TableComponent";
import FormComponent from "./component/FormComponent";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makanans: [],
      nama: "",
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
    this.setState({
      makanans: [
        ...this.state.makanans,
        {
          id: this.state.makanans.length + 1,
          nama: this.state.nama,
          deskripsi: this.state.deskripsi,
          harga: this.state.harga,
        },
      ],
    });
    this.setState({
      nama: "",
      deskripsi: "",
      harga: 0,
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="container mt-5">
          <TableComponent makanans={this.state.makanans} />
          <FormComponent
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
