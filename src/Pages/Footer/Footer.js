import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin,FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <section className='my-10'>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <div className="grid grid-flow-col gap-4">
                    <Link to='/home'>Home</Link>
                    <Link to='/about'>About Me</Link>
                    <Link to='/contact'>Contact Me</Link>
                    <Link to='/project'>Projects</Link>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://github.com/Mazharul430106"><FaGithub className='text-2xl'></FaGithub></a>
                        <a href="https://www.linkedin.com/in/mazharul-islam-7a6617244/"><FaLinkedin className='text-2xl'></FaLinkedin></a>
                        <a href="https://web.facebook.com/engr.mazharulislam.50/"><FaFacebook className='text-2xl'></FaFacebook></a>
                    </div>
                </div>
                <div>
                    <p>Copyright © 2022 - All right reserved by Mazharul Islam</p>
                </div>
            </footer>
        </section>
    );
};

export default Footer;