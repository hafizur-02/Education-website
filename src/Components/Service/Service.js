import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import './Service.css'
const Service = (props) => {
    const{ key , title , img , date , introdction } = props.service ;
    return (
        <div>
            <div className="service-container">
                <div className="service-card">
                    <div className="image">
                        <img src={img} alt="" />
                    </div>
                    <div className="title">
                        <h2>{title}</h2>
                        <span><FontAwesomeIcon icon={faCalendar} className='icon'/>{date}</span>
                        <p>{introdction}</p>
                        <Link to={`/services/${key}`} className='button'>Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;