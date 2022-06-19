import { format } from 'date-fns';
import React from 'react';

const Modal = ({ selected, service }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedService = service;
        const date = e.target.date.value;
        const time = e.target.time.value;
        const userName = e.target.userName.value;
        const mobile = e.target.mobile.value;
        const email = e.target.email.value;
        const newBooking = { selectedService, date, time, userName, mobile, email }
        console.log(newBooking);
    }
    return (
        <div>

            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit}>
                        <h3 className='font-bold mb-4'>{service?.name}</h3>
                        <div className="grid gap-5">
                            <input class="input input-bordered w-full" type="text" name='date' value={format(selected, 'PP')} disabled />
                            <select name='time' class="select w-full select-bordered">
                                {service?.slots?.map(slot => <option key={slot}>{slot}</option>)}
                            </select>
                            <input name='userName' class="input input-bordered w-full" type="text" placeholder='Full Name' required />
                            <input name='mobile' class="input input-bordered w-full" type="text" placeholder='Phone Number' required />
                            <input name='email' class="input input-bordered w-full" type="text" placeholder='Email' required />
                            <button className='py-5 btn w-full'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;