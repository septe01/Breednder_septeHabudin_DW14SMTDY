import React, { Component } from "react";
import { Button, Row, Col, Container, Form, Modal } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";

class LoginModal extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      email: "",
      password: ""
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
      message: "",
      redirect: false
    };

    function LoginUser() {
      try {
        return Axios.post(
          "https://breednder-api.herokuapp.com/api/v1/login",
          data
        )
          .then(response => {
            // returning the data here allows the caller to get it through another .then(...)
            return response;
          })
          .catch(error => {
            if (error.response) {
              /*
               * The request was made and the server responded with a
               * status code that falls out of the range of 2xx
               */
              // console.log(error.response.data);
              // console.log(error.response.status);
              // console.log(error.response.headers);
              return error.response.data;
            } else if (error.request) {
              /*
               * The request was made but no response was received, `error.request`
               * is an instance of XMLHttpRequest in the browser and an instance
               * of http.ClientRequest in Node.js
               */
              return error.request;
            } else {
              // Something happened in setting up the request and triggered an Error
              return `Error, ${error.message}`;
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
    LoginUser().then(data => {
      let resultData = data;
      let email, token, message;
      if (resultData.data) {
        email = resultData.data.email[0];
        token = resultData.data.token;
      }
      if (resultData) {
        message = resultData.message;
      }
      // localStorage.getItem('itemName')

      const loginSucces = {
        email: email,
        token: token
      };
      const loginError = {
        message: message
      };

      if (loginSucces.email != undefined) {
        //set Token
        this.setState({
          redirect: true
        });
        localStorage.setItem("token", token);
      } else if (loginError) {
        // handle dialog
        this.setState({
          message: message
        });
      }
    });
  };

  render() {
    return (
      <>
        {this.state.redirect ? <Redirect to="/index" /> : ""}
        <Button
          className=" btn-log color-bg color-white"
          onClick={this.handleShow}
          style={{ fontWeight: "1000" }}
        >
          Login
        </Button>

        <Modal show={this.state.show}>
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col md="12" className="head-modal">
                <h1>Login</h1>
                <span className="close" onClick={this.handleClose}>
                  X
                </span>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row className="justify-content-md-center">
              <Col md="11" className="body-modal">
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder="Email"
                      onChange={this.handleChange}
                    />
                    <Form.Text className="text-danger">
                      {this.state.message == "Email Not Found"
                        ? `${this.state.message} !`
                        : ""}
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      name="password"
                      type="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                    />
                    <Form.Text className="text-danger">
                      {this.state.message == "Password Not Found"
                        ? `${this.state.message} !`
                        : ""}
                    </Form.Text>
                  </Form.Group>

                  <div className="justify-content-center d-flex">
                    {/* <Link to="index"> */}
                    <button
                      className="discoveri-close color-bg mt-3"
                      type="submit"
                    >
                      Login
                    </button>
                    {/* </Link> */}
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

export default LoginModal;
