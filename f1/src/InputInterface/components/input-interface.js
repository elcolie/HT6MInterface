import React, {Component} from 'react';
import {BACKEND_URL} from "../../config";
import axios from "axios/index";

class InputInterface extends Component {
  constructor(props) {
    super(props);
    this.state = {
      R: '',
      r: ''
    };
    
    this.handleChangeR = this.handleChangeR.bind(this);
    this.handleChange_r = this.handleChange_r.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChangeR(event) {
    this.setState({R: event.target.value});
  }
  
  handleChange_r(event) {
    this.setState({r: event.target.value});
  }
  
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.R);
    
    axios.post(BACKEND_URL, {
        R: this.state.R,
        r: this.state.r
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    
    event.preventDefault();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
        <li>
          <label>
            R:
            <input type="text" value={this.state.R} onChange={this.handleChangeR}/>
          </label>
        </li>
        <li>
          <label>
            r:
            <input type="text" value={this.state.r} onChange={this.handleChange_r}/>
          </label>
        </li>
        </ul>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default InputInterface;