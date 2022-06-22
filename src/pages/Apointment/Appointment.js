import { format } from 'date-fns';
import React, { useState } from 'react';
import 'react-day-picker/dist/style.css';
import AvailableServices from './AvailableServices';
import Calendar from './Calendar';
import Modal from './Modal';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    const [serviceInfo, setServiceInfo] = useState([]);

    const selectedService = (service) => {
        setServiceInfo({ service, selected: format(date, 'PP') })
    }
    return (
        <section>

            <Calendar setSelected={setDate} selected={date} />

            <section className='lg:py-10 lg:px-10'>
                <h3 className='text-center text-2xl mt-6 text-secondary'>Available Services on  {format(date, 'PP')}</h3>
                <h3 className='text-center text-xl mt-3 text-gray-400'>Please select a service.</h3>

                <AvailableServices selectedService={selectedService} date={format(date, 'PP')} serviceInfo={serviceInfo} setServiceInfo={setServiceInfo} />
            </section>


        </section>
    );
};

export default Appointment;