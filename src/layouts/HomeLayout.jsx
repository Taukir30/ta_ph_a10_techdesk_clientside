import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <div className="main">
                <Outlet></Outlet>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
            <ToastContainer />
        </div>
    );
};

export default HomeLayout;