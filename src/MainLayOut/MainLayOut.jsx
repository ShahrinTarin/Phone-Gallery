import React from 'react';
import Home from '../pages/home';
import { Outlet } from 'react-router';
import Navbar from '../Component/navbar/Navbar';
import Footer from '../Component/footer/Footer';

const MainLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-117px)] max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16 xl:px-24'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;
