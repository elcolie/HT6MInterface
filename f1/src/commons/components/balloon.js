import React, {Component} from 'react';
import _ from 'lodash';
import {message as antd_message} from 'antd';

class BalloonNotification extends Component {
  render() {
    const {basicControlRoomReducer} = this.props.props;
    if (_.isEmpty(basicControlRoomReducer)) {
      return null;
    } else {
      const {message, statusCode} = basicControlRoomReducer;
      if (statusCode === 200) {
        antd_message.success('Processing complete!');
        return null;
      }
      else if (statusCode === 500) {
        antd_message.error('Network connection error. Try again later');
        return null;
      }
      else {
        return null;
      }
    }
  }
}

export default BalloonNotification;
