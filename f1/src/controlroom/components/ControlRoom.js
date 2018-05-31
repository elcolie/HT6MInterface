import React, {Component} from 'react';

class ControlRoom extends Component {
  
  render() {
    if (this.props.controlRoom) {
      return (
        <div>
          This is control room
        </div>
      )
    } else {
      return null;
    }
  }
}

export default ControlRoom;