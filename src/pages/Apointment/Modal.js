import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Modal = ({ serviceInfo, setServiceInfo, refetch }) => {
    const [user] = useAuthState(auth);
    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceName = serviceInfo?.service?.name;
        const date = e.target.date.value;
        const time = e.target.time.value;
        const userName = e.target.userName.value;
        const mobile = e.target.mobile.value;
        const email = e.target.email.value;
        const newAppointment = { serviceName, date, time, userName, mobile, email }
        fetch(`http://localhost:5000/appointment`, {
            method: 'POST',
            headers: { 'content-type': "application/json" },
            body: JSON.stringify(newAppointment)
        })
            .then(res => res.json())
            .then(data => data.acknowledged ? toast.success(`You made an appointment for ${date} time ${time}`) : toast.warn('Looks like you already have an appointment!'))

        refetch();
        setServiceInfo(null);

    }
    return (
        <div>

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit}>
                        <h3 className='font-bold mb-4'>{serviceInfo?.service?.name}</h3>
                        <div className="grid gap-5">
                            <input className="input input-bordered w-full" type="text" name='date' value={serviceInfo?.selected || ''} disabled />
                            <select name='time' className="select w-full select-bordered">
                                {serviceInfo?.service?.slots?.map(slot => <option key={slot}>{slot}</option>)}
                            </select>
                            <input name='userName' className="input input-bordered w-full" type="text" value={user?.displayName || ''} disabled />
                            <input name='mobile' className="input input-bordered w-full" type="text" placeholder='01*********' required />
                            <input name='email' className="input input-bordered w-full" type="text" value={user?.email || ''} disabled />
                            <button className='py-5 btn w-full'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;