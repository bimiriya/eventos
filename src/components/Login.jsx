import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewEvent from './Modal/modal';
import firebase, { auth, provider } from './../firebase';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

// import DialogExampleModal from './Modal/modal.js';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: null // se inicializa el state del usuario en null
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  // para que la sesión del usuario no se cierre al refrescar la página
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
      console.log(user.uid)
    });
  }

  login() {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user;
      this.setState({
        user
      });
    });
  }

  logout() {
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.user ? (
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              <NewEvent />
            </NavItem>
            <NavDropdown
              eventKey={4}
              title={this.state.user.displayName}
              id="basic-nav-dropdown"
            >
              {' '}
              <img src={this.state.user.photoURL} alt="" />{' '}
              <MenuItem eventKey={3.1}>Mi perfil</MenuItem>
              <MenuItem eventKey={3.2}>Mis eventos</MenuItem>
              <MenuItem eventKey={3.3}>Organizados por mi</MenuItem>
              <MenuItem eventKey={3.4}>Favoritos</MenuItem>
              <MenuItem divider />
              <MenuItem onClick={this.logout} eventKey={3.3}>
                Cerrar sesión
              </MenuItem>
            </NavDropdown>
          </Nav>
        ) : (
          <Nav pullRight>
            <NavItem>
              <button onClick={this.login} className="btn">INICIA SESIÓN</button>
            </NavItem>
          </Nav>
        )}
      </div>
    );
  }
}

export default Login;
