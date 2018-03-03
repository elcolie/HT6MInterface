import React, {Fragment} from 'react';
import _ from 'lodash';

export const DisplayGraph = (props) => {
  console.log('dump props');
  console.log(props);
  const {myArray} = props;
  if (_.isEmpty(myArray)){
    return (
      <Fragment>
        Waiting for input
      </Fragment>
    )
  }
  else{
    return(
      <Fragment>
        Sieg Heil 卍
      </Fragment>
    )
  }
};