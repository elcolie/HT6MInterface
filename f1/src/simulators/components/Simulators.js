import React, {Component, Fragment} from 'react';
import Footer from "../../commons/components/Footer";
import Header from "../../commons/components/Headers";
import TINTNavBar from "./TINTNavBar";

class Simulator extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <TINTNavBar/>
        <Footer/>
      </Fragment>
    )
  }
}

export default Simulator;