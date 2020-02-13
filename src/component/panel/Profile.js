import React, { Component } from 'react'
import {Row,Col,Card,Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChevronLeft,faMapMarkerAlt,faInfoCircle, faArrowAltCircleLeft,faArrowAltCircleRight,faArrowAltCircleUp,faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'

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
                              <FontAwesomeIcon icon={faChevronLeft} style={{color:"rgba(0,0,0,.7)",marginLeft:"20",boxSizing:"border-box"}}/>
                            </h1>
                          </Link>

                          <img src={process.env.PUBLIC_URL+"../assets/images/profile.jpeg"}
                          width="250"
                          height="50"
                          className="d-inline-block align-top"
                          alt="MyLogo"
                          style={{cursor:"pointer"}}
                          />
                          {/* <Link to="index"> */}
                            <h1 className="color nama-profile">porfile Pet </h1>
                          {/* </Link> */}
                        </Col>
                      </Row>
                   
                  </div>
                </div>

                <div className="panel-left-dash-opsi"><h3 className="color">Match</h3></div>

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

export default Profile;