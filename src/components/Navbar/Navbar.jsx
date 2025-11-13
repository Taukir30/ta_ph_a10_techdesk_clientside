import React, { use } from 'react';
import navLogo from '../../assets/techdesk_logo2.png'

import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../provider/AuthContext';
import Loading from '../Loading/Loading';
// import { AuthContext } from '../provider/AuthContext';
// import { toast } from 'react-toastify';
// import Loading from './Loading';

const Navbar = () => {

    const { user, logOut, loading } = use(AuthContext);
    // console.log(user);

    const handleLogOut = () => {
        logOut();
        // toast('Log Out Successful !')
    }

    const navItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/alljobs'>All Jobs</NavLink></li>
        <li><NavLink to='/addjob'>Add a Job</NavLink></li>
        <li><NavLink to='/myjobs'>My Jobs</NavLink></li>
        <li><NavLink to='/acceptedjobs'>My Accepted Jobs</NavLink></li>
    </>

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='bg-[#FBF8EE] border-b border-[#00525d] w-full fixed top-0 left-0 z-10'>
            <div className="navbar w-[95%] mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-5">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/' className=""><img className='w-20 md:w-25' src={navLogo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-1 text-primary font-semibold">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    {
                        user && <div className='relative group inline-block'>
                            <img className='w-10 h-10 rounded-4xl border-2 border-[#FF7601]' src={user?.photoURL} alt="user" />
                            <span className='text-xs absolute left-1/2 top-11 -translate-x-1/2 bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'>{user?.displayName}</span>
                        </div>
                    }
                    {/* <img className='w-8 h-8 rounded-4xl' src={user?.photoURL} alt="user" /> */}
                    {
                        user ? <button onClick={handleLogOut} className="btn rounded-4xl">Logout</button> : <div className='flex gap-1'><Link to='/auth/login' className="btn rounded-4xl">Login</Link><Link to='/auth/register' className="btn rounded-4xl">Register</Link></div>
                    }
                    {/* <Link to='/auth/login' className="btn">Login</Link> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;