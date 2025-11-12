import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import MyContainer from '../components/MyContainer/MyContainer';
import useAxios from '../hooks/useAxios';
import Loading from '../components/Loading/Loading';
import { toast } from 'react-toastify';

const UpdateJob = () => {

    const { id } = useParams();

    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    const axiosInstance = useAxios();

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);

        axiosInstance.get(`/alljobs/${id}`)
            .then(data => {
                // console.log(data.data)
                setDetails(data.data);
                setLoading(false);
            })
    }, [axiosInstance, id])


    console.log(details)

    const handleUpdate = (e) => {
        e.preventDefault();

        const form = e.target;
        const jobTitle = form.job_title.value;
        const category = form.category.value;
        const summary = form.summary.value;
        const coverImage = form.imageUrl.value;

        const updatedJob = {
            title: jobTitle,
            category: category,
            summary: summary,
            coverImage: coverImage,
        }
        console.log(updatedJob)

        axiosInstance.patch(`/updatejob/${id}`, updatedJob)
            .then(data => {
                console.log(data.data);
                if (data.data.acknowledged) {
                    toast("Job Updated Successfully!");
                    form.reset();
                    navigate(`/myjobs`);
                }
            })

    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='mt-[60px] p-1 md:p-12'>
            <MyContainer>
                <h2 className="text-3xl sm:text-3xl text-center font-bold text-primary mb-5">
                    Update Job
                </h2>
                <div className="mx-auto bg-white p-5 md:p-12 shadow-sm border border-gray-200 rounded-lg">
                    <form onSubmit={handleUpdate}>
                        <div className="space-y-8">
                            {/* Job Title */}
                            <div>
                                <label htmlFor="job-title" className="block text-sm font-semibold text-gray-800 mb-2" >
                                    Job Title <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="job_title"
                                    id="job-title"
                                    placeholder="Job Title"
                                    defaultValue={details.title}
                                    className="block w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"
                                />
                            </div>

                            {/* posted by */}
                            <div>
                                <label htmlFor="job-title" className="block text-sm font-semibold text-gray-800 mb-2" >
                                    Posted By <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="posted_by"
                                    id="job-title"
                                    defaultValue={details.postedBy}
                                    className="block w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"
                                />
                            </div>

                            {/* Category */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-800 mb-2" >
                                    Category <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <select name="category" id="category" className="block w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"                                 >
                                        <option>Select category</option>
                                        <option>Programming & Tech</option>
                                        <option>Graphics Design</option>
                                        <option>Digital Marketing</option>
                                        <option>Writting & Translation</option>
                                        <option>Video & Animation</option>
                                        <option>AI Services</option>
                                        <option>Music & Audio</option>
                                        <option>Consultancy</option>
                                    </select>

                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"  >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Job Summary */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-800 mb-2" >
                                    Summary
                                    <span className="text-red-500">*</span>
                                </label>
                                <textarea name="summary" defaultValue={details.summary} id="summary" className='block w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500'></textarea>

                            </div>

                            {/* Cover Image */}
                            <div>
                                <label htmlFor="job-title" className="block text-sm font-semibold text-gray-800 mb-2" >
                                    Cover Image <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="imageUrl"
                                    id="job-title"
                                    placeholder="Image URL"
                                    defaultValue={details.coverImage}
                                    className="block w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"
                                />
                            </div>

                            {/* email */}
                            <div>
                                <label htmlFor="job-title" className="block text-sm font-semibold text-gray-800 mb-2" >
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="job-title"
                                    defaultValue={details.userEmail}
                                    className="block w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-md text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"
                                />
                            </div>
                        </div>
                        {/* Submit Button */}
                        <div className="mt-10 pt-6 border-t border-gray-200">
                            <button className="block w-40 rounded-4xl text-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-5 transition-colors mt-6">
                                Updete Job
                            </button>
                        </div>
                    </form>
                </div>
            </MyContainer>

        </div>
    );
};

export default UpdateJob;