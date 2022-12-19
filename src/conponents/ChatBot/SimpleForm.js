import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Post from './Post';
import Get from './Get';

// all available config props
const config ={
  width: "400px",
  height: "500px",
  floating: true,
  headerTitle:'Emi Bank Bot'
};
const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#2a9df4',
    headerFontColor: 'white',
    headerFontSize: '15px',
    botBubbleColor: '#2a9df4',
    botFontColor: 'white',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

class SimpleForm extends Component {
  render() {
    return (
        <ThemeProvider theme={theme}>
      <ChatBot 
        steps={[
          {
            id:'intro', 
            message:'Do you agree to the Terms and Conditions?', 
            trigger:'intro-user',
          },
          {
            id:'intro-user', 
            options:[
            {value:'y', label:'Yes', trigger:'yes-response'},
            {value:'n', label:'No', trigger:'no-response'},
            ] 
          },
          {
            id:'yes-response', 
            message:'Great , I can speak two  languages : French and english', 
            trigger:'userRes'
          },
          {
            id:'no-response', 
            message:'Sorry to hear that.', 
          },
          {
            id:'userRes',
            user:true,
            
            asMessage:true,
            trigger:'hi'
          },
            {
                id:'hi',
                message: 'hey how can i help you'
            },
          {
            id:'post',
            component: <Post/>,
            asMessage:true,
            delay:4000,
            trigger:'userRes'
          },
        ]}
        {...config}
      />
        </ThemeProvider>
        );
      }

    }

    export default SimpleForm;
