import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserProvider/UserProvider';

const SignIn = () => {
    const { SignIn , } = useContext(UserContext);
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password');
        SignIn(email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(err => {
             console.log(err);
        })
    }

    
    return (
        <div className='w-10/12 lg:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-2 py-10 lg:py-20'>
            <Helmet>
                <title>Sign In</title>
            </Helmet>
            <div className='p-5 lg:p-20 bg-gray-100'>
                <h1 className='py-4 font-bold uppercase text-3xl mb-5 border-b border-slate-500'>Sign In</h1>
                <form onSubmit={handleSignUp} className='mb-4'>
                    <input className='bg-white focus:outline-none w-full mb-5 py-4 px-5 placeholder:text-lg placeholder:text-slate-500 rounded block' type="email" name="email" id="" placeholder='Email:-' />
                    <input className='bg-white focus:outline-none w-full mb-5 py-4 px-5 placeholder:text-lg placeholder:text-slate-500 rounded block' type="password" name="password" id="" placeholder='Password:-' />
                    <div className='flex justify-between mb-5 text-lg'>
                        <p className='text-red-500 underline tracking-wider'>Forget Password?</p>
                        <p className=''>
                            <input type="checkbox" name="" id="remember" />
                            <label htmlFor="remember" className='ml-2'>Remember me</label>
                        </p>
                    </div>
                    <input className='bg-emerald-500 py-3 px-10 rounded font-semibold text-white' type="submit" value="Sign Up" />
                </form>
                <p>Don't have an account? <Link className='underline text-red-500 font-semibold' to={'/signup'}>Sign Up</Link></p>
            </div>
            <div className='hidden lg:inline-block'>
                <img src="https://i.ibb.co/pPz9PYp/xsignup-jpg-pagespeed-ic-Ppdz-PWC00-M.webp" alt="" />
            </div>
        </div>
    );
};

export default SignIn;