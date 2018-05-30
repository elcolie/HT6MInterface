import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {getAuthToken, removeAuthToken} from "../../utils";
import {GET_USERNAME} from "../../constants";
import {withRouter} from 'react-router-dom';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Header extends Component {
  /*
  *
  * Get the token from localStorage
  * If token does not present kick back to login page
  * If token has been expire then refresh it again
  *
  * */
  constructor(props) {
    super(props);
    this.state = {
      token: getAuthToken(),
      username: undefined
    };
    this.props.getUsername();
  };
  
  clicked(event, history) {
    removeAuthToken();
    history.push('/');
  };
  
  render() {
    
    const {username} = this.props;
    return (
      <Fragment>
        <div className="text-center">
          <img src="../tint-banner.png" alt="TINT Banner" className='tint-banner'/>
          <span className='my-vertical'>
            <label>Welcome {username}</label>
            <button type="submit" onClick={(event) => {
              //A bit hacky here since `this.props.history` does not present in
              //clicked() context
              this.clicked(event, this.props.history);
            }}>Logout</button>
          </span>
        <div className='container navbar-expand'>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand className='navbar-brand'>
                <a href="#brand">React-Bootstrap</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">
                  Link
                </NavItem>
                <NavItem eventKey={2} href="#">
                  Link
                </NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">
                  Link Right
                </NavItem>
                <NavItem eventKey={2} href="#">
                  Link Right
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        
          
        </div>
      
      </Fragment>
    )
  }
}

const getUsername = () => {
  return {
    type: GET_USERNAME,
    payload: undefined,
  }
};

const mapStateToProps = ({localTokenReducer}, ownProps) => {
  return localTokenReducer;
};

export default withRouter(connect(mapStateToProps, {getUsername})(Header));