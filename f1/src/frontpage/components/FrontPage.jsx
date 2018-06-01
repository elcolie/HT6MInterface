import React, {Component, Fragment} from 'react';
import welcomeHeader from './welcomeHeader';
import welcomeFooter from "./welcomeFooter";
import Login from "./login";

class FrontPage extends Component {
  render() {
    
    return (
      <Fragment>
        {welcomeHeader()}
        
        <Login/>
        
        
        {welcomeFooter()}
      
      </Fragment>
    
    )
  }
}

export default FrontPage;
