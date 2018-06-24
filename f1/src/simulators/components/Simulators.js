import React, {Component, Fragment} from 'react';
import Header from "../../commons/components/headers"
import Footer from "../../commons/components/Footer";
import NavBodyContainer from "../../navbody/components/navbody";

class Simulator extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <NavBodyContainer/>
        <Footer/>
      </Fragment>
    )
  }
}

export default Simulator;
