import React, { useEffect } from 'react';
import { useState } from 'react';

const DisplayReview = ({ review , handleDelete , handleUpdate}) => {
    console.log(review);
    const { name,reviewTitle , price , service_id , user , id} = review;
    // console.log(id);
    const [reviewService, setReviewService] = useState({})
    useEffect(()=> {
        fetch(`http://localhost:5000/services/${id}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setReviewService(data)
        })
    },[id])


    return (
        <tr>
            {/* <th>
                <label onClick={() => handleDelete(_id)}>
                    <XCircleIcon />
                </label>
            </th> */}
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className=" w-16 h-16">
                            {
                                reviewService?.img &&
                                <img src={reviewService.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{reviewTitle}</div>
                    </div>
                </div>
            </td>
            <td>
                {user?.email}
                <br />
                <span>Fee${reviewService?.price}</span>
            </td>
            <td>Purple</td>
            {/* <th>
                <button 
                onClick={()=> handleUpdate(_id)}
                className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
            </th> */}
        </tr>
    );
};

export default DisplayReview;