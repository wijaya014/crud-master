import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const FormComponent = ({
  nama,
  deskripsi,
  harga,
  id,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h4>Tambah data</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nama makanan</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nama makanan"
                name="nama"
                value={nama}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="deskripsi"
                value={deskripsi}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Harga</Form.Label>
              <Form.Control
                type="text"
                placeholder="Harga"
                name="harga"
                value={harga}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default FormComponent;
