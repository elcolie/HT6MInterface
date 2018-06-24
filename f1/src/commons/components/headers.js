import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {getAuthToken, removeAuthToken} from "../../utils";
import {GET_USERNAME} from "../../constants";
import {withRouter} from 'react-router-dom';
import tintBanner from './tint-banner.png';

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
    this.props.getUsername();
  };
  
  clicked(event, history) {
    removeAuthToken();
    history.push('/');
  };
  
  render() {
    
    const {username} = this.props;
    return (
      <Fragment>
        <div>
          <img src={tintBanner} alt="TINT Banner" className='tint-banner'/>
          <span className='my-vertical'>
            <label>Welcome {username}</label>
            <button type="submit" onClick={(event) => {
              //A bit hacky here since `this.props.history` does not present in
              //clicked() context
              this.clicked(event, this.props.history);
            }}>Logout</button>
          </span>
        </div>
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

export default withRouter(connect(mapStateToProps, {getUsername})(Header));
