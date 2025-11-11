import React from 'react';
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaRss } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { SiMastodon, SiMatrix } from 'react-icons/si';
import logo from '../../assets/techdesk_logo2.png'

const Footer = () => {
    return (
        <div className="bg-[#0F172B] text-gray-400 px-8 md:px-16 py-12">
            <div className="max-w-7xl mx-auto">
                {/* Top section */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
                    {/* Left Side */}
                    <div>
                        <img className='w-[150px] mb-5' src={logo} alt="" />
                        <p className="text-sm text-gray-400 mb-4">
                            Private cloud for your memories, with apps for mobile, desktop and web.
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

                    {/* Right Side (Links Columns) */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-sm">
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
                            <h3 className="text-white mb-3 font-semibold">Products</h3>
                            <ul className="space-y-1">
                                <li>Photos</li>
                                <li>Auth</li>
                                <li>Legacy</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white mb-3 font-semibold">Features</h3>
                            <ul className="space-y-1">
                                <li>Family plans</li>
                                <li>Sharing</li>
                                <li>Collaboration</li>
                                <li>Advanced Search</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white mb-3 font-semibold">Technology</h3>
                            <ul className="space-y-1">
                                <li>Encryption</li>
                                <li>Replication</li>
                                <li>Machine learning</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white mb-3 font-semibold">Compare</h3>
                            <ul className="space-y-1">
                                <li>Google Photos vs Ente</li>
                                <li>Apple Photos vs Ente</li>
                                <li>Dropbox vs Ente</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Links */}
                <div className="border-t border-gray-500 mt-10 pt-4 text-sm flex flex-wrap gap-4 justify-center text-[#eaf6cf]">
                    
                        © 2025 TechDesk reserved. All rights. Brand of TA Tech Limited | Designed
                        &amp; developed by TA Tech Limited
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;