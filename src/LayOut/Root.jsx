import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';

const Root = () => {
    return (
        <div >
            <div>
                <Navbar></Navbar>
            </div>
            <div >
                <Outlet></Outlet>
            </div>
            
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;