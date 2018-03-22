import React, { Component } from 'react';
import { Divider, Thumbnail, Grid, Row, Col, Button } from 'react-bootstrap';

class Eventos extends Component {
  render() {
    return (
      <Grid>
          <Row>
            <Col xs={12} md={12}>
              <h2 className="nice_font green">Próximos eventos</h2>
            </Col>
          </Row>
        <div id="upcoming">
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src={process.env.PUBLIC_URL + '/images/user.png'}>
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={process.env.PUBLIC_URL + '/images/user.png'}>
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src={process.env.PUBLIC_URL + '/images/user.png'}>
                <h3>Thumbnail label</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Inscribirse</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
          </Row>
        </div>
      </Grid>
    );
  }
}

export default Eventos;
