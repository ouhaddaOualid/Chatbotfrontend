import React from "react";
import './VideoStyle.css'
import bankVideo from '../assets/Bank stock video-NO COPYRIGHT VIDEO.mp4'
import { Link } from "react-router-dom";
const Video =() =>{
    return(
        <div className="hero">
            <video autoPlay loop muted id="video">
                <source src={bankVideo} type='video/mP4' />
            </video>
        <div className="content">
            <h1> EMI BANKING</h1>
            <p> First Emi baking app</p>
            <div>
                <Link to ='/contact' className='btn'>Contact </Link>
                <Link to='/About' className="btn btn-light">About us</Link>
            </div>
        </div>


        </div>
    )
}
export default Video
