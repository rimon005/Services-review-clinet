import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import DisplayReview from './DisplayReview';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);


    // find reviews by email address


    useEffect(() => {
        fetch(`https://services-review-server-rimon005.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("review-token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setReviews(data)

            })
    }, [user?.email]);

    //  delete review by id ;


    const handleDelete = id => {
        const proceed = window.confirm("Are you sure, you want to delete this review")
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Successfully Deleted The Review');
                        const remaining = reviews.filter(re => re._id !== id)
                        setReviews(remaining)
                    }
                })
                .catch(e => console.error(e))
        }
    }
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
                            handleDelete={handleDelete}
                        ></DisplayReview>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyReviews;