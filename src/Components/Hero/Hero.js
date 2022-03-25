import React from 'react';
import './Hero.css';
import cLan from '../../images/C_Plus_Plus_Progrramming_Language.jpg';
import js from '../../images/Free Courses to learn JavaScript.jpg';
import java from '../../images/og-social-java-logo.gif';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
    const navigate = useNavigate() ;
    const moreServicesHandler = () => {
        navigate('/services') ;
    }
    return (
        <div>
            <div className="hero-container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <p>Ready to Launch - School, College, University or Course Website</p>
                            <h2> EXCELLENT AND FRIENDLY FACULTY MEMBERS</h2>
                            <a href="#services">
                                <button>Get started</button>
                            </a>
                        </div>
                    </div>
            </div>
            <div className="services-section" id='services'>
                    <div className="services-section-title">
                        <h1>Our Services</h1>
                    </div>
                <div className="services-section-container">
                    <div className="single-service-section">
                        <div className="image">
                            <img src={cLan} alt="" />
                        </div>
                        <div className="text">
                            <h2>Learn C++ Within 30 Days</h2>
                            <span>November 15, 2016</span>
                            <p>C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language.</p>
                        </div>
                    </div>
                    <div className="single-service-section">
                        <div className="image">
                            <img src={js} alt="" />
                        </div>
                        <div className="text">
                            <h2>Learn Javascript Within 30 Days</h2>
                            <span>July 15, 2018</span>
                            <p>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries</p>
                        </div>
                    </div>
                    <div className="single-service-section">
                        <div className="image">
                            <img src={java} alt="" />
                        </div>
                        <div className="text">
                            <h2>Learn Java Within 30 Days</h2>
                            <span>August 15, 2018</span>
                            <p>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible</p>
                        </div>
                    </div>
                </div>
                <div className="more-services-btn">
                    <button onClick={moreServicesHandler}>More Services</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;