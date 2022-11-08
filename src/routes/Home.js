import React from 'react';
import App from '../App';
import ChatBot from '../conponents/ChatBot';
import Footer from '../conponents/Footer';
import Navbar from '../conponents/Navbar'
import Video from '../conponents/Video';
import SimpleForm from '../conponents/ChatBot/SimpleForm';
    const Home = () => {
    return (
        <div>
            <Navbar/>
            <Video/>
            <Footer/>
            <SimpleForm/>
        </div>
    );
}

export default Home;