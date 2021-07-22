import React from "react";
import { Table } from "react-bootstrap";

const TableComponent = () => {
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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableComponent;
