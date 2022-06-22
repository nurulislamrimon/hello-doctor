import { format } from 'date-fns';
import React, { useState } from 'react';
import 'react-day-picker/dist/style.css';
import AvailableServices from './AvailableServices';
import Calendar from './Calendar';
import Modal from './Modal';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    const [service, setService] = useState([]);

    const selectedService = (service) => {
        setService(service)
    }
    return (
        <section>

            <Calendar setSelected={setSelected} selected={selected} />

            <section className='lg:py-10 lg:px-10'>
                <h3 className='text-center text-2xl mt-6 text-secondary'>Available Services on  {format(selected, 'PP')}</h3>
                <h3 className='text-center text-xl mt-3 text-gray-400'>Please select a service.</h3>

                <AvailableServices selectedService={selectedService} date={format(selected, 'PP')} />
                <Modal selected={selected} service={service} />
            </section>


        </section>
    );
};

export default Appointment;