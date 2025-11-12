import React from 'react';
import error404 from '../assets/notfound404.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center gap-5 my-5'>
                <img className='py-5 h-[300px]' src={error404} alt="" />
                <h2 className='text-2xl font-bold'>Oops, page not found!</h2>
                <p className='text-sm text-gray-600'>The page you are looking for is not available.</p>
                <Link to='/' className='btn btn-primary'>Go Back!</Link>
            </div>
        </div>
    );
};

export default ErrorPage;