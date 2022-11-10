import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Facility from './Facility';
import ServicesReview from './ServicesReview';

const ServiceDetails = () => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const from = location?.search?.from?.pathname || '/login'
    const service = useLoaderData();
    const { title, img, description, facility , _id , service_id} = service;

    const [reviews , setReviews] = useState([])

    const handleReview = (event) => {
        if(!user?.uid){
            return navigate(from , {replace : true})
        }
        else{

            event.preventDefault();
            const form = event.target;
            const name = `${form.firstName.value} ${form.lastName.value}`;
            const email = user?.email || 'unregistered'
            const reviewTitle = form.reviewTitle.value;
            const reviewMassage = form.reviewMassage.value;
            // console.log(name , email , reviewTitle , reviewMassage);
    
            const review = {
                name,
                user,
                email,
                service_id,
                reviewTitle,
                reviewMassage,
                id:_id
            }
            fetch('https://services-review-server-rimon005.vercel.app/reviews', {
                method:"POST" , 
                headers: {
                    "content-type" : "application/json"
                },
                body: JSON.stringify(review)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset()
                if(data?.acknowledged){
                    alert('Thanks for review')
                }
            })
            .catch(e => console.error(e))
        }
        
    }


    useEffect(()=> {
        fetch(`https://services-review-server-rimon005.vercel.app/review?service_id=${service_id}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setReviews(data)
        })
    },[service_id])
    return (
        <div>
            <div className="card lg:card-side grid details-card bg-base-100 p-7">
                <div>
                    <figure><img src={img} alt="Album" /></figure>
                    <h2 className='text-3xl my-3 font-bold title'>{title}</h2>
                    <h2 className='my-4'>{description}</h2>
                </div>
                <div className='p-0'>
                    {
                        facility?.map((fa, uid) => <Facility
                            key={uid}
                            fa={fa}
                        ></Facility>)
                    }
                </div>
            </div>
            <div className='flex my-6 justify-center'>
                <Link>
                    <button className='review-btn btn btn-outline rounded-none'>Write A Review</button>
                </Link>
            </div>
            <div className='bg-slate-200 my-10 '>
                {
                    reviews.map(review => <ServicesReview
                    review={review}
                    key={review._id}
                    ></ServicesReview>)
                }
            </div>
            <div>
            <div className='py-12 bg-gray-200 p-6 mb-12'>
                <form onSubmit={handleReview} >
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <input name='firstName' type="text" placeholder="First Name" required className="input input-bordered input-accent w-full rounded-none" />
                        <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered input-accent w-full rounded-none" />
                        <input name='reviewTitle' type="text" placeholder="Review Title" required className="input input-bordered input-accent w-full rounded-none" />
                        <input name='email' type="text" placeholder="Email" defaultValue={user?.email} readOnly className="input input-bordered input-accent w-full rounded-none" />
                    </div>
                    <div className='my-5'>
                        <textarea name='reviewMassage' required className="textarea textarea-warning w-full rounded-none h-48" placeholder="Review"></textarea>
                    </div>
                    <input type="submit" value="Post Review"  className="btn rounded-none review-btn btn-outline w-full" />
                </form>
            </div>
        </div>
        </div>
    );
};

export default ServiceDetails;