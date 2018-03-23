import React, { Component } from 'react';
import { Divider, Thumbnail, Grid, Row, Col, Button } from 'react-bootstrap';
import firebase, { auth, provider } from './../firebase';

class Eventos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inscritos: 22,
      eventName: 'super evento'
    };
    this.joinEvent = this.joinEvent.bind(this);
  }

  joinEvent(event) {
    console.log(event.target);
    const add = this.state.inscritos - 1;
    this.setState({
      inscritos: add
    });
    auth.onAuthStateChanged(user => {
      const eventRef = firebase.database().ref(user.uid).child('eventList');
      const evento = {
        eventName: this.state.eventName,
      };
      eventRef.push(evento);
    });
  }

  render() {
    const { inscritos } = this.state;
    const { eventName } = this.state;
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
              <Thumbnail
                id="evento1"
                src={'https://picsum.photos/1000/1000/?random'}
              >
                <h3>{this.state.eventName}</h3>
                <p>organizado por alguien</p>
                <span>
                  Cupos:{' '}
                  {this.state.inscritos > 0
                    ? this.state.inscritos
                    : alert('no hay más cupos')}
                </span>
                <p>
                  <Button onClick={this.joinEvent} bsStyle="primary">
                    Inscribirse
                  </Button>
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
