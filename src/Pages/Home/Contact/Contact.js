import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3rkenmf', 'template_03gby5k', form.current, 'o5E_e7JTnVh9xiC31')
            .then((result) => {
                console.log(result.text);
                alert('your messate success fully sent')
                
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    };


    return (
        <section>
            <div className='contact-title my-10'>
                <h1 style={{ textAlign: 'center' }} className='text-5xl font-semibold'>Contact Me</h1>
            </div>
            <div className="hero">
                <div className="hero-content w-full flex-col lg:flex-row">
                    <div className="card w-full lg:w-[600px] flex-shrink-0 shadow-2xl bg-base-100">
                        <form ref={form} onSubmit={sendEmail} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="user_name"  placeholder="name" className="input input-bordered"/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="user_email"  placeholder="email" className="input input-bordered"/>
                            </div>
                           
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea style={{resize:'none'}} name="message"  className="textarea textarea-bordered lg:h-[200px] h-[100px]" placeholder="Message"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary text-white">Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Contact;