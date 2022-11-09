import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import DisplayReview from './DisplayReview';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews , setReviews ] = useState([]);
    useEffect(()=> {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization : `Bearer ${localStorage.getItem("review-token")}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
    },[user?.email])
    return (
        <div className="overflow-x-auto w-full py-16">
        <table className="table w-full">
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody>
                {
                   reviews.map(review => <DisplayReview
                   review={review}
                   key={review._id}
                   ></DisplayReview>)
                }
            </tbody>
        </table>
    </div>
    );
};

export default MyReviews;