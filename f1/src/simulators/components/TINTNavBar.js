import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CONTROL_ROOM, QUEUE, RESULTS, WIKI} from "../../constants";

class TINTNavBar extends Component {
  
  render() {
    const {controlRoom, queue, results, wiki} = this.props.TINTNavBarReducer;
    
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark my-navbar">
        <ul className="navbar-nav">
          
          <li className="nav-item">
            <a className={(controlRoom) ? "nav-link selected" : "nav-link"} onClick={(event) => {
              //dispatch action show the component and hid the rest of them
              this.props.hitNavBar(CONTROL_ROOM);
            }}>Control Room</a>
          </li>
          
          <li className="nav-item">
            <a className={(queue) ? "nav-link selected" : "nav-link"} onClick={(event) => {
              this.props.hitNavBar(QUEUE);
            }}>Queue</a>
          </li>
          
          <li className="nav-item">
            <a className={(results) ? "nav-link selected" : "nav-link"} onClick={(event) => {
              this.props.hitNavBar(RESULTS);
            }}>Results</a>
          </li>
          
          <li className="nav-item">
            <a className={(wiki) ? "nav-link selected" : "nav-link"} onClick={(event) => {
              this.props.hitNavBar(WIKI);
            }}>Wiki</a>
          </li>
        </ul>
      </nav>
    )
  }
}

const hitNavBar = (link) => {
  return {
    type: link,
    payload: undefined
  }
};

const mapStateToProps = (newState = {}, ownProps) => {
  return newState;
};

export default connect(mapStateToProps, {hitNavBar})(TINTNavBar);