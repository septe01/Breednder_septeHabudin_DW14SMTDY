import React, { Component } from 'react';
import {Row,Col,Card } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faChevronDown } from '@fortawesome/free-solid-svg-icons'





class Index extends Component {
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
                        <img src={process.env.PUBLIC_URL+"../assets/images/profile.jpeg"}
                        width="250"
                        height="50"
                        className="d-inline-block align-top"
                        alt="MyLogo"
                        />

                        <h1 className="color nama-profile">Gerry <FontAwesomeIcon icon={faChevronDown} style={{color:"rgba(0,0,0,.7)",marginLeft:"20",boxSizing:"border-box"}}/></h1>
                      </Col>
                    </Row>
                  </div>
                </div>

                <div className="panel-left-dash-opsi"><h3 className="color">Match</h3></div>

                <div className="panel-left-dash-body">
                  <div className="profile">
                    <Row>
                      <Col md={"4"} sm={"4"} className="thumbnail-audio">
                          <Card >
                            <Card.Body>
                              <Card.Text>
                                Some quick example text
                              </Card.Text>
                              {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                          </Card>
                      </Col>
                      <Col md={"4"} sm={"4"} className="thumbnail-audio">
                          <Card >
                            <Card.Body>
                              <Card.Text>
                                Some quick example text
                              </Card.Text>
                              {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                          </Card>
                      </Col>
                      <Col md={"4"} sm={"4"} className="thumbnail-audio">
                          <Card >
                            <Card.Body>
                              <Card.Text>
                                Some quick example text
                              </Card.Text>
                              {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                          </Card>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={8}>
              <div className="panel-righ-dash">
                dsfgkshdfiu
              </div>
            </Col>
          </Row>
        </section>
      </div>
    );
  }
}

export default Index;