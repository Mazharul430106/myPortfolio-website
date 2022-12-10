import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {

    return (
        <section className='py-10'>
            <div className='project-title mt-10'>
                <h1 style={{ textAlign: 'center' }} className='font-semibold text-5xl'>My Projects</h1>
            </div>

            <div className='grid lg:grid-cols-3 gap-5 mt-10'>
                <div className="mx-5 lg:mx-0 card border text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title text-3xl">Best Mobile Zone</h2>
                        <p>This is a shopping website and the website purpose is to sell the best phones,The website used email password sign in and google sign in authentication and authorization system like admin panel....</p>
                        <div className="card-actions">
                            <Link to={`/projectDetailsOne`}>
                                <button className="btn w-full btn-primary text-white">project details</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mx-5 lg:mx-0 card border text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title text-3xl">Journalist services</h2>
                        <p>This website features the services of a journalist. The website used email password sign in and google sign in authentication system.....</p>
                        <div className="card-actions">
                            <Link to={`/projectDetailsTwo`}>
                                <button className="btn w-full btn-primary text-white">project details</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mx-5 lg:mx-0 card border text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title text-3xl">Educational Zone</h2>
                        <p>This is an educational website and the main objective of this website is to provide the best education.......</p>
                        <div className="card-actions">
                            <Link to={`/projectDetailsThree`}>
                                <button className="btn w-full btn-primary text-white">project details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;