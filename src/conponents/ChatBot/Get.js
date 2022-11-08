import React, { Component } from 'react';
import axios from 'axios';


class Get extends Component {
  constructor(props) {
    super(props);
    const {steps} = this.props;
    const {userRes} = steps;
    this.state =  {userRes};
  }


  componentDidMount() {
    axios.get('http://localhost:8081/phrase', {
        params: {
          ID: 12345
        }
      })
      .then(function (response) {
        console.log(response);
      })
    
  }
  

  render() {
    return (
      <div></div>
      );
    }
  };


  export default Get;