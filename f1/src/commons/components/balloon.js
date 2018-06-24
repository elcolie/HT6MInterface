import {Component} from 'react';
import {message as antd_message} from 'antd';

class BalloonNotification extends Component {
  componentDidUpdate() {
    const {message, statusCode} = this.props.props;
    if (statusCode === 200) {
      antd_message.success(message);
      return null;
    }
    else if (statusCode === 500) {
      antd_message.error(message);
      return null;
    }
    else {
      return null;
    }
  }
  
  render() {
    /*
    * The React is requires render() to be a pure function
    * antd_message in here will not qualified
    * Therefore I have to follow the warning message by putting
    * It to `componentDidUpdate()`
    */
    return null;
  }
}

export default BalloonNotification;
