import React from 'react';
import { Link } from 'react-router';
import useAxios from '../../hooks/useAxios';
import { toast } from 'react-toastify';

const MyCard = ({ job, myJobs, setMyJobs }) => {

    const axiosInstance = useAxios();

    const handleDelete = () => {

        axiosInstance.delete(`/deletejob/${job._id}`)
            .then(data => {
                console.log(data.data)
                if (data.data.acknowledged) {
                    const newMyJobsList = myJobs.filter( singleJob => singleJob._id !== job._id);
                    setMyJobs(newMyJobsList);

                    toast("Job Deleted !!!");
                }

            })
    }

    return (
        <div className="p-6 flex flex-col md:flex-row justify-between sm:items-center gap-10">
            <div className="flex flex-col md:flex-row items-center space-x-4 gap-5">

                {/* Logo */}
                <img src={job.coverImage} alt="" className="md:w-25 md:h-25 w-[200px] h-[200px] rounded-lg" />

                {/* Job Info */}
                <div>
                    <h3 className="text-lg text-center md:text-left font-semibold text-gray-900">
                        {job.title}
                    </h3>
                    <div className="flex flex-wrap flex-col md:flex-row items-center gap-x-4 gap-y-3 text-sm text-gray-600 mt-2">
                        <span className="flex items-center flex-col md:flex-row">

                            {/* category*/}
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="currentColor" className="ml-1 text-green-500" >
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.707 7.707a1 1 0 00-1.414-1.414L10 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
                            </svg>
                            <strong>Category</strong>: {job.category}
                        </span>
                        <span className="flex items-center flex-col md:flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mr-1.5" >
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx={12} cy={10} r={3} />
                            </svg>
                            <strong>Posted by</strong>: {job.postedBy}
                        </span>

                    </div>
                    <p className='text-xs/snug text-gray-600 mt-2'><strong>Summery</strong>: {job.summary}</p>
                </div>
            </div>
            {/* Apply Button */}
            <div className="mt-4 sm:mt-0 sm:ml-6 shrink-0 flex flex-row justify-center gap-2">
                <Link to={`/jobdetails/${job._id}`} className="btn shadow-none btn-success w-20 rounded-4xl">Edit</Link>
                <button onClick={handleDelete} className='btn shadow-none btn-error w-20 rounded-4xl'>Delete</button>
            </div>
        </div>
    );
};

export default MyCard;