import React from 'react';

const SecondSectionCard = ({ icon, color }) => {
    return (
        <div className={`card card-side text-base-100 shadow-xl ${color}`} >
            <figure>
                <img src={icon} className='ml-7' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Doctors!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    );
};

export default SecondSectionCard;