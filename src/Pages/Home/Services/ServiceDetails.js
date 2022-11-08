import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Facility from './Facility';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { title, img, description, facility } = service;
    return (
        <div className="card lg:card-side grid details-card bg-base-100 shadow-xl p-7">
            <div>
                <figure><img src={img} alt="Album" /></figure>
                <h2 className='my-4'>{description}</h2>
            </div>
            <div className='grid grid-cols-2 gap-3 p-0'>
                {
                    facility.map((fa, uid) => <Facility
                        key={uid}
                        fa={fa}
                    ></Facility>)
                }
            </div>
        </div>
    );
};

export default ServiceDetails;