import { format } from 'date-fns';
import React, { useState } from 'react';
import 'react-day-picker/dist/style.css';
import Calendar from './Calendar';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <section>

            <Calendar setSelected={setSelected} selected={selected} />

            <h3 className='text-center text-2xl mt-6 text-secondary'>Available Services on  {format(selected, 'PP')}.</h3>


        </section>
    );
};

export default Appointment;