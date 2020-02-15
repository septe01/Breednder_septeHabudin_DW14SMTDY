import React, { useState, Component } from "react";
import { Button, Row, Col, Container, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

// import TransaksiModalSukses from "./TransaksiModalSukses";

class PaymenModal extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  handleModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    return (
      <>
        {/* <Button
          className="btn-reg color-bg color add-pet paymen-btn"
          style={{ borderRadius: "36px" }}
          onClick={() => this.handleModal()}
        >
          Add Pet
        </Button> */}

        {/* <button className="btn-reg color-bg" onClick={() => this.handleModal()}>
          Add Pet
        </button> */}

        <button
          className="btn-reg color-bg paymen-btn"
          onClick={() => this.handleModal()}
        >
          Add Pet
        </button>
        <Modal show={this.state.show}>
          <Container fluid className="bg-modal-payment">
            <Row className="justify-content-md-center">
              <Col md="12" className="head-modal">
                <h1 className="title-color-modal">Premium</h1>
                <span className="close" onClick={() => this.hideModal()}>
                  X
                </span>
              </Col>
            </Row>

            <Row className="justify-content-md-center d-flex">
              <Col md="" className="body-modal slogan-modal-paymen">
                <p>
                  Upgrade Breednder mu dan nikmati fitur-fitur{" "}
                  <span className="bold-8">PRO.</span>{" "}
                </p>
                <p className="bold-8">Breednder : 0981312323 *</p>
              </Col>
            </Row>

            <Row className="justify-content-md-center box-upload-file">
              <Col md="11" className="body-modal">
                <Form>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      type="texxt"
                      placeholder="No.Rek Kamu"
                      className="input-payment"
                    />
                  </Form.Group>
                  <div className="justify-content-center d-flex">
                    <div className="input-payment file-upload text-center">
                      <p className="icon-file-upload">
                        <FontAwesomeIcon
                          icon={faCamera}
                          style={{
                            color: "rgba(0,0,0,.4)",
                            boxSizing: "border-box"
                          }}
                        />
                      </p>
                      <p className="text-file-upload">Upload Bukti Transfer</p>
                    </div>
                  </div>
                  <div className="justify-content-center d-flex mt-2">
                    <span
                      className="btn-log-mdl color btn-paymen-save bold-7 color-white"
                      variant="outline-success"
                      onClick={() => this.hideModal()}
                    >
                      Kirim
                    </span>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </Modal>
      </>
    );
  }
}

export default PaymenModal;
