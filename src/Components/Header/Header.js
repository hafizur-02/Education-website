import React from 'react';
import './Header.css'
import brandImage from '../../images/bright-logo-new.png'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="header-container">
                    <div className="branding">
                        <div className="brand-image">
                            <img src={brandImage} alt="" />
                        </div>
                    </div>
                    <nav className='nav-list'>
                        <ul>
                            <li>
                               <Link to={'/home'}>Home</Link>
                            </li>
                            <li>
                                  <Link to={'/services'}>Services</Link>
                            </li>
                            <li>
                                 <Link to={'/about'}>About</Link>
                            </li>
                            <li>
                               <Link to={'/contact'}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;