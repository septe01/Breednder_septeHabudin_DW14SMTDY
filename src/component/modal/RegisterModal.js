import React, { Component } from "react"; //useState
import { Row, Col, Container, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

// data
import Spesies from "../../data/dataUser.json";

class RegisterModal extends Component {
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
    // const spseiesAnimal = require("../../data/dataUser.json")

    // const cars = [
    //   "Mercy","BMW","Angkot","Honda"
    // ]

    return (
      <>
        <button
          className="btn-reg color-bg color"
          onClick={() => this.handleModal()}
        >
          Register
        </button>

        <Modal show={this.state.show}>
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col md="12" className="head-modal">
                <h1>Register</h1>
                <span className="close" onClick={() => this.hideModal()}>
                  X
                </span>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row className="justify-content-md-center">
              <Col md="11" className="body-modal">
                <Form>
                  <Form.Group controlId="formBasicUser">
                    <Form.Control type="text" placeholder="Breeder" />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text> */}
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text> */}
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Control type="phone" placeholder="Phone Breeder" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Address Breeder" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Name Pet" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <div className="form-group">
                      <select className="form-control" name="" id="">
                        <option>Spesies Pet</option>
                        {Spesies.map((Sp, index) => (
                          <option key={index}>{Sp.nama}</option>
                        ))}
                      </select>
                    </div>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Age Pet" />
                  </Form.Group>

                  {/* {cars.map((car) => <p>{car}</p>)} */}
                  {Spesies.map((Sp, index) => (
                    <div>
                      {Sp.imgSrc ? (
                        <img key={index} src={Sp.imgSrc} alt="dumImg" />
                      ) : null}
                    </div>
                  ))}

                  <button
                    className="btn-log-mdl color-bg color"
                    variant="outline-success"
                  >
                    Register
                  </button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Modal>
      </>
    );
  }
}

export default RegisterModal;
