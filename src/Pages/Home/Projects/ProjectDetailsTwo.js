import React from 'react';

const ProjectDetailsTwo = () => {
    return (
        <section className='mx-5 lg:mx-0'>
            <div className='project-title' style={{ marginBottom: '30px' }}>
                <h1 className='text-5xl font-semibold text-center'>Journalist services</h1>
            </div>
            <div className="hero">
                <div className="w-full flex flex-col lg:flex-row gap-5 ">
                    <div className="w-full">
                        <img src="https://i.ibb.co/vYWn4Zr/Jornalist-Service1.png" alt="" />
                        <img src="https://i.ibb.co/rvp8Sgx/jornalist-Service2.png" alt="" />
                        <img src="https://i.ibb.co/qWsfmVp/Journalist-Service3.png" alt="" />
                    </div>
                    <div className='w-full'>
                        <h1 className='text-5xl text-center font-semibold' style={{ marginBottom: '25px' }}>Project deatails</h1>
                        <div>
                            <ul>
                                <li><p className='text-xl'>This website features the services of a journalist.</p></li>
                                <li><p className='text-xl'>The website used email password sign in and google sign in authentication system.</p></li>
                                <li><p className='text-xl'>In this website uses the framework Tailwind Css with Daisyui.</p></li>
                                <li><p className='text-xl'>This website are a users privacy protected website, and it has been used
                                    Technologies : HTML, Css, Tailwind Css, DaisyUI, React Router, Firebase, Node.js,
                                    Express js, and Mongodb Database.</p></li>
                            </ul>
                        </div>

                        <div className='flex gap-2' style={{marginTop: '25px'}}>
                            <a href="https://github.com/Mazharul430106/journalist-service-clientsite-repo" className='btn btn-primary text-white'> Client Site Repo</a>
                            <a href="https://github.com/Mazharul430106/journalist-service-serversite-repo" className='btn btn-primary text-white'> Server Site Repo</a>
                            <a href="https://journalist-service-project.web.app/" className='btn btn-primary text-white'> Web Site Link</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetailsTwo;