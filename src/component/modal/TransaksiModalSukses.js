// Terimakasih Silakan Tunggu Konfirmasi pembayaran

import React, { Component } from "react"; //useState
import { Row, Col, Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

class TransaksiModalSukses extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  handleModalTr() {
    this.setState({ show: true });
  }

  hideModalTr() {
    this.setState({ show: false });
  }

  render() {
    return (
      <>
        <span
          className="btn-log-mdl color btn-paymen-save bold-7"
          variant="outline-success"
          onClick={() => this.hideModal().this.handleModalTr()}
        >
          Kirim
        </span>

        <Modal show={this.state.show}>
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col md="12" className="head-modal">
                <h1>Register</h1>
                {/* <span className="close" onClick={() => this.hideModal()}>
                  X
                </span> */}
              </Col>
            </Row>
          </Container>
        </Modal>
      </>
    );
  }
}

export default TransaksiModalSukses;
