import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {getAuthToken} from "../../utils";
import {GET_USERNAME} from "../../constants";

class Header extends Component {
  /*
  *
  * Get the token from localStorage
  * If token does not present kick back to login page
  * If token has been expire then refresh it again
  *
  * */
  constructor(props) {
    super(props);
    this.state = {
      token: getAuthToken(),
      username: undefined
    };
    this.props.getUsername({history: this.props.history});
  }
  
  
  render() {
    const {username, statusCode} = this.props;
    return (
      <Fragment>
        Welcome {username}!
      </Fragment>
    )
  }
}

const getUsername = () => {
  return {
    type: GET_USERNAME,
    payload: undefined,
  }
};

const mapStateToProps = ({localTokenReducer}, ownProps) => {
  return localTokenReducer;
};

export default connect(mapStateToProps, {getUsername})(Header);