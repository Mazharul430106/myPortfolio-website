import React from 'react';
import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';

const Contact = () => {

    const {register, handleSubmit } = useForm();

    const contactSubmitHandler = (data)=>{
        console.log(data);
    }

    return (
        <section>
            <div className='contact-title my-10'>
                <h1 style={{textAlign:'center'}} className='text-5xl font-semibold'>Contact Me</h1>
            </div>
            <div className="hero">
                <div className="hero-content w-full flex-col lg:flex-row">
                    <div className="card w-full lg:w-[600px] flex-shrink-0 shadow-2xl bg-base-100">
                        <form action onSubmit={handleSubmit(contactSubmitHandler)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register('email', {required: true})} placeholder="email" className="input input-bordered"/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" {...register('password', {required: true})} placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea style={{resize:'none'}} {...register('message', {required: true})} className="textarea textarea-bordered lg:h-[200px] h-[100px]" placeholder="Message"></textarea>
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