import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Service from './Service';
import './Servies.css'
const Services = () => {
    const [services , setServices ] = useState([])
    useEffect(()=> {
        fetch('https://services-review-server-rimon005.vercel.app/services')
        .then(res => res.json())
        .then(data => {
           setServices(data)
        })
    },[])

    return (
        <div>
            <div className='text-center services'>
                <h1 className='text-3xl mb-3'>Here Our Best Work</h1>
                <h1 className='text-5xl mb-3'>How Can We Help You</h1>
                <hr  className='w-16 mx-auto'/>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 py-12'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
            <Link to='/services' className=' flex justify-center'>
                <button className='btn contact-btn rounded-none border-none text-white'>More service</button>
            </Link>
        </div>
    );
};

export default Services;