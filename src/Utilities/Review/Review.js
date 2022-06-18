import React from 'react';

const Review = ({ userPhoto }) => {
    return (
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perspiciatis exercitationem mollitia repellat.</small>
                <div class="card-actions mt-5 items-center">
                    <div class="avatar">
                        <div class="w-10 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
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