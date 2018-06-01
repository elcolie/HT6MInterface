import React, {Component, Fragment} from 'react';
import Footer from "../../commons/components/Footer";
import Header from "../../commons/components/Headers";
// import NavBodyContainer from "../../navbody/components/navbody";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ControlRoom from "../../controlroom/components/ControlRoom";
import TINTQueue from "../../queue/components/queue";
import TINTResult from "../../results/components/result";
import Wiki from "../../wiki/components/wiki";


class Simulator extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        {/*<NavBodyContainer/>*/}
        
        <Tabs>
          <TabList>
            <Tab>Control Room</Tab>
            <Tab>Queue</Tab>
            <Tab>Results</Tab>
            <Tab>Wiki</Tab>
          </TabList>
    
          <TabPanel>
            <ControlRoom controlRoom={true}/>
          </TabPanel>
          
          <TabPanel>
            <TINTQueue queue={true}/>
          </TabPanel>
  
          <TabPanel>
            <TINTResult results={true}/>
          </TabPanel>
          
          <TabPanel>
            <Wiki wiki={true}/>
          </TabPanel>
          
        </Tabs>
        
        <Footer/>
      </Fragment>
    )
  }
}

export default Simulator;