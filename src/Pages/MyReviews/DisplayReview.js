import React, { useEffect } from 'react';
import { useState } from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DisplayReview = ({ review, handleDelete , handleUpdate}) => {
    // console.log(review);
    const { name, reviewTitle, _id, user, id, reviewMassage } = review;
    // console.log(id);
    const [reviewService, setReviewService] = useState({})
    useEffect(() => {
        fetch(`https://services-review-server-rimon005.vercel.app/services/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setReviewService(data)
            })
    }, [id])


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
            <p className='mb-7'>
                {reviewMassage}
            </p>
            <td>
                {user?.email}
                <br />
                <span>Fee${reviewService?.price}</span>
            </td>
            <td>


                {/* The button to open modal */}
                <label htmlFor="my-modal" className="btn">
                    <FaEdit />
                </label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <div className='py-12 p-6 mb-12'>
                            <form onSubmit={() => handleUpdate(_id)}>
                                <div className='my-5'>
                                    <textarea name='reviewMassage' defaultValue={reviewMassage} required className="textarea textarea-warning w-full rounded-none h-48" placeholder="reviewMassage"></textarea>
                                </div>
                                <input type="submit" value="Update Review" className="btn contact-btn rounded-none mr-5 border-none text-white" />
                            </form>
                        </div>
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn">Back</label>
                        </div>
                    </div>
                </div>
            </td>
        </tr>

    );
};

export default DisplayReview;