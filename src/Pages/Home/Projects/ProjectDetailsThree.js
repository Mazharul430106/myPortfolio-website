import React from 'react';

const ProjectDetailsThree = () => {
    return (
        <section className='mx-5 lg:mx-0'>
            <div className='project-title' style={{ marginBottom: '30px' }}>
                <h1 className='text-5xl font-semibold text-center'>Educational Zone</h1>
            </div>
            <div className="hero">
                <div className="w-full flex flex-col lg:flex-row gap-5 ">
                    <div className="w-full">
                        <img src="https://i.ibb.co/xf4Hyct/bestmobile-Zone1.png" alt="" />
                        <img src="https://i.ibb.co/PTgqHrC/best-Mobile-Zone2.png" alt="" />
                        <img src="https://i.ibb.co/tZnPB7Q/best-Mobile-Zone3.png" alt="" />
                    </div>
                    <div className='w-full'>
                        <h1 className='text-5xl text-center font-semibold' style={{ marginBottom: '25px' }}>Project deatails</h1>
                        <div>
                            <ul>
                                <li><p className='text-xl'>This is an educational website and the main objective of this website is to
                                    provide the best education.</p></li>
                                <li><p className='text-xl'>The website used email password sign in and google sign in authentication and
                                    authorization system like admin panel.</p></li>
                                <li><p className='text-xl'>In this website uses the framework Bootstrap .</p></li>
                                <li><p className='text-xl'>This website are a users privacy protected website, and it has been used
                                    Technologies : HTML, Css, Bootstrap, React Router, Firebase, Node.js, Express js,
                                    and Mongodb Database .</p></li>
                            </ul>
                        </div>

                        <div className='flex gap-2' style={{ marginTop: '25px' }}>
                            <a target='_blank' href="https://github.com/Mazharul430106/educational-zone-clientsite-repo" className='btn btn-primary text-white'> Client Site Repo</a>
                            <a target='_blank' href="https://github.com/Mazharul430106/educational-zone-serversite-repo" className='btn btn-primary text-white'> Server Site Repo</a>
                            <a target='_blank' href="https://educational-project-assignment.web.app/" className='btn btn-primary text-white'> Web Site Link</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetailsThree;