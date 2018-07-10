import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {CHANGE_CONFIRMATION} from "../../constants";

class Confirmation extends Component {
  render() {
    const {confirmationText} = this.props.confirmationReducer;
    console.log(confirmationText);
    return (
      <Fragment>
        <h1 id={'confirmation'}>Confirmation</h1>
        <label>Comment for this discharge</label>
        <div className="ui input">
          <input type="text" placeholder="This shot is a test discharge. etc..." onChange={(event) => {
            //Will dispatch an action at this level
            this.props.changeConfirmation(event.target.value);
          }}/>
        </div>
        <a href="#set-particle-and-heatsources-params" className="btn btn-info" role="button">Back</a>
        <button className="btn btn-info"
          onClick={()=>{
            console.log(`Shooting the Intermediate endpoint here!`);
            console.log(this.props);
          }}
        >Submit</button>
      </Fragment>
    )
  }
}

const mapStateToProps = (newProps, ownProps) => {
  return newProps;
};


const changeConfirmation = (value) =>{
  return {
    type: CHANGE_CONFIRMATION,
    payload: value
  }
};

export default connect(mapStateToProps, {changeConfirmation})(Confirmation);
