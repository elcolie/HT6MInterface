import React, {Component, Fragment} from 'react';
import tokamakConfig from './Configuration_icon_by_obsilion.png';

class Advance extends Component {
  render() {
    return (
      <Fragment>
        <h1>Please provide necessary information for the operation</h1>
        <img src={tokamakConfig} alt={'tokamak configuration'} />
      </Fragment>
    )
  }
}

export default Advance;
