import React from 'react';
import './NotFound.css';
import errorImage from '../../images/404 error with people holding the numbers-pana.svg'
import { useNavigate } from 'react-router-dom';
const NotFound = () => {
    const navigate = useNavigate() ;
    const clickHandler = () => {
        navigate('/home');
    }
    return (
        <div className='error-page'>
            <div className="error-image">
                <img src={errorImage} alt="" />
            </div>
            <button onClick={clickHandler}>Home</button>
        </div>
    );
};

export default NotFound;