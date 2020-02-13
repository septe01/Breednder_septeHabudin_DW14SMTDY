import React, {Component } from 'react'; //useState
import {Row,Col,Container,Form} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'

// data
// import Spesies from "../../data/data";



class RegisterModal extends Component {
  constructor(){
    super()
    this.state = {
      show:false
    }
  }

  handleModal(){
    this.setState({show:true})
  }

  hideModal(){
    this.setState({show:false})
  }

  render() {
    const Spesies = [
      {
        id:1,
        nama:"Abyssinian"
      },
      {
        id:2,
        nama:"Aegean"
      },
      {
        id:3,
        nama:"American Bobtail"
      },
      {
        id:4,
        nama:"American Curl"
      },
      {
        id:5,
        nama:"American Ringtail"
      },
      {
        id:6,
        nama:"American Shorthair"
      },
      {
        id:7,
        nama:"American Wirehair"
      },
      {
        id:8,
        nama:"Arabian Mau"
      },
      {
        id:9,
        nama:"Asian- Malayan"
      },
      {
        id:10,
        nama:"Asian Longhair-Tiffany"
      },
      {
        id:11,
        nama:"Australian Mist"
      },
    ]

    // const cars = [
    //   "Mercy","BMW","Angkot","Honda"
    // ]
  

    return (
          <>
          <button className="btn-reg color-bg color" variant="outline-success" onClick={() => this.handleModal()}>
            Register
          </button>

          <Modal show={ this.state.show }>
            <Container fluid>
              <Row className="justify-content-md-center">
                <Col md="12" className="head-modal">
                  <h1>Register</h1>
                  <span className="close" onClick={() => this.hideModal()}>X</span>
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
                      <div class="form-group">
                        <select class="form-control" name="" id="">
                          <option>Spesies Pet</option>
                          {Spesies.map((Sp) => <option>{Sp.nama}</option>)}
                        </select>
                      </div>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Control type="text" placeholder="Age Pet" />
                    </Form.Group>

                    {/* {cars.map((car) => <p>{car}</p>)} */}
                    
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
}

export default RegisterModal;

