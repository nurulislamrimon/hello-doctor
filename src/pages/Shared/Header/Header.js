import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../../CustomLink/CustomLink';

const Header = () => {
    const menus = <>
        <CustomLink to='/home' className='py-2 lg:px-4 lg:py-2 lg:mx-4 rounded'>Home</CustomLink>
        <CustomLink to='/about' className='py-2 lg:px-4 lg:py-2 lg:mx-4 rounded'>About</CustomLink>
        <CustomLink to='/appointment' className='py-2 lg:px-4 lg:py-2 lg:mx-4 rounded'>Appointment</CustomLink>
        <CustomLink to='/reviews' className='py-2 lg:px-4 lg:py-2 lg:mx-4 rounded'>Reviews</CustomLink>
        <CustomLink to='/contactus' className='py-2 lg:px-4 lg:py-2 lg:mx-4 rounded'>Contact Us</CustomLink>
        <CustomLink to='/login' className='py-2 lg:px-4 lg:py-2 lg:mx-4 rounded'>Login</CustomLink>
    </>
    return (
        <header>
            <div class="navbar bg-base-100 flex justify-between">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menus}
                        </ul>
                    </div>
                    <Link to='/' class="font-bold normal-case text-xl lg:ml-5">Hello Doctors</Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menus}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;