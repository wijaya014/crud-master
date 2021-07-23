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
    if (this.state.id === "") {
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
    } else {
      const makananYangTidakDiPilih = this.state.makanans
        .filter((makanan) => makanan.id !== this.state.id)
        .map((filter) => filter);

      this.setState({
        makanans: [
          ...makananYangTidakDiPilih,
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
        harga: "",
      });
    }
  };

  handleEdit = (id) => {
    const makananYangDiPilih = this.state.makanans
      .filter((makanan) => makanan.id === id)
      .map((filter) => filter);
    this.setState({
      nama: makananYangDiPilih[0].nama,
      deskripsi: makananYangDiPilih[0].deskripsi,
      harga: makananYangDiPilih[0].harga,
      id: makananYangDiPilih[0].id,
    });
  };

  handleHapusData = (id) => {
    const dataYangAda = this.state.makanans
      .filter((makanan) => makanan.id !== id)
      .map((filter) => filter);

    this.setState({
      makanans: dataYangAda,
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="container mt-5">
          <TableComponent
            makanans={this.state.makanans}
            handleEdit={this.handleEdit}
            handleHapusData={this.handleHapusData}
          />
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
