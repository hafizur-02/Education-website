import React from 'react';
import './Subscribe.css'
const Subscribe = () => {
    return (
        <div>
            <div className="subscribe">
                <div className="subscribe-container">
                    <div className="subscribe-text">
                        <h4>SUBSCRIBE</h4>
                        <h2>To Our Newsletter</h2>
                    </div>
                    <div className="subscribe-input-box">
                          <input type="text" placeholder='Your email address'/>  
                          <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;