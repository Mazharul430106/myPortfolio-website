import React from 'react';

const Banner = () => {
    return (
        <div className="hero" style={{marginTop:'30px', marginBottom: '30px'}}>
            <div className="hero-content flex-col lg:flex-row w-full">

                <div className="w-full">
                    <h1 className="text-5xl font-bold pb-5">Hi! I am,</h1>
                    <h1 className="text-5xl font-bold"> Mazharul Islam</h1>
                    <p className="py-6">Front-End-Developer</p>
                    <input type="button" value="download resume" className='btn btn-primary text-white' />
                </div>

                <div className='w-full'>
                  <img style={{width: '430px', height: '450px', borderRadius:'50%'}} className='flex items-center mx-auto' src="https://i.ibb.co/d7TJ4jK/90058212-107913660835813-3283847757328023552-n.jpg" alt="" />
                </div>
               
            </div>
        </div>
    );
};

export default Banner;