import React from 'react';

const Facility = ({fa}) => {
    const {name , details} = fa;
    return (
        <div className="card bg-gray-700 text-primary-content">
            <div className="card-body p-10 facility">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default Facility;