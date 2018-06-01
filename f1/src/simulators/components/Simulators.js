import React, {Component, Fragment} from 'react';
import Footer from "../../commons/components/Footer";
import Header from "../../commons/components/Headers";
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
