import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../public/images/icon/logo.png'
const Navbar = () => {
    const [staticNav, setStaticNav] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', () => {

            if (window.scrollY > 300) {
                setStaticNav(true)
            }
            else {
                setStaticNav(false)
            }

        })
    },[])

    const PagesMenu = <>
        <li><NavLink to={'/teacher'}>Branding</NavLink></li>
        <li><NavLink to={'/teacher'}>Event</NavLink></li>
        <li><NavLink to={'/teacher'}>Testimonial</NavLink></li>
        <li><NavLink to={'/teacher'}>Sign In</NavLink></li>
    </>


    const menu = <>
        <li> <NavLink to={'/'}>Home</NavLink> </li>
        <li> <NavLink to={'/about'}>About</NavLink> </li>
        <li>
            <details>
                <summary>Services</summary>
                <ul className='p-2'>
                    {
                        PagesMenu
                    }
                </ul>
            </details>
        </li>
        <li> <NavLink to={'/services'}>Teachers</NavLink> </li>
        <li> <NavLink to={'/blog'}>Blog</NavLink> </li>
        <li> <NavLink to={'/contact'}>Contact</NavLink> </li>
    </>

    

    return (
        <div className={`navbar py-5 lg:px-40 text-white bg-slate-900  ${staticNav ? 'fixed py-5 upToDown z-50' : ' border-b'}`}>
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
                <Link to={'/'}><img src={Logo} alt="Logo" /></Link>
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