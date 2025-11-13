import React from 'react';
import programImg from '../../assets/programming.jpg'
import graphicImg from '../../assets/graphics.jpg'
import marketingImg from '../../assets/marketing.jpg'
import writtingImg from '../../assets/writting.jpg'
import videoImg from '../../assets/video.jpg'
import aiImg from '../../assets/ai.jpg'
import musicImg from '../../assets/music.jpg'
import consultImg from '../../assets/consultaing.jpg'
import { Link } from 'react-router';

const Categories = () => {
    return (
        <section className="py-10 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-info mb-3">
                        Popular Categories
                    </h2>
                    <p className="text-lg text-gray-600">
                        Find the right industry for your career
                    </p>
                </div>
                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

                    {/* Card 1: Design */}
                    <Link href="#" className="block w-full h-64 rounded-md overflow-hidden shadow-lg relative group transition-transform duration-300 ease-in-out hover:scale-105" >
                        {/* Background Image */}
                        <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${programImg})`}} />
                        {/* Dark Overlay Gradient */}
                        <div className="absolute inset-0 w-full h-full bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                        {/* Text Content */}
                        <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-xl font-bold text-white mb-1">
                                Programming &amp; Tech
                            </h3>
                            <p className="text-sm text-gray-200">10 Listings</p>
                        </div>
                    </Link>

                    {/* Card 2: Design */}
                    <Link href="#" className="block w-full h-64 rounded-md overflow-hidden shadow-lg relative group transition-transform duration-300 ease-in-out hover:scale-105" >
                        {/* Background Image */}
                        <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${graphicImg})`}} />
                        {/* Dark Overlay Gradient */}
                        <div className="absolute inset-0 w-full h-full bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                        {/* Text Content */}
                        <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-xl font-bold text-white mb-1">
                                Graphics &amp; Design
                            </h3>
                            <p className="text-sm text-gray-200">10 Listings</p>
                        </div>
                    </Link>

                    {/* Card 3: Design */}
                    <Link href="#" className="block w-full h-64 rounded-md overflow-hidden shadow-lg relative group transition-transform duration-300 ease-in-out hover:scale-105" >
                        {/* Background Image */}
                        <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${marketingImg})`}} />
                        {/* Dark Overlay Gradient */}
                        <div className="absolute inset-0 w-full h-full bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                        {/* Text Content */}
                        <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-xl font-bold text-white mb-1">
                                Digital Marketing
                            </h3>
                            <p className="text-sm text-gray-200">10 Listings</p>
                        </div>
                    </Link>

                    {/* Card 4: Design */}
                    <Link href="#" className="block w-full h-64 rounded-md overflow-hidden shadow-lg relative group transition-transform duration-300 ease-in-out hover:scale-105" >
                        {/* Background Image */}
                        <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${writtingImg})`}} />
                        {/* Dark Overlay Gradient */}
                        <div className="absolute inset-0 w-full h-full bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                        {/* Text Content */}
                        <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-xl font-bold text-white mb-1">
                                Writting &amp; Translation
                            </h3>
                            <p className="text-sm text-gray-200">10 Listings</p>
                        </div>
                    </Link>

                    {/* Card 5: Design */}
                    <Link href="#" className="block w-full h-64 rounded-md overflow-hidden shadow-lg relative group transition-transform duration-300 ease-in-out hover:scale-105" >
                        {/* Background Image */}
                        <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${videoImg})`}} />
                        {/* Dark Overlay Gradient */}
                        <div className="absolute inset-0 w-full h-full bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                        {/* Text Content */}
                        <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-xl font-bold text-white mb-1">
                                Video &amp; Animation
                            </h3>
                            <p className="text-sm text-gray-200">10 Listings</p>
                        </div>
                    </Link>

                    {/* Card 6: Design */}
                    <Link href="#" className="block w-full h-64 rounded-md overflow-hidden shadow-lg relative group transition-transform duration-300 ease-in-out hover:scale-105" >
                        {/* Background Image */}
                        <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${aiImg})`}} />
                        {/* Dark Overlay Gradient */}
                        <div className="absolute inset-0 w-full h-full bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                        {/* Text Content */}
                        <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-xl font-bold text-white mb-1">
                                AI Services
                            </h3>
                            <p className="text-sm text-gray-200">10 Listings</p>
                        </div>
                    </Link>

                    {/* Card 5: Design */}
                    <Link href="#" className="block w-full h-64 rounded-md overflow-hidden shadow-lg relative group transition-transform duration-300 ease-in-out hover:scale-105" >
                        {/* Background Image */}
                        <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${musicImg})`}} />
                        {/* Dark Overlay Gradient */}
                        <div className="absolute inset-0 w-full h-full bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                        {/* Text Content */}
                        <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-xl font-bold text-white mb-1">
                                Music &amp; Audio
                            </h3>
                            <p className="text-sm text-gray-200">10 Listings</p>
                        </div>
                    </Link>

                    {/* Card 6: Design */}
                    <Link href="#" className="block w-full h-64 rounded-md overflow-hidden shadow-lg relative group transition-transform duration-300 ease-in-out hover:scale-105" >
                        {/* Background Image */}
                        <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${consultImg})`}} />
                        {/* Dark Overlay Gradient */}
                        <div className="absolute inset-0 w-full h-full bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                        {/* Text Content */}
                        <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-xl font-bold text-white mb-1">
                                Consultancy
                            </h3>
                            <p className="text-sm text-gray-200">10 Listings</p>
                        </div>
                    </Link>
                   
                </div>
            </div>
        </section>

    );
};

export default Categories;