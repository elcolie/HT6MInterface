import React, {Component} from 'react';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import Basic from "./BasicControlRoom";
import Intermediate from "./Intermediate";
import Advance from "./Advance";


class ControlRoom extends Component {
  
  render() {
    if (this.props.controlRoom) {
      return (
        <div>
          <Tabs>
            <TabList>
              {/*<Tab>Basic</Tab>*/}
              <Tab>Intermediate</Tab>
              {/*<Tab>Advance</Tab>*/}
            </TabList>
            
            {/*<TabPanel>*/}
              {/*<Basic/>*/}
            {/*</TabPanel>*/}
            
            <TabPanel>
              <Intermediate/>
            </TabPanel>
            
            {/*<TabPanel>*/}
              {/*<Advance/>*/}
            {/*</TabPanel>*/}
          
          </Tabs>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default ControlRoom;
