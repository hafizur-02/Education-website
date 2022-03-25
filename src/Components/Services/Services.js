import React, { useEffect, useState } from 'react';
import './Services.css'
import Service from '../Service/Service';

const Services = () => {
    const[ services , setServices ] = useState([]);
    useEffect(()=> {
        fetch('fakeData.json')
        .then( res => res.json())
        .then( data => setServices(data))
    } , []) ;

    return (
        <div className='services'>
            {
                services.map( service => <Service
                    key={service.key}
                    service={service}
                    ></Service>)
            }
        </div>
    );
};

export default Services;