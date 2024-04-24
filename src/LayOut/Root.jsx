import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navibar/Navbar';
import Footer from '../shared/Footer/Footer';

const Root = () => {
    return (
        <div >
            <div>
                <Navbar></Navbar>
            </div>
            <div className='w-10/12 mx-auto'>
                <Outlet></Outlet>
            </div>
            
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;