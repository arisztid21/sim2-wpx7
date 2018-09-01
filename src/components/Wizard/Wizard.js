import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Wizard extends Component {
  constructor(){
    super();
    this.state={
      name: '',
      address: '',
      city: '',
      state: '',
      zip: 0
    }
    this.inputName=this.inputName.bind(this);
    this.inputAddress=this.inputAddress.bind(this);
    this.inputCity=this.inputCity.bind(this);
    this.inputState=this.inputState.bind(this);
    this.inputZip=this.inputZip.bind(this);
  }
  inputName(val){
    this.setState({
      name: val
    })
  }
  inputAddress(val){
    this.setState({
      address: val
    })
  }
  inputCity(val){
    this.setState({
      city: val
    })
  }
  inputState(val){
    this.setState({
      state: val
    })
  }
  inputZip(val){
    this.setState({
      zip: val
    })
  }
  render() {
    return (
      <div>
        Wizard
        <input onChange={(e)=>this.inputName(e.target.value)} placeholder='input name'/>
        <input onChange={(e)=>this.inputAddress(e.target.value)} placeholder='input address'/>
        <input onChange={(e)=>this.inputCity(e.target.value)} placeholder='input city'/>
        <input onChange={(e)=>this.inputState(e.target.value)} placeholder='input state'/>
        <input onChange={(e)=>this.inputZip(e.target.value)} placeholder='input zip'/>
        <Link to='/'><button>Cancel</button></Link>
      </div>
    );
  }
}

export default Wizard;