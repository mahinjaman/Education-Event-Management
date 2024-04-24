import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [staticNav, setStaticNav] = useState(false);

    const PagesMenu = <>
    <li><NavLink to={'/teacher'}>Teacher</NavLink></li>
    <li><NavLink to={'/teacher'}>Event</NavLink></li>
    <li><NavLink to={'/teacher'}>Testimonial</NavLink></li>
    <li><NavLink to={'/teacher'}>Sign In</NavLink></li>
    </>


    const menu = <>
        <li> <NavLink to={'/'}>Home</NavLink> </li>
        <li> <NavLink to={'/about'}>About</NavLink> </li>
        <li> <NavLink to={'/services'}>Services</NavLink> </li>
        <li> 
            <details>
                <summary>Pages</summary>
                <ul className='p-2'>
                    {
                        PagesMenu
                    }
                </ul>
            </details>
        </li>
        <li> <NavLink to={'/blog'}>Blog</NavLink> </li>
        <li> <NavLink to={'/contact'}>Contact</NavLink> </li>
    </>

    window.addEventListener('scroll', ()=>{

        if(window.scrollY > 300){
            setStaticNav(true)
        }
        else{
            setStaticNav(false)
        }

    })

    return (
        <div className={`navbar bg-base-100 py-10 px-14 lg:px-40 ${staticNav ? 'fixed top-0 left-0 py-5 shadow-2xl' : ''}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            menu
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        menu
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <Link>Log In</Link>
            </div>
        </div>
    );
};

export default Navbar;