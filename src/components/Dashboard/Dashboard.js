import React, { Component } from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
  constructor(){
    super();
    this.state={
      houses: []
    }
  }

  componentDidMount(){
    axios.get('/api/houses').then(res => 
    this.setState({
      houses: res.data
    }))
  }
  

  render() {
    const house = this.state.houses.map(house => {
      return(
        <div key={house.id}>
          <House Houses={this.house}
          name={house.name}
          adress= {house.address}
          city= {house.city}
          state= {house.state}
          zip= {house.zip}
          />
        </div>
      )
    })
    return (
      <div>
        Dashboard
        {house}
        <Link to='/wizard'><button>Add New Property</button></Link>
      </div>
    );
  }
}

export default Dashboard;