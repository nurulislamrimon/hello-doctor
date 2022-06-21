import React from 'react';

const Service = ({ photo, title }) => {
    return (
        <div className="card card-compact bg-base-100 shadow-xl my-5">
            <figure><img src={photo} alt="Shoes" className='py-3' /></figure>
            <div className="card-body">
                <h2 className="text-xl font-bold text-center">{title}</h2>
                <p className='text-center'>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    );
};

export default Service;