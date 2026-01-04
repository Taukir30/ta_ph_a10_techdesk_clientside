import React from 'react';
import { AiFillDollarCircle } from 'react-icons/ai';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router';

const JobCard = ({ job }) => {

    // console.log(job)

    return (
        <div className="w-full p-6 flex flex-col md:flex-row justify-between sm:items-center gap-10">
            <div className="w-full flex flex-col md:flex-row items-center space-x-4 gap-5">

                {/* Logo */}
                <img src={job.coverImage} alt="" className="md:w-25 md:h-25 w-[200px] h-[200px] rounded-lg" />

                {/* Job Info */}
                <div className=''>
                    <h3 className="text-xl text-center md:text-left font-semibold text-gray-900">
                        {job.title}
                    </h3>
                    <div className="flex flex-wrap flex-col md:flex-row items-center gap-x-8 gap-y-3 text-sm text-gray-600 mt-2">
                        <span className="flex items-center flex-col md:flex-row">
                            <strong className='mr-2'><BiSolidCategoryAlt /></strong> {job.category}
                        </span>

                        <span className="flex items-center flex-col md:flex-row">
                            <strong className='mr-2'><BsFillCalendarDateFill /></strong> {job.created_at}
                        </span>
                        
                        <span className="flex items-center flex-col md:flex-row">
                            <strong className='mr-2'><AiFillDollarCircle /></strong> {job.budget}
                        </span>

                    </div>
                    <p className=' text-sm/snug text-gray-600 mt-2'><strong>Summery</strong>: {job.summary}</p>
                </div>
            </div>
            {/* Apply Button */}
            <div className="mt-4 sm:mt-0 sm:ml-6 shrink-0 flex justify-center">
                <Link to={`/jobdetails/${job._id}`} className="btn shadow-none btn-success w-35 rounded-4xl">View Details</Link>
            </div>
        </div>
    );
};

export default JobCard;