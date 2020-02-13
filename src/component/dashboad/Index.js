import React, { Component } from 'react';
import {Row,Col,Card,Nav } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChevronDown,faMapMarkerAlt,faInfoCircle, faArrowAltCircleLeft,faArrowAltCircleRight,faArrowAltCircleUp,faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import Navbar from 'react-bootstrap/Navbar'




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
                    <Row className="justify-content-left">
                      
                      <Col md={"4"} sm={"4"} className="thumbnail-audio mt-2">
                          <Card className="card-left-dash">
                            <Card.Body className="card-thumb">
                             <div className="galery-tumbnail">
                               <img src={require('../../assets/images/galery/1.jpeg')}
                               className="d-inline-block align-top"
                               alt="MyLogo"/>
                               <h4 className="color-white">Meow</h4>
                             </div>
                            </Card.Body>
                          </Card>
                      </Col>
                      
                      <Col md={"4"} sm={"4"} className="thumbnail-audio mt-2">
                          <Card className="card-left-dash">
                            <Card.Body className="card-thumb">
                             <div className="galery-tumbnail">
                               <img src={require('../../assets/images/galery/2.jpeg')}
                               className="d-inline-block align-top"
                               alt="MyLogo"/>
                               <h4 className="color-white">Mimiw</h4>
                             </div>
                            </Card.Body>
                          </Card>
                      </Col>
                      
                      <Col md={"4"} sm={"4"} className="thumbnail-audio mt-2">
                          <Card className="card-left-dash">
                            <Card.Body className="card-thumb">
                             <div className="galery-tumbnail">
                               <img src={require('../../assets/images/galery/3.jpeg')}
                               className="d-inline-block align-top"
                               alt="MyLogo"/>
                               <h4 className="color-white">Momow</h4>
                             </div>
                            </Card.Body>
                          </Card>
                      </Col>
                      
                      <Col md={"4"} sm={"4"} className="thumbnail-audio mt-2">
                          <Card className="card-left-dash">
                            <Card.Body className="card-thumb">
                             <div className="galery-tumbnail">
                               <img src={require('../../assets/images/galery/4.jpeg')}
                               className="d-inline-block align-top"
                               alt="MyLogo"/>
                               <h4 className="color-white">Mumoo</h4>
                             </div>
                            </Card.Body>
                          </Card>
                      </Col>
                      
                      <Col md={"4"} sm={"4"} className="thumbnail-audio mt-2">
                          <Card className="card-left-dash">
                            <Card.Body className="card-thumb">
                             <div className="galery-tumbnail">
                               <img src={require('../../assets/images/galery/5.jpeg')}
                               className="d-inline-block align-top"
                               alt="MyLogo"/>
                               <h4 className="color-white">Muncul</h4>
                             </div>
                            </Card.Body>
                          </Card>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={8} className="panel-righ-dash">
              <div className="content-right-dash">
                <div class="row justify-content-center">
                  <div class="col-md-6 justify-content-center d-flex">

                  <Card border="light" className="card-swipe">
                    <img src={require('../../assets/images/galery/5.jpeg')}
                    className="d-inline-block align-top"
                    alt="MyLogo"/>
                    <div className="detail color-white">
                      <h3>Mancaw</h3>
                      <div class="row mt-3">
                        <div class="col-md-10">
                          <p ><FontAwesomeIcon icon={faUser} style={{marginRight:"4"}}/> Breeder : Haris Maulana</p>
                          <p ><FontAwesomeIcon icon={faMapMarkerAlt} style={{marginRight:"4"}}/> 11 Kilometer dari sini </p>
                        </div>
                        <div class="col-md-2 info-icon-dash">
                        <p><FontAwesomeIcon icon={faInfoCircle}/> </p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  </div>                  
                </div>
              </div>

              <div class="justify-content-center d-flex mt-3">

                  <div className="img-select">
                    <img src={require('../../assets/images/icon/reload.png')}
                    alt="MyLogo"
                    />
                  </div>
                  <div className="img-select-middle">
                    <img src={require('../../assets/images/icon/disklove.png')}
                    alt="MyLogo"
                    />
                  </div>
                  <div className="img-select-middle">
                    <img src={require('../../assets/images/icon/love.png')}
                    alt="MyLogo"
                    />
                  </div>
                  <div className="img-select">
                  <img src={require('../../assets/images/icon/danger.png')}
                    alt="MyLogo"
                    />
                  </div>

              </div>

              <div class="container footer-panel-dash justify-content-center d-flex">
              <Navbar bg="" expand="lg" fixed="bottom" className="nav-dash" id="button-toggle">
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle-nav-dash"/>
                <Navbar.Collapse id="basic-navbar-nav" className="my-nav">
                  <Nav className="">
                    <Nav.Link href="" className="nav-hide">Hide</Nav.Link>
                    <Nav.Link href=""><FontAwesomeIcon icon={faArrowAltCircleLeft}/>  No</Nav.Link>
                    <Nav.Link href=""><FontAwesomeIcon icon={faArrowAltCircleRight}/>  Yes</Nav.Link>
                    <Nav.Link href=""><FontAwesomeIcon icon={faArrowAltCircleUp}/>  Open Profil</Nav.Link>
                    <Nav.Link href=""><FontAwesomeIcon icon={faArrowAltCircleDown}/>  Close Profile</Nav.Link>
                   
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