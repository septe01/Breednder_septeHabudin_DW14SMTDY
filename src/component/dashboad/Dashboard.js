import React, { Component } from 'react';
import { Container,Row,Col } from 'react-bootstrap';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Container className="container-dashboard">
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row>
            <Col xs={6} md={5}>
            </Col>
            <Col xs={12} md={7}>
              <div className="panel-righ-dash"></div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;