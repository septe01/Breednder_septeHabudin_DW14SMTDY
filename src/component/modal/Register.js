import React, {useState } from 'react';
import {Row,Col,Container,Form} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'

// data
import {genders} from "../../data/data";


function Register() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <button className="btn-reg color-bg color" variant="outline-success" onClick={handleShow}>
        Register
      </button>

      <Modal show={show} onHide={handleClose}>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md="12" className="head-modal">
              <h1>Register</h1>
              <span className="close" onClick={handleClose}>X</span>
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
                  <Form.Control as="select">
                    <option>Spesies Pet</option>
                    <option>Abyssinian</option>
                    <option>Aegean</option>
                    <option>American Bobtail</option>
                    <option>American Curl</option>
                    <option>American Ringtail</option>
                    <option>American Shorthair</option>
                    <option>American Wirehair</option>
                    <option>Arabian Mau</option>
                    <option>Asian- Malayan</option>
                    <option>Asian Longhair-Tiffany</option>
                    <option>Australian Mist</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="text" placeholder="Age Pet" />
                </Form.Group>
                
              <button className="btn-log-mdl color-bg color" variant="outline-success">
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


export default Register;
