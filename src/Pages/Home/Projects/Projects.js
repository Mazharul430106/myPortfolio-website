import React from 'react';

const Projects = () => {

    const projectDetails = [
        {
            name: 'Best Mobile Zone',
            desc: 'This is a shopping website and the website purpose is to sell the best phones,The website used email password sign in and google sign in authentication and authorization system like admin panel....'
        },
        {
            name: 'Journalist services',
            desc: 'This website features the services of a journalist. The website used email password sign in and google sign in authentication system.....'
        },
        {
            name: 'Educational Zone',
            desc: 'This is an educational website and the main objective of this website is toprovide the best education The website used email password sign in and google sign in authentication system......'
        },

    ]

    return (
        <section className='py-10'>
            <div className='project-title mt-10'>
                <h1 style={{ textAlign: 'center' }} className='font-semibold text-5xl'>My Projects</h1>
            </div>

            <div className='grid grid lg:grid-cols-3 gap-5 mt-10'>
                {
                    projectDetails.map(project => <>

                        <div className="mx-5 lg:mx-0 card border text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title text-3xl">{project.name}</h2>
                                <p>{project.desc}</p>
                                <div className="card-actions">
                                    <button className="btn w-full btn-primary text-white">project details</button>
                                </div>
                            </div>
                        </div>
                    </>
                    )
                }
            </div>

        </section>
    );
};

export default Projects;