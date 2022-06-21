import React from 'react';

const Review = ({ userPhoto }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perspiciatis exercitationem mollitia repellat.</small>
                <div className="card-actions mt-5 items-center">
                    <div className="avatar">
                        <div className="w-10 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                            <img src={userPhoto} />
                        </div>
                    </div>
                    <div className='ml-2'>
                        <h5 className='font-bold'>Winson Herry</h5>
                        <p>California</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;