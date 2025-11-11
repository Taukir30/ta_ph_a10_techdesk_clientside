import React from 'react';
import { Link } from 'react-router';
import customerSupport from '../../assets/support.jpg'

const Support = () => {
    return (
        <section className="py-16 sm:py-24 bg-primary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Text Content & Button */}
                    <div>
                        {/* Pre-heading */}
                        <p className="text-sm font-semibold uppercase text-teal-400">
                            Talk to support
                        </p>
                        {/* Main Heading */}
                        <h2 className="text-2xl tracking-wider sm:text-5xl/snug font-extrabold text-white mt-4">
                            Need Help? We’ve Got Your Back.
                        </h2>
                        {/* Subtitle */}
                        <p className="text-lg text-gray-300 mt-6 max-w-xl">
                            From technical issues to account questions, our dedicated support team is just a call away.
                        </p>
                        {/* Button & Guarantee */}
                        <div className="mt-10">
                            <Link
                                href="#"
                                className="btn shadow-none btn-success w-35 rounded-4xl"
                            >
                                Connect
                                {/* Arrow Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="ml-2"
                                >
                                    <line x1={5} y1={12} x2={19} y2={12} />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </Link>
                            
                        </div>
                    </div>
                    {/* Right Column: Image */}
                    <div className="mt-10 lg:mt-0">
                        <img
                            src={customerSupport}
                            alt="Support Team"
                            className="w-full h-auto rounded-xl shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Support;