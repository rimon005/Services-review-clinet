import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import DisplayReview from './DisplayReview';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(()=> {
        document.title = "Barrister | MyReviews"
    } ,[])


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
            fetch(`https://services-review-server.vercel.app/reviews/${id}`, {
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


    const handleUpdate = (id , e) => {
        e.preventDefault();
        const form = e.target;
        const reviewMassage = form.reviewMassage.value;

        fetch(`https://services-review-server.vercel.app/reviews/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({reviewMassage: reviewMassage})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter( rew => rew._id !== id);
                    // const approving = reviews.find( rw => rw._id === id);
                    // approving.reviewMassage = reviewMassage
                    // const updatedItem = [...remaining , approving];
                    setReviews(remaining)
                }
            })
            .catch(e => console.error(e))
    }

    return (
        <div className="overflow-x-auto w-full py-16">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Review</th>
                        <th>Info</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.length === 0 && <h2 className='text-4xl text-white text-center'> No reviews were added</h2>
                    }
                    {
                        reviews.map(review => <DisplayReview
                            review={review}
                            key={review._id}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                        ></DisplayReview>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyReviews;