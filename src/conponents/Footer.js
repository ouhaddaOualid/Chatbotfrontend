import React from 'react'
import './FooterStyle.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaSearchLocation size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />
                        <div>
                            <p>Avenu ibn sina.</p>
                            <h4>Rabat , Agdal</h4>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> 1-800-123-1234</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> emibank@emi.com</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About the company</h4>
                    <p>"EmiBank is a banking web site that  alows you to a secure and easy banking transactions"</p>
                    <div className='social'>
                        <FaFacebook size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        <FaTwitter size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        <FaLinkedin size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer