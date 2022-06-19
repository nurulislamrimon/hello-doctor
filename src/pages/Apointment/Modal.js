import { format } from 'date-fns';
import React from 'react';

const Modal = ({ selected, service }) => {
    console.log(service);
    return (
        <div>

            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className='font-bold mb-4'>{service?.name}</h3>
                    <div className="grid gap-5">
                        <input class="input input-bordered w-full" type="text" value={format(selected, 'PP')} disabled />
                        <select class="select w-full select-bordered">
                            {service?.slots?.map(slot => <option>{slot}</option>)}
                        </select>

                        <input class="input input-bordered w-full" type="text" placeholder='Full Name' />
                        <input class="input input-bordered w-full" type="text" placeholder='Phone Number' />
                        <input class="input input-bordered w-full" type="text" placeholder='Email' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;