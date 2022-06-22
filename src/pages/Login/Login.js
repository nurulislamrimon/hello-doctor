import React from 'react';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [
        signInWithGoogle,
        user, loading, error,
    ] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

    const onSubmit = data => {
        console.log(data);
    }
    if (user) {
        navigate(from, { replace: true })
    }

    return (
        <section className='flex flex-col justify-center lg:w-2/4 mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)} className='grid gap-5'>
                <div className="form-control w-full">
                    <input className='input input-bordered w-full' placeholder='Email address' type="text"
                        {...register('email', {
                            required: true,
                            pattern: /[a-z1-9]+@+.+[a-z]/,
                        })} />
                    <label className="label">
                        {errors.email?.type === 'required' && <small className='text-red-500'>Email is required</small>}
                        {errors.email?.type === 'pattern' && <small className='text-red-500'>Email should be valid</small>}
                    </label>
                </div>
                <div className="form-control w-full">
                    <input className='input input-bordered w-full' placeholder='Password' type="password"
                        {...register('password', {
                            required: true,
                            minLength: 6,
                        })} />
                    <label className="label">
                        {errors.password?.type === 'required' && <small className='text-red-500'>password is required</small>}
                        {errors.password?.type === 'pattern' && <small className='text-red-500'>password should be valid</small>}
                    </label>
                </div>
                <button className='btn w-full'>Submit</button>
            </form>
            <div className="divider">OR</div>
            <button onClick={() => signInWithGoogle()} className='btn'>Signin with Google</button>
        </section>
    );
};

export default Login;