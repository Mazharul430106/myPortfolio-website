import React from 'react';
<i></i>

const About = () => {
    return (
        <section>
            <div>
                <div className="title">
                    <h1 style={{ marginTop: '50px', marginBottom: '50px', textAlign: 'center' }} className='text-5xl font-semibold '>About Me</h1>
                </div>
                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row w-full">
                        <div className="w-full">
                            <img src='https://i.ibb.co/fSkvHFD/IMG20221209125057-1-removebg-preview.png' alt="" />
                        </div>

                        <div className='w-full flex items-center'>
                            <p>Hi I am Mazharul Islam, i am a Front-End-Developer As a Front-End Developer I can develop any front-end website application. Speciallysingle page application for react js with mongodb database . and I can clean code optimization, which is understandable for any developer, My extensive knowledge of HTML, Css,  Bootstrap, React Bootstrap, Tailwind Css,Javascript, React js, Mongodb, with familiar problem solving skills.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;