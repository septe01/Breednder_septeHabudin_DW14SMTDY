import React, { Component } from 'react';
import { Row,Col,Navbar,Nav,Form} from 'react-bootstrap'; //import component bootstaps
import Container from 'react-bootstrap/Container';
// import Modal from 'react-bootstrap/Modal'
import Login from './modal/Login'







class Content extends Component {
  render() {
    return (
      <div className="App-header image">
          <Container className="header">
            <Navbar bg="">
              <Navbar.Brand href="#home">
                <img
                  src={process.env.PUBLIC_URL+"/assets/images/Logo2.png"}
                  width="250"
                  height="50"
                  className="d-inline-block align-top"
                  alt="MyLogo"
                />
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                  </Nav>
                  <Form inline>
                    {/* <Button className=" btn-log color-bg color">Login</Button> */}
                    <Login />
                  </Form>
                </Navbar.Collapse>
            </Navbar>
          </Container>

          <Container className="center">
            <h1 className="head1-dashboard">Swipe <span className="bold">right</span>.</h1>
            <h1 className="head1-dashboard">Make your pet <span className="bold">happy</span></h1>

            <Row className="justify-content-md-center" style={{marginTop:20}}>
              <Col md="10" className="color">
                <p>by clicking enter, you agree to our terms. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>
              </Col>
            </Row>
              <button className="btn-reg color-bg color" variant="outline-success">
                Register
              </button>
          </Container>

          <Container fluid className="footer color-bg">
             <h1 className="head1-dashboard">FIND YOUR PET’S MATCH</h1>
          </Container>

          {/* </div>
        </div> */}
      </div>
    );
  }
}

export default Content;