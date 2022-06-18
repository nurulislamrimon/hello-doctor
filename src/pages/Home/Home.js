import React from 'react';
import SetTitle from '../../Utilities/SetTitle/SetTitle';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import GradientBtn from '../../Utilities/GradientBtn/GradientBtn';
import SecondSectionCard from '../../Utilities/SecondSectionCard/SecondSectionCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import quote from '../../assets/icons/quote.svg';
import Service from '../../Utilities/Service/Service';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import fluoride from '../../assets/images/fluoride.png';
import treatment from '../../assets/images/treatment.png';
import appointment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor.png';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from '../../Utilities/Review/Review';
import Footer from '../../Utilities/Footer/Footer';

const Home = () => {
    return (
        <div>
            {/* title */}
            <SetTitle>Home</SetTitle>

            <section style={{ backgroundImage: `url(${bg})` }} class="hero min-h-screen bg-base-100 bg-cover bg-no-repeat">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className='lg:w-1/2' />
                    <div>
                        <h1 class="text-5xl font-bold">Box Office News!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <GradientBtn>Get Started</GradientBtn>
                    </div>
                </div>
            </section>

            <section className='my-5 grid lg:grid-cols-3 gap-5 lg:w-3/4 lg:mx-auto mx-3'>
                <SecondSectionCard icon={clock} color='bg-gradient-to-r from-secondary to-primary'></SecondSectionCard>
                <SecondSectionCard icon={marker} color='bg-accent'></SecondSectionCard>
                <SecondSectionCard icon={phone} color='bg-gradient-to-r from-secondary to-primary'></SecondSectionCard>
            </section>

            <section className='my-16'>
                <h4 className='text-primary uppercase text-lg font-bold text-center'> Our Services </h4>
                <h1 className='text-3xl font-bold text-center'> Services We Provide </h1>

                <div className='my-8 grid lg:grid-cols-3 gap-5 lg:w-3/4 lg:mx-auto mx-3'>
                    <Service photo={fluoride} title='Fluoride Treatment'></Service>
                    <Service photo={cavity} title='Cavity Filling'></Service>
                    <Service photo={whitening} title='Teeth Whitening'></Service>
                </div>

            </section>

            <section className='my-16'>
                <div class="hero bg-base-100 lg:w-3/4 mx-auto">
                    <div class="hero-content grid lg:grid-cols-2">
                        <img src={treatment} alt='' class="rounded" />
                        <div>
                            <h1 class="lg:text-3xl text-2xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <GradientBtn>Get Started</GradientBtn>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div class="hero my-9" style={{ backgroundImage: `url(${appointment})` }}>
                    <div class="grid lg:grid-cols-2 items-center">
                        <img src={doctor} class=" rounded-lg hidden lg:block mt-[-110px]" />
                        <div className='text-white p-6'>
                            <h1 class="text-secondary">Appointment</h1>
                            <h1 class="text-3xl font-bold">Make an appointment Today</h1>
                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <GradientBtn>Get Started</GradientBtn>
                        </div>
                    </div>
                </div>
            </section>

            <section className='px-5 lg:px-10 my-10'>
                <div className="flex justify-between">
                    <div>
                        <p className='text-secondary'>Testimonial</p>
                        <h3 className='text-2xl'>What Our Patients Says</h3>
                    </div>
                    <img src={quote} alt='' className='h-16' />
                </div>
                <div className="mt-5 grid lg:grid-cols-3 gap-5 p-3 lg:p-9">
                    <Review userPhoto={people1}></Review>
                    <Review userPhoto={people2}></Review>
                    <Review userPhoto={people3}></Review>
                </div>
            </section>

            <section style={{ backgroundImage: `url(${appointment})` }} className='my-10 py-10 bg-cover'>
                <h6 className="text-secondary text-center font-bold">Contact Us</h6>
                <h2 className='text-2xl text-center text-white'>Stay connected with us</h2>
                <div className="flex flex-col items-center">
                    <input type="text" placeholder="Email Address" class="input w-full max-w-xs my-3" />
                    <input type="text" placeholder="Subject" class="input w-full max-w-xs my-3" />
                    <textarea type="text" placeholder="Your message" class="textarea resize-none w-full max-w-xs my-3" />
                    <GradientBtn>Submit</GradientBtn>
                </div>
            </section>

            <Footer></Footer>

        </div>
    );
};

export default Home;