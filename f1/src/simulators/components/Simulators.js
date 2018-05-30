import React, {Component, Fragment} from 'react';
import Footer from "../../commons/components/Footer";
import Header from "../../commons/components/Headers";
import {Navbar, Nav, NavItem, NavDropdown} from 'reactstrap'

class Simulator extends Component{
  render(){
    return(
      <Fragment>
        <Header/>
        <Footer/>
      </Fragment>
    )
  }
}

export default Simulator;