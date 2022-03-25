import './singleService.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleServices = () => {
    const[ services , setServices ] = useState([]) ;
    const [ service , setService ] = useState({})

    const { id } = useParams() ;
    useEffect( () => {
        fetch('/fakeData.json')
        .then( res => res.json())
        .then( data => setServices( data))
    },[]) ;

    useEffect(() => {
      const service =   services.find( service =>  service.key === id ) 
      setService(service);
    },[services])

    

    return (
        <div className='single-service-container'>
            <div className="single-service">
                <div className="image">
                    <img src={service?.img} alt="" />
                </div>
                <div className="text">
                    <h1>#{service?.name}</h1>  
                    <h3>Price: {service?.price}</h3>
                    <p>{service?.description}</p>  
                    <button>Start Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleServices;