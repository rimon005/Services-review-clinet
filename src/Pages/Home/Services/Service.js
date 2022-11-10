import React, { useEffect } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import '../Services/Servies.css'

const Service = ({ service }) => {

    // useEffect(()=> {
    //     document.title = "Barrister | services"
    // } ,[])
    // console.log(service);
    const { description, title, img, price, _id } = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl rounded-none p-5 border">
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure className='service-img'><img src={img} alt="" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='description'>{description}</p>
                <div className='flex items-center'>
                    <p className='text-xl font-bold price'>Fee: $ {price}</p>
                    <Link to={`/service/${_id}`} className='btn contact-btn rounded-none border-none text-white'>
                        <button>
                            Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;