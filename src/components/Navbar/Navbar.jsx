import React, { use } from 'react';
import navLogo from '../../assets/techdesk_logo2.png'
import logo from '../../assets/logo.png'

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
        <li><NavLink to='/dashboard/addjob'>Add a Job</NavLink></li>
        <li><NavLink to='/myjobs'>My Jobs</NavLink></li>
        <li><NavLink to='/acceptedjobs'>My Accepted Jobs</NavLink></li>
    </>

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='bg-base-200 border-b border-[#00525d] w-full fixed top-0 left-0 z-10'>
            <div className="navbar w-[85%] xl:w-[78%] mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 text-info rounded-box mt-3 w-52 p-2 shadow z-5">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/' className=""><img className='w-15 md:w-25 hidden md:block' src={navLogo} alt="" /></Link>
                    <Link to='/' className=""><img className='w-8 block md:hidden' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-1 text-info font-semibold">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    {
                        // user && <div className='relative group inline-block'>
                        //     <img className='w-10 h-10 rounded-4xl border-2 border-[#FF7601]' src={user?.photoURL} alt="user" />
                        //     <span className='text-xs absolute left-1/2 top-11 -translate-x-1/2 bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'>{user?.displayName}</span>
                        // </div>
                    }
                    {/* <img className='w-8 h-8 rounded-4xl' src={user?.photoURL} alt="user" /> */}
                    {
                        // user ? <button onClick={handleLogOut} className="btn rounded-4xl border border-info">Logout</button> : <div className='flex gap-1'><Link to='/auth/login' className="btn rounded-4xl border border-info">Login</Link></div>
                    }
                    {
                        // user && <Link to='/dashboard' className="hidden md:flex btn btn-outline btn-secondary text-secondary rounded-4xl h-[35px] hover:text-[#FBBA72]">Dashboard</Link>
                    }

                    {
                        user ?
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-primary text-secondary shadow-none rounded-4xl h-[35px] pl-1">
                                    <img src={user?.photoURL} alt="" className='h-[26px] w-[26px] rounded-4xl' />
                                    {/* <IoIosArrowDown /> */}
                                    Profile
                                </div>
                                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-27 p-1 shadow-sm">
                                    <li className='text-center font-bold text-secondary my-2 py-1 border border-primary rounded-4xl'>{user.displayName}</li>

                                    <li><Link to='/dashboard'>Dashboard</Link></li>
                                    <li>
                                        <button onClick={handleLogOut} className=''>Log out</button>
                                    </li>
                                </ul>
                            </div> :
                            <Link to='/auth/login' className="btn btn-primary text-secondary shadow-none rounded-4xl h-[35px]">Login</Link>
                    }

                    {/* <Link to='/auth/login' className="btn">Login</Link> */}

                    {/* theme toggle */}
                    <label className="flex cursor-pointer gap-2">
                        <svg className='hidden md:block'
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <input type="checkbox" value="dark" className="toggle theme-controller" />
                        <svg className='hidden md:block'
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;