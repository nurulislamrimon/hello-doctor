import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Utilities/Spinner/Spinner';
import Modal from './Modal';

const AvailableServices = ({ selectedService, date, serviceInfo, setServiceInfo }) => {
    const { data: services, isLoading, refetch } = useQuery(['services', date], () =>
        fetch(`http://localhost:5000/services?date=${date}`)
            .then(res => res.json())
    )

    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='grid lg:grid-cols-3 gap-5 pt-10 px-3'>
            {services?.map(service =>
                <div key={service?._id} className='text-center py-10 shadow-lg rounded-xl grid gap-5 justify-center'>
                    <h1 className='text-lg font-bold text-secondary'>{service?.name}</h1 >
                    {service?.slots?.length > 0 ? <div>
                        <p>{service?.slots[0]}</p>
                        <p> Available Slot: {service?.slots?.length} </p>
                    </div> : <p className='text-red-600'>No Slots Available</p>}
                    <label htmlFor="my-modal" className="btn bg-gradient-to-r from-secondary to-primary text-base-100 border-none" onClick={() => selectedService(service)} disabled={!service?.slots?.length}>Book Appointment</label>
                </div>)
            }

            {serviceInfo && <Modal serviceInfo={serviceInfo} setServiceInfo={setServiceInfo} refetch={refetch} />}
        </div >
    );
};

export default AvailableServices;