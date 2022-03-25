import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <div className="contact">
                <div className="contact-container">
                    <div className="contact-content">
                        <div className="contact-title">
                            <h3>Contact Us</h3>
                            <p>For Customer Support, Send us a note.</p>
                        </div>
                        <div className="contact-form">
                            <form action="">
                                <input type="text" placeholder='Enter Your Name'/>
                                <input type="text" placeholder='Enter Your Email'/>
                                <textarea name="" id="" cols="45" rows="5"  placeholder='Enter Your Query'></textarea>
                            </form>
                            <button>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;