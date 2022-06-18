import React from 'react';

const SecondSectionCard = ({ icon, color }) => {
    return (
        <div class={`card card-side text-base-100 shadow-xl ${color}`} >
            <figure>
                <img src={icon} className='ml-7' />
            </figure>
            <div class="card-body">
                <h2 class="card-title">Doctors!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div class="card-actions justify-end">
                </div>
            </div>
        </div>
    );
};

export default SecondSectionCard;