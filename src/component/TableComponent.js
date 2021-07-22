import React from "react";
import { Table } from "react-bootstrap";

const TableComponent = ({ makanans }) => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Nama makanan</th>
          <th>Deskripsi</th>
          <th>Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {makanans.map((makanan, index) => {
          return (
            <tr>
              <td>{index}</td>
              <td>{makanan.nama}</td>
              <td>{makanan.deskripsi}</td>
              <td>{makanan.harga}</td>
              <td></td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableComponent;
