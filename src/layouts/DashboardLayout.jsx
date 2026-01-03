import React, { use } from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import Loading from '../components/Loading/Loading';
import navLogo from '../assets/techdesk_logo2.png'

const DashboardLayout = () => {

    const { user, logOut, loading } = use(AuthContext);
    // console.log(user);

    const handleLogOut = () => {
        logOut();
        // toast('Log Out Successful !')
    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    {/* Page content here */}
                    <nav className="navbar flex items-center justify-between w-full bg-base-300">
                        <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
                            Menu
                        </label>

                        <div className="px-4">
                            <Link to='/' className=""><img className='w-20 md:w-25 ' src={navLogo} alt="" /></Link>
                        </div>

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
                    </nav>

                    {/* <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
                        Open drawer
                    </label> */}

                    <div className='p-5 w-full'>
                        <Outlet></Outlet>
                    </div>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-60 p-4">
                        {/* Sidebar content here */}
                        <li><NavLink to='/dashboard/addjob'>Add New Job</NavLink></li>
                        <li><NavLink>Sidebar Item 2</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;