import React from 'react';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer style={{ backgroundImage: `url(${footer})` }} className='p-10 bg-cover bg-center bg-no-repeat'>
            <div className="footer">
                <div className='mx-auto'>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div className='mx-auto'>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div className='mx-auto'>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <p className='text-center font-bold mt-5'>Copyright {year} All Rights Reserved</p>
        </footer>
    );
};

export default Footer;