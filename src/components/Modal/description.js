import React, { Component } from 'react';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';



class Description extends Component {
  render() {
    return(
      <FormGroup controlId="formControlsTextarea">
        <FormControl componentClass="textarea" placeholder="textarea" />
      </FormGroup>
    )
  }
}

export default Description;

