import React, { useEffect } from 'react';
import { useState } from 'react';
import { FaTrashAlt} from 'react-icons/fa';

const DisplayReview = ({ review , handleDelete }) => {
    // console.log(review);
    const { name,reviewTitle , _id , user , id} = review;
    // console.log(id);
    const [reviewService, setReviewService] = useState({})
    useEffect(()=> {
        fetch(`https://services-review-server-rimon005.vercel.app/services/${id}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setReviewService(data)
        })
    },[id])


    return (
        <tr>
            <th>
                <label onClick={() => handleDelete(_id)}>
                    <FaTrashAlt />
                </label>
            </th>
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