import React from 'react';
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaRss } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { SiMastodon, SiMatrix } from 'react-icons/si';
import logo from '../../assets/techdesk_logo2.png'
import { Link } from 'react-router';
import MyContainer from '../MyContainer/MyContainer';

const Footer = () => {
    return (
        <div className="bg-[#0F172B] text-gray-400 py-12">
            <MyContainer>
                <div className="w-full mx-auto">
                    {/* Top section */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
                        {/* Left Side */}
                        <div className='w-full md:w-1/3'>
                            <img className='w-[150px] mb-5' src={logo} alt="" />
                            <p className="text-sm text-gray-400 mb-4">
                                TechDesk is your trusted freelancing marketplace for hiring top talent and delivering quality projects worldwide.
                            </p>

                            {/* Social Icons */}
                            <div className="flex items-center gap-4 text-gray-400 text-xl">
                                <FaDiscord className="hover:text-white cursor-pointer" />
                                <SiMatrix className="hover:text-white cursor-pointer" />
                                <FaXTwitter className="hover:text-white cursor-pointer" />
                                <SiMastodon className="hover:text-white cursor-pointer" />
                                <FaInstagram className="hover:text-white cursor-pointer" />
                                <MdEmail className="hover:text-white cursor-pointer" />
                                <FaLinkedin className="hover:text-white cursor-pointer" />
                                <FaGithub className="hover:text-white cursor-pointer" />
                                <FaRss className="hover:text-white cursor-pointer" />
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm">
                            <div>
                                <h3 className="text-white mb-3 font-semibold">Open Source</h3>
                                <ul className="space-y-1">
                                    <li>Mobile</li>
                                    <li>Web</li>
                                    <li>Desktop</li>
                                    <li>CLI</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-white mb-3 font-semibold">Helpful Links</h3>
                                <ul className="space-y-1">
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/alljobs'>All Jobs</Link></li>
                                    <li><Link to='/addjob'>Add a Job</Link></li>
                                    <li><Link to='/myjobs'>My Jobs</Link></li>
                                    
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-white mb-3 font-semibold">Accounts</h3>
                                <ul className="space-y-1">
                                    <li>FAQ</li>
                                    <li>Newsletter</li>
                                    <li>Blog</li>
                                    <li>Career</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-white mb-3 font-semibold">Download App</h3>
                                <div className='flex flex-col gap-2'>

                                    <Link className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition" >

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="28" height="28" >
                                            <path fill="#34A853" d="M96 52v408l145-204z" />
                                            <path fill="#4285F4" d="M96 52l239 138-94 66z" />
                                            <path fill="#EA4335" d="M96 460l239-138-94-66z" />
                                            <path fill="#FBBC05" d="M335 322l62-36a32 32 0 000-60l-62-36-94 66z" />
                                        </svg>

                                        <div className="flex flex-col leading-tight">
                                            <span className="text-xs font-semibold">Google Play</span>
                                        </div>
                                    </Link>

                                    <Link className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition" >

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="26" height="26" fill="white">
                                            <path d="M318.7 268.6c-.2-36.7 16-64.4 49-84.7-18.5-26.6-46.5-41.2-82.8-43.9-34.7-2.7-72.8 20.4-86.4 20.4-14 0-49.4-19.5-76.4-19-39.3.6-78.1 23.2-99.1 59.1-42.3 73.4-10.8 181.6 30.4 241.2 20.1 29.3 44 62.2 75.5 61 30.3-1.2 41.8-19.8 78.4-19.8 36.6 0 47.1 19.8 78.6 19.2 31.8-.6 51.9-29.5 71.6-58.9 22.6-33 31.9-65 32.1-66.6-.7-.3-61.3-23.5-61.5-93.8zM244.6 81.9c15.9-19.3 26.5-46.4 23.5-73.4-22.7.9-50.2 15.1-66.4 34.4-14.6 17.1-27.4 44.3-24 70.4 25.1 1.9 51-12.8 66.9-31.4z" />
                                        </svg>

                                        <div className="flex flex-col leading-tight">
                                            <span className="text-xs font-semibold">App Store</span>
                                        </div>
                                    </Link>

                                </div>
                            </div>


                        </div>
                    </div>

                    {/* Bottom Links */}
                    <div className="border-t border-gray-500 mt-10 pt-4 text-sm flex flex-wrap gap-4 justify-center text-gray-500">

                        © 2025 TechDesk reserved. All rights. Brand of TA Tech Limited | Designed
                        &amp; developed by TA Tech Limited

                    </div>
                </div>
            </MyContainer>

        </div>
    );
};

export default Footer;