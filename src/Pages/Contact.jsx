import React from 'react';
import { FaFacebookF, FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaArrowDown, FaInstagram, FaTwitter, FaPinterestP } from "react-icons/fa";
import { BsFillClockFill } from "react-icons/bs";

const Contact = () => {
    return (
        <div className='py-20'>
            <div className='contact w-8/12 mx-auto p-20 grid grid-cols-1 lg:grid-cols-2'>
                <div className='lg:mr-20'>
                    <div className='flex flex-col gap-5 mb-7'>
                        <h1 className='text-5xl font-bold'>Get in Touch</h1>
                        <p className='text-xl'>Suspendisse ultrice gravida dictum fusce placerat ultricies integer</p>
                    </div>
                    <div className='bg-white p-10 lg:mb-10'>
                        <div className='mb-8'>
                            <div className='flex gap-4 items-start'>
                                <span className='bg-emerald-100 p-4 rounded-full text-emerald-500'><FaLocationDot></FaLocationDot></span>
                                <div>
                                    <p className='text-lg text-slate-500'>Our Address</p>
                                    <h4 className='text-2xl font-bold'><a href="#">Balla Bazar, Kalihati, Tangail</a></h4>
                                </div>
                            </div>
                        </div>

                        <div className='mb-8'>
                            <div className='flex gap-4 items-start'>
                                <span className='bg-emerald-100 p-4 rounded-full text-emerald-500'><BsFillClockFill></BsFillClockFill></span>
                                <div>
                                    <p className='text-lg text-slate-500'>Hours Of Operation</p>
                                    <h4 className='text-2xl font-bold'><a href="#">Mon - Fri: 9.00am to 5.00pm</a></h4>
                                    <p className='text-lg text-slate-500'>[2nd Sat Holiday]</p>
                                </div>
                            </div>
                        </div>


                        <div className='mb-8'>
                            <div className='flex gap-4 items-start'>
                                <span className='bg-emerald-100 p-4 rounded-full text-emerald-500'><FaPhoneAlt></FaPhoneAlt></span>
                                <div>
                                    <p className='text-lg text-slate-500'>Contact</p>
                                    <h4 className='text-2xl font-bold'><a href="#">+8801644448473</a></h4>
                                    <h4 className='text-2xl font-bold'><a href="#">detectivese@info.com</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between'>
                        <p className='flex items-center gap-2 text-lg text-white'><FaArrowDown></FaArrowDown> Customer Care</p>
                        <div className='flex gap-3'>
                            <span className='text-xl text-[#0AB99D] p-3 bg-emerald-100 rounded-full'><FaFacebookF></FaFacebookF></span>
                            <span className='text-xl text-[#0AB99D] p-3 bg-emerald-100 rounded-full'><FaInstagram ></FaInstagram></span>
                            <span className='text-xl text-[#0AB99D] p-3 bg-emerald-100 rounded-full'><FaPinterestP></FaPinterestP></span>
                            <span className='text-xl text-[#0AB99D] p-3 bg-emerald-100 rounded-full'><FaTwitter ></FaTwitter></span>
                        </div>
                    </div>
                </div>

                <div className='lg:ml-20'>
                    <form action="">
                        <label htmlFor="name" className='font-bold text-xl'>Name*</label>
                        <input type="text" name="name" placeholder='Name' id="name" className='block rounded w-full py-4 px-5 mt-2 mb-4' />


                        <label htmlFor="email" className='font-bold text-xl'>Email Address*</label>
                        <input type="text" name="email" placeholder='Email Address' id="email" className='block rounded w-full py-4 px-5 mt-2 mb-4' />


                        <label htmlFor="phone" className='font-bold text-xl'>Phone*</label>
                        <input type="text" name="phone" placeholder='Phone' id="phone" className='block rounded w-full py-4 px-5 mt-2 mb-4' />


                        <label htmlFor="subject" className='font-bold text-xl'>Subject*</label>
                        <input type="text" name="subject" placeholder='Subject' id="subject" className='block rounded w-full py-4 px-5 mt-2 mb-4' />


                        <label htmlFor="message" className='font-bold text-xl'>Message</label>
                        <textarea className='block w-full outline-none p-5 mb-4' name="message" id="message" cols="30" rows="3" placeholder='Message'></textarea>

                        <input className='text-lg font-semibold  bg-[#0AB99D] py-3 px-5 text-white rounded-md' type="submit" value="Send Message" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;