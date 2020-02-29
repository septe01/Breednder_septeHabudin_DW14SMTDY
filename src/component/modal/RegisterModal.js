import React, { Component } from "react"; //useState
import { Row, Col, Container, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

// data
import Spesies from "../../data/dataUser.json";
import { connect } from "react-redux";
import { getSpecies } from "./../../_actions/speciesA";
import { getAge } from "../../_actions/ageA";

class RegisterModal extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      breeder: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      name: "",
      gender: "",
      about: "",
      idSpecies: "",
      idAge: ""
    };
  }

  handleModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  componentDidMount() {
    this.props.getSpecies();
    this.props.getAge();
  }

  handleChange = e => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  handleSubmit = e => {
    e.preventDefault();

    // valildate
    let error = "";

    console.log(
      this.state.breeder,
      this.state.email,
      this.state.password,
      this.state.phone,
      this.state.address,
      this.state.name,
      this.state.gender,
      this.state.about,
      this.state.idSpecies,
      this.state.idAge
    );

    if (this.state.breeder != "") {
      error = "ok";
    } else {
      error = "breeder required !";
    }

    const regData = {
      breeder: this.state.breeder,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      address: this.state.address,
      pet: {
        name: this.state.name,
        gender: this.state.gender,
        about: this.state.about,
        spesies: {
          id: this.state.idSpecies
        },
        age: {
          id: this.state.idAge
        }
      }
    };
  };

  render() {
    return (
      <>
        <button className="btn-reg color-bg" onClick={() => this.handleModal()}>
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
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="formBasicUser">
                    <Form.Control
                      type="text"
                      name="breeder"
                      placeholder="Breeder"
                      onChange={this.handleChange}
                    />
                    <Form.Text className="text-muted">
                      {this.error == "breeder required !" ? "asdfas" : null}
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder="Email"
                      onChange={this.handleChange}
                    />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text> */}
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      name="password"
                      type="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPhone">
                    <Form.Control
                      name="phone"
                      type="phone"
                      placeholder="Phone Breeder"
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicAddress">
                    <Form.Control
                      name="address"
                      type="text"
                      placeholder="Address Breeder"
                      as="textarea"
                      rows="3"
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicName">
                    <Form.Control
                      name="name"
                      type="text"
                      placeholder="Name Pet"
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicGender">
                    <div className="form-group">
                      <select
                        className="form-control"
                        name="gender"
                        id="gender"
                        onChange={this.handleChange}
                      >
                        <option>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </Form.Group>

                  <Form.Group controlId="formBasicAbout">
                    <Form.Control
                      name="about"
                      type="text"
                      placeholder="About Pet"
                      as="textarea"
                      rows="3"
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <div className="form-group">
                      <select
                        className="form-control"
                        name="idSpecies"
                        id="idSpecies"
                        onChange={this.handleChange}
                      >
                        <option>Spesies Pet</option>
                        {this.props.speciesR.getAll
                          ? this.props.speciesR.getAll.map(species => (
                              <option value={species.id} key={species.id}>
                                {species.name}
                              </option>
                            ))
                          : null}
                      </select>
                    </div>
                  </Form.Group>
                  <Form.Group controlId="formBasicAge">
                    <div className="form-group">
                      <select
                        className="form-control"
                        name="idAge"
                        id="Age"
                        onChange={this.handleChange}
                      >
                        <option>Age</option>

                        {this.props.ageR.data
                          ? this.props.ageR.data.getAll.map(
                              age => (
                                <option value={age.id} key={age.id}>
                                  {age.name}
                                </option>
                              )
                              // console.log(age.id)
                            )
                          : null}
                      </select>
                    </div>
                  </Form.Group>
                  <div className="justify-content-center d-flex">
                    <button
                      className="discoveri-close color-bg mt-3"
                      type="submit"
                    >
                      Register
                    </button>
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

const mapStateToProps = state => {
  return {
    speciesR: state.speciesR.indexSpecies,
    ageR: state.ageR.indexAge
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getSpecies: () => dispatch(getSpecies()),
    getAge: () => dispatch(getAge())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterModal);
