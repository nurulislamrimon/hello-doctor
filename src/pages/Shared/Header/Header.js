import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import CustomLink from '../../../CustomLink/CustomLink';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)
    const menus = <>
        <CustomLink to='/home' className='py-1 lg:px-4 lg:py-2 lg:mx-4 rounded'>Home</CustomLink>
        <CustomLink to='/about' className='py-1 lg:px-4 lg:py-2 lg:mx-4 rounded'>About</CustomLink>
        <CustomLink to='/appointment' className='py-1 lg:px-4 lg:py-2 lg:mx-4 rounded'>Appointment</CustomLink>
        <CustomLink to='/reviews' className='py-1 lg:px-4 lg:py-2 lg:mx-4 rounded'>Reviews</CustomLink>
        {user && <CustomLink to='/dashboard' className='py-1 lg:px-4 lg:py-2 lg:mx-4 rounded'>Dashboard</CustomLink>
        }
        <CustomLink to='/contactus' className='py-1 lg:px-4 lg:py-2 lg:mx-4 rounded'>Contact Us</CustomLink>
        {user ? <button className=' lg:px-4 lg:mx-4 rounded' onClick={() => signOut(auth)}>Log out</button> : <CustomLink to='/login' className='py-1 lg:px-4 lg:py-2 lg:mx-4 rounded'>Login</CustomLink>}
    </>
    return (
        <header>
            <div className="navbar bg-base-100 flex justify-between">
                {/* <div className="navbar-start"> */}
                <div className="lg:navbar-start navbar flex justify-between">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menus}
                        </ul>
                    </div>
                    <Link to='/' className="font-bold normal-case text-xl lg:ml-5">Hello Doctors</Link>

                    <label for="left-sidebar" class="text-xs lg:hidden">Open Sidebar</label>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menus}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;