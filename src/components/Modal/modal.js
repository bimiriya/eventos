import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Popover } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';
import Login from './../Login';
import DatosNewEvent from './datos';
import Cupos from './cupos';
import Description from './description';


class NewEvent extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    return (
      <div>
        <Button bsStyle="primary" id="btnEvent" bsSize="large" onClick={this.handleShow}>
          Create New Event!
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Nombre del Evento</h4>
            <DatosNewEvent />

            <h4>Lugar del Evento</h4>
            <DatosNewEvent />

            <h4>Nombre del Expositor</h4>
            <DatosNewEvent />

            <h4>Hora</h4>
            <DatosNewEvent />

            <h4>Fecha</h4>
            <DatosNewEvent />

            <h4>Cupos</h4>
            <Cupos />

            <hr />

            <h4>Descripción</h4>
            <Description />
            
          </Modal.Body>
          <Modal.Footer>
          <Button onClick={this.handleClose}>Cancelar</Button>
            <Button onClick={this.handleClose}>Crear</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

// render(<Example />);








export default NewEvent;


