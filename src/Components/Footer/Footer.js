import React from 'react';
import './Footer.css';
import news1Image from '../../images/img1-150x150.jpg'
import news2Image from '../../images/model-2339867_1280-150x150.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faPhone , faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF , faTwitter, faGooglePlusG , faLinkedinIn , faYoutube} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-content">
                        <div className="contact-info">
                            <div className="contact-title">
                                <h2>Contact Info</h2>
                            </div>
                            <div className="contact-text">
                                <p>A powerhouse of cutting-edge education, research and teaching in The World</p>
                                <ul>
                                    <li>
                                        <FontAwesomeIcon icon={faHome} className='icon' />
                                        Sydney NSW 2052, Australia
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faPhone}  className='icon'/>
                                       +61 2 9385 1000
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faEnvelope} className='icon'/>
                                       hello@brightuniversity.edu
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="latest-news">
                            <div className="news-title">
                                <h2>latest News</h2>
                            </div>
                            <div className="news-text">
                                <div className="news-1">
                                    <div className="news-img">
                                        <img src={news1Image} alt="" />
                                    </div>
                                    <div className="news-inner-text">
                                        <a href="#d">Top 10 Books You Must Read in 2017</a> 
                                        <br />
                                        <span>July 3, 2017</span>
                                    </div>
                                </div>
                                <div className="news-2">
                                    <div className="news-img">
                                            <img src={news2Image} alt="" />
                                    </div>
                                    <div className="news-inner-text">
                                            <a href="#w">How to Improve Your Communication Skill</a>
                                            <br />
                                            <span>July 3, 2017</span>
                                    </div>            
                                </div>
                            </div>
                        </div>
                        <div className="courses">
                            <div className="course-title">
                                <h2>OUR COURSES</h2>
                                <div className="course-text">
                                    <ul>
                                        <li>
                                            <a href="">Sample Course</a>
                                        </li>
                                        <li>
                                            <a href="">Advance Javascript – ES6</a>
                                        </li>
                                        <li>
                                            <a href="">Android App Development</a>
                                        </li>
                                        <li>
                                            <a href="">Photoshop Design Like A PRO</a>
                                        </li>
                                        <li>
                                            <a href="">WordPress for Intermediate</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     
                <div className="site-info">
                    <div className="site-info-container">
                        <div className="site-info-text">
                            <span>© Copyright Bright 2020</span>
                        </div>
                        <div className="social-icon">
                            <ul>
                                 <li>
                                    <a href="">
                                        <FontAwesomeIcon icon={faFacebookF} className='brand-icon'/>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <FontAwesomeIcon icon={faTwitter} className='brand-icon'/>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <FontAwesomeIcon icon={faGooglePlusG} className='brand-icon'/>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <FontAwesomeIcon icon={ faLinkedinIn} className='brand-icon'/>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <FontAwesomeIcon icon={faYoutube} className='brand-icon'/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Footer;