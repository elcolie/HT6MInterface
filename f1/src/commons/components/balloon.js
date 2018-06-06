import React, {Component, Fragment} from 'react';
import _ from 'lodash'

class BalloonNotification extends Component{
  
  render(){
    console.log(`balloon`);
    console.log(this.props);
    const {basicControlRoomReducer} = this.props.props;
    console.log(basicControlRoomReducer);
    if (_.isEmpty(basicControlRoomReducer)){
      return null;
    }else{
      console.log(`return render with value`);
      const {message, statusCode} = basicControlRoomReducer;
      if (statusCode === 200){
        return(
          <Fragment>
            <p>Need to let it fade out</p>
            <p>{message}</p>
          </Fragment>
        )
      }
      else{
        return null;
      }
    }
  }
}

export default BalloonNotification;
