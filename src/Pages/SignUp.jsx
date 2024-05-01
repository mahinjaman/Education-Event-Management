import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserProvider/UserProvider';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import Auth from '../Firebase/Firebase.config';

const SignUp = () => {
    const { SignUp } = useContext(UserContext)
    const handleSignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const formData  = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        SignUp(email, password)
        .then(result =>{
            const user = result.user
            updateProfile(user,{
                displayName: name,
                photoURL: 'https://i.ibb.co/4dNffG6/blank-profile-picture-973460-640.webp'
            });
            sendEmailVerification(user)
            .then(()=>{
                alert('Please Check your email and verify now')
                form.reset()
 
            })
        })
        .catch(error =>{
             console.log(error.message)
        })
    }
    return (
        <div className='w-10/12 lg:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-2 py-10 lg:py-20'>
            <Helmet>
                <title>Sign Up</title>
            </Helmet>
            <div className='p-5 lg:p-20 bg-gray-100'>
                <h1 className='py-4 font-bold uppercase text-3xl mb-5 border-b border-slate-500'>Sign Up</h1>
                <form onSubmit={handleSignUp} className='mb-4'>
                    <input className='bg-white focus:outline-none w-full mb-5 py-4 px-5 placeholder:text-lg placeholder:text-slate-500 rounded block' type="text" name="name" id="name" placeholder='User Name:-'/>
                    <input className='bg-white focus:outline-none w-full mb-5 py-4 px-5 placeholder:text-lg placeholder:text-slate-500 rounded block' type="email" name="email" id="" placeholder='Email:-'/>
                    <input className='bg-white focus:outline-none w-full mb-5 py-4 px-5 placeholder:text-lg placeholder:text-slate-500 rounded block' type="password" name="password" id="" placeholder='Password:-'/>
                    <input className='bg-emerald-500 py-3 px-10 rounded font-semibold text-white' type="submit" value="Sign Up" />
                </form>
                <p>Already have an account? <Link className='underline text-emerald-500 font-semibold' to={'/signin'}>Sign In</Link></p>
            </div>
            <div className='hidden lg:inline-block'>
                <img src="https://i.ibb.co/pPz9PYp/xsignup-jpg-pagespeed-ic-Ppdz-PWC00-M.webp" alt="" />
            </div>
        </div>
    );
};

export default SignUp;