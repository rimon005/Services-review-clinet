import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';

const AllServices = () => {
    const services = useLoaderData()
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 py-12'>
                {
                    services.map(service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
    );
};

export default AllServices;