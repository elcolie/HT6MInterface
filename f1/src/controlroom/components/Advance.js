import React, {Component, Fragment} from 'react';
import tokamakConfig from './Configuration_icon_by_obsilion.png';
import {Form} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {SUBMIT_ADVANCED_FORM} from "../../constants";
import BalloonNotification from "../../commons/components/balloon";

class Advance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      comment: '',
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChangeFileField = this.onChangeFileField.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
    this.onChangeCommentField = this.onChangeCommentField.bind(this);
  }
  
  fileUpload(file, comment) {
    this.props.submitAdvancedForm({file, comment});
  }
  
  onFormSubmit(e) {
    e.preventDefault(); // Stop form submit
    this.fileUpload(this.state.file, this.state.comment);
  }
  
  onChangeFileField(e) {
    this.setState({file: e.target.files[0]})
  }
  
  onChangeCommentField(e) {
    this.setState({comment: e.target.value})
  }
  
  render() {
    console.log(this.props.advancedControlRoomReducer);
    return (
      <Fragment>
        <h1>Please provide necessary information for the operation</h1>
        <BalloonNotification props={this.props.advancedControlRoomReducer}/>
        <span id='img-form'>
          <img src={tokamakConfig} alt={'tokamak configuration'}/>
          <Form onSubmit={this.onFormSubmit}>
            <table id='advance-table'>
              <tbody>
                <tr>
                  <td><b>Load input file</b></td>
                  <td><input name={'file'} type='file' onChange={this.onChangeFileField}/></td>
                </tr>
              <tr>
                <td><b>Comment</b></td>
                <td><input name={'comment'} type={'text'} placeholder={'This is an advanced mode'}
                           onChange={this.onChangeCommentField}/></td>
              </tr>
              <tr>
                <td><Form.Button type={'submit'}>Submit</Form.Button></td>
                <td></td>
              </tr>
              </tbody>
            </table>
            
          </Form>
        </span>
      </Fragment>
    )
  }
}

const submitAdvancedForm = (data) => {
  return {
    type: SUBMIT_ADVANCED_FORM,
    payload: data
  }
};

const mapStateToProps = (newProps, ownProps) => {
  return newProps;
};

export default connect(mapStateToProps, {submitAdvancedForm})(Advance);
