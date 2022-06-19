import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const Calendar = ({ selected, setSelected }) => {
    return (
        <div style={{ backgroundImage: `url(${bg})` }} class="hero lg:py-24 bg-base-100 bg-cover bg-no-repeat">
            <div class="hero-content flex-col lg:flex-row-reverse lg:w-3/4">
                <img src={chair} className='lg:w-1/2' />
                <div>
                    <DayPicker
                        mode='single'
                        selected={selected}
                        onSelect={setSelected}
                        className='shadow-2xl rounded-xl'
                    />
                </div>
            </div>
        </div>
    );
};

export default Calendar;