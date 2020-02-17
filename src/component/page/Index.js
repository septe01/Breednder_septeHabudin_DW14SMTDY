import React, { Component } from "react";
import { Row, Col, Card, Nav } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faArrowAltCircleUp,
  faArrowAltCircleDown
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

// import data .json
import Animals from "../../data/dataAnimal.json";
import Deck from "./Deck.js";

class Index extends Component {
  render() {
    return (
      <div>
        <section className="container-dashboard">
          <Row>
            <Col md={4}>
              <div className="panel-left-dash">
                <div className="panel-left-dash-header">
                  <div className="profile">
                    <Link to="/profile">
                      <Row>
                        <Col md={"auto"}>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "../assets/images/profile.jpeg"
                            }
                            width="250"
                            height="50"
                            className="d-inline-block align-top"
                            alt="MyLogo"
                            style={{ cursor: "pointer" }}
                          />

                          <h1 className="color-white nama-profile fix-white">
                            Gerry{" "}
                            <FontAwesomeIcon
                              icon={faChevronDown}
                              style={{
                                color: "rgba(255, 255, 255)",
                                marginLeft: "14",
                                boxSizing: "border-box"
                              }}
                            />
                          </h1>
                        </Col>
                      </Row>
                    </Link>
                  </div>
                </div>

                <div className="panel-left-dash-opsi">
                  <h4
                    style={{
                      fontWeight: "900",
                      filter: "drop-shadow(0px 0 1px rgba(0, 0, 0, 0.9))"
                    }}
                  >
                    Match
                  </h4>
                </div>

                <div className="panel-left-dash-body">
                  <div className="list-user1">
                    <Row className="justify-content-left list-user2">
                      {Animals.map(animal => (
                        <Col md={"4"} sm={"4"} className="thumbnail-audio mt-2">
                          <Card className="card-left-dash">
                            <Card.Body className="card-thumb">
                              <div className="galery-tumbnail">
                                <img
                                  src={animal.imgSrc}
                                  className="d-inline-block align-top"
                                  alt="MyLogo"
                                />
                                <h4 className="color-white">{animal.nama}</h4>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={8} className="panel-righ-dash">
              <div className="content-right-dash">
                <div className="row justify-content-center">
                  <div
                    className="justify-content-center d-flex"
                    style={{
                      height: "580px",
                      overflow: "hidden",
                      width: "100%",
                      position: "relative"
                    }}
                  >
                    <div className="sweep">
                      <Deck />
                    </div>
                  </div>
                </div>
              </div>

              {/* option */}

              <div
                className="justify-content-center d-flex"
                style={{
                  marginTop: "-50px",
                  zIndex: "3",
                  position: "relative"
                }}
              >
                <div className="img-select">
                  <img
                    src={require("../../assets/images/icon/reload.png")}
                    alt="MyLogo"
                  />
                </div>
                <div className="img-select-middle">
                  <img
                    src={require("../../assets/images/icon/disklove.png")}
                    alt="MyLogo"
                  />
                </div>
                <div className="img-select-middle">
                  <img
                    src={require("../../assets/images/icon/love.png")}
                    alt="MyLogo"
                  />
                </div>
                <div className="img-select">
                  <img
                    src={require("../../assets/images/icon/danger.png")}
                    alt="MyLogo"
                  />
                </div>
              </div>

              <div
                className="container footer-panel-dash justify-content-center d-flex"
                style={{ marginTop: "-25px" }}
              >
                <Navbar
                  bg=""
                  expand="lg"
                  fixed="bottom"
                  className="nav-dash"
                  id="button-toggle"
                >
                  <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="toggle-nav-dash"
                  />
                  <Navbar.Collapse id="basic-navbar-nav" className="my-nav">
                    <Nav className="">
                      <Nav.Link href="" className="nav-hide">
                        Hide
                      </Nav.Link>
                      <Nav.Link href="">
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} /> No
                      </Nav.Link>
                      <Nav.Link href="">
                        <FontAwesomeIcon icon={faArrowAltCircleRight} /> Yes
                      </Nav.Link>
                      <Nav.Link href="">
                        <FontAwesomeIcon icon={faArrowAltCircleUp} /> Open
                        Profil
                      </Nav.Link>
                      <Nav.Link href="">
                        <FontAwesomeIcon icon={faArrowAltCircleDown} /> Close
                        Profile
                      </Nav.Link>

                      <input type="text" className="input-nav-dash" />

                      <Nav.Link href="#">Next Photo</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </div>
            </Col>
          </Row>
        </section>
      </div>
    );
  }
}

export default Index;
