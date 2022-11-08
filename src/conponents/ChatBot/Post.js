import React, { Component } from 'react';
import { FaThemeisle } from 'react-icons/fa';


class Post extends Component {

  constructor(props) {
    super(props);
    const {steps} = this.props;
    const {userRes} = steps;
    this.state =  {userRes};
    const resultat = "";
  }
  setResult(result){
    this.resultat=result;
  }
  async componentDidMount() {
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "content":this.state.userRes.value
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'};
  const response = fetch("http://localhost:8081/chatbot", requestOptions)
  .then(response => response.text())
  .then(result => this.setResult(result))
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  
  }

  render() {
    return (
      this.resultat
      );
    } 
  };


  export default Post;