import React, { Component } from "react";
import { Form, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faChevronLeft,
  faMapMarkerAlt,
  faVenusMars,
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";

class Profile extends Component {
  render() {
    return (
      <div>
        <section className="container-dashboard">
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row>
            <Col md={4}>
              <div className="panel-left-dash">
                <div className="panel-left-dash-header">
                  <div className="profile">
                    <Row>
                      <Col md={"auto"}>
                        <Link to="index">
                          <h1 className="arrow-back">
                            <FontAwesomeIcon
                              icon={faChevronLeft}
                              style={{
                                color: "rgba(0,0,0,.7)",
                                marginLeft: "20",
                                boxSizing: "border-box"
                              }}
                            />
                          </h1>
                        </Link>

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
                        {/* <Link to="index"> */}
                        <h1 className="color nama-profile">Profile Pet </h1>
                        {/* </Link> */}
                      </Col>
                    </Row>
                  </div>
                </div>

                <div className="panel-left-dash-opsi account-setting">
                  <h3 className="">Account Settings</h3>

                  <div className="email-phone color-bg-white">
                    <div className="email">
                      <span>Email</span>
                      <span className="value-right">egi.ginting@gmail.com</span>
                    </div>
                    <hr />
                    <div className="phone">
                      <span>Phone</span>
                      <span className="value-right">083896831233</span>
                    </div>
                  </div>
                  <div className="discovery">
                    <h3>Discovery Settings</h3>
                  </div>
                  <div className="discovery-setting">
                    <div className="maximum-distant">
                      <span>Maximum Distance </span>
                      <span>10 km. </span>
                    </div>
                    <div className="discovery-range">
                      <input type="range" />
                    </div>
                    <div className="discovery-form">
                      <Form>
                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>Age</Form.Label>
                          <Form.Control type="text" placeholder="Adult" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>Species</Form.Label>
                          <Form.Group controlId="formBasicPassword">
                            <div className="form-group">
                              <select class="form-control" name="" id="">
                                <option>Pet</option>
                              </select>
                            </div>
                          </Form.Group>
                        </Form.Group>
                        <div className=" justify-content-center d-flex">
                          <Link to="/">
                            <button className="discoveri-close color-bg">
                              Close
                            </button>
                          </Link>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={8} className="panel-righ-dash">
              <div className="content-right-dash">
                <div className="row justify-content-center settingprofile-panle-right">
                  <div className="col-md-6 justify-content-center d-flex">
                    <Card className="card-swipe-profile-box">
                      <div className="detail-user">
                        <Card border="light" className="card-swipe-profile">
                          <img
                            src={require("../../assets/images/galery/5.jpeg")}
                            className="d-inline-block align-top"
                            alt="MyLogo"
                          />
                        </Card>
                        <div className="profile-setting-detail">
                          <Card.Title className="profile-setting-detail-name">
                            <span>Garry</span>
                            <span className="color">Cat</span>
                          </Card.Title>
                          <Card.Text>
                            <div className="scroll-detail-user">
                              <p>
                                <FontAwesomeIcon
                                  icon={faUser}
                                  style={{ marginRight: "4" }}
                                />{" "}
                                Breeder : Haris Maulana
                              </p>
                              <p>
                                <FontAwesomeIcon
                                  icon={faMapMarkerAlt}
                                  style={{ marginRight: "4" }}
                                />{" "}
                                10 Kilometer dari sini{" "}
                              </p>
                              <p>
                                <FontAwesomeIcon
                                  icon={faVenusMars}
                                  style={{ marginRight: "4" }}
                                />{" "}
                                Male - Adult{" "}
                              </p>

                              <p>
                                <FontAwesomeIcon
                                  icon={faPhoneAlt}
                                  style={{ marginRight: "4" }}
                                />{" "}
                                Phone Breeder : 083896831233{" "}
                              </p>
                            </div>
                          </Card.Text>
                          <div className=" justify-content-center d-flex btn-scroll-detail-user">
                            <Link to="edit-profile">
                              <button className="btn-reg color-bg">Edit</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Card>
                    <button className="btn-reg add-pet color-bg">
                      Add pet
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </div>
    );
  }
}

export default Profile;
