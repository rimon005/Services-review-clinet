import React from 'react';

const ServicesReview = ({ review }) => {
    // console.log(review);
    const { reviewMassage, name, reviewTitle, user } = review;
    return (
        <div className=' review pl-12 py-5 my-3 text-black'>
            <div className='flex items-center'>
                <div >
                    {
                        user?.photoURL ?
                            <img className="mask mr-6 mb-3 mask-circle w-12 h-12" src={user?.photoURL} alt="" />
                            :
                            <img className="mask mr-6 mb-3 mask-circle w-12 h-12" src="https://placeimg.com/80/80/people" alt='' />
                    }
                </div>
                <div>
                    <h1 className='text-xl'>{name}</h1>
                    <h1>{reviewTitle}</h1>
                </div>
            </div>
            <div>
                <h1 className='text-3xl font-bold text-black'>Review:</h1>
                <h1 className='font-medium'>{reviewMassage}</h1>
                
            </div>
        </div>
    );
};

export default ServicesReview;