import React, { useState } from "react";
// import {Button,Modal} from './react/bootstrap';
import { Button, Row, Col, Container, Form, Modal } from "react-bootstrap";
// import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className=" btn-log color-bg color-white"
        onClick={handleShow}
        style={{ fontWeight: "1000" }}
      >
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md="12" className="head-modal">
              <h1>Login</h1>
              <span className="close" onClick={handleClose}>
                X
              </span>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="justify-content-md-center">
            <Col md="11" className="body-modal">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email" />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <div className="justify-content-center d-flex">
                  <Link to="index">
                    <button className="discoveri-close color-bg mt-3">
                      Login
                    </button>
                  </Link>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal>
    </>
  );
}

export default LoginModal;

// <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
