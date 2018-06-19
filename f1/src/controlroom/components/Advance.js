import React, {Component, Fragment} from 'react';
import tokamakConfig from './Configuration_icon_by_obsilion.png';
import {Form} from 'semantic-ui-react';
import {post} from 'axios';
import {getAuthToken, prepareJWTHeader} from "../../utils";

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
  
  //TODO: Implement `redux-saga` in order to control the `axios` state
  fileUpload(file, comment) {
    const url = 'http://localhost:8000/api/advanced-cases/';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('comment', comment);
    const config = {
      headers: {
        'Authorization': prepareJWTHeader(getAuthToken()),
        'content-type': 'multipart/form-data'
      }
    };
    return post(url, formData, config)
  }
  
  onFormSubmit(e) {
    e.preventDefault(); // Stop form submit
    this.fileUpload(this.state.file, this.state.comment).then((response) => {
      console.log(response.data);
    })
  }
  
  onChangeFileField(e) {
    this.setState({file: e.target.files[0]})
  }
  
  onChangeCommentField(e) {
    this.setState({comment: e.target.value})
  }
  
  
  render() {
    return (
      <Fragment>
        <h1>Please provide necessary information for the operation</h1>
        <img src={tokamakConfig} alt={'tokamak configuration'}/>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Group inline>
            <label>Load input file</label>
            <input name={'file'} type='file' onChange={this.onChangeFileField}/>
          </Form.Group>
          
          <Form.Group inline>
            <label>Comment</label>
            <input name={'comment'} type={'text'} placeholder={'This is an advanced mode'}
                   onChange={this.onChangeCommentField}/>
          </Form.Group>
          <button type={'submit'}>Submit</button>
        </Form>
      </Fragment>
    )
  }
}

export default Advance;
