import React from 'react';
import { FaGithub, FaLinkedin,FaFacebook } from "react-icons/fa";

const Banner = () => {

   
    return (
        <section>
            <div className="hero" style={{ marginTop: '30px', marginBottom: '30px' }}>
                <div className="hero-content flex-col lg:flex-row w-full">

                    <div className="w-full ">
                        <h1 className="text-5xl font-bold pb-5">Hi! I am,</h1>
                        <h1 className="text-5xl font-bold"> Mazharul Islam</h1>
                        <p className="py-6">Front-End-Developer</p>
                        <div className='flex gap-2 pb-12'>
                            <a target='_blank' href='https://github.com/Mazharul430106'><FaGithub className='text-2xl'></FaGithub></a>
                            <a target='_blank' href="https://www.linkedin.com/in/mazharul-islam-7a6617244/"><FaLinkedin className='text-2xl'></FaLinkedin></a>
                            <a target='_blank' href="https://web.facebook.com/engr.mazharulislam.50/"><FaFacebook className='text-2xl'></FaFacebook></a>
                        </div>
                        <a target='_blank' className='btn btn-primary text-white' href="https://drive.google.com/file/d/16ulkjWcMqM1pnraXnuwjtjAsbKAcgVvW/view?usp=sharing">Dwonload Resume</a>                            
                       
                    </div>

                    <div className='w-full'>
                        <img style={{ width: '430px', height: '450px', borderRadius: '50%' }} className='flex items-center mx-auto' src="https://i.ibb.co/d7TJ4jK/90058212-107913660835813-3283847757328023552-n.jpg" alt="" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;