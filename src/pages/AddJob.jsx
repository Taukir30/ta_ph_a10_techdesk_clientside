import React, { use } from 'react';
import MyContainer from '../components/MyContainer/MyContainer';
import { AuthContext } from '../provider/AuthContext';
import useAxios from '../hooks/useAxios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const AddJob = () => {

    const { user } = use(AuthContext);
    // console.log(user)

    const axiosInstance = useAxios();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const jobTitle = form.job_title.value;
        const postedBy = form.posted_by.value;
        const category = form.category.value;
        const summary = form.summary.value;
        const coverImage = form.imageUrl.value;
        const email = form.email.value;
        const budget = form.budget.value;
        const today = new Date().toISOString().split('T')[0];

        const newJob = {
            title: jobTitle,
            postedBy: postedBy,
            category: category,
            summary: summary,
            coverImage: coverImage,
            userEmail: email,
            budget: budget,
            created_at: today
        }
        console.log(newJob)

        axiosInstance.post('/addjob', newJob)
            .then(data => {
                console.log(data.data);
                if (data.data.insertedId) {
                    toast("Job Added Successfully!");
                    form.reset();
                    navigate('/myjobs');
                }
            })
    }

    return (
        <div className='w-full'>
            {/* <MyContainer> */}
                <h2 className="text-base sm:text-xl font-bold text-info mb-6">Add New Job</h2>

                <div className="mx-auto bg-white p-5 md:p-8 shadow-sm border border-gray-200 rounded-lg">
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-5 text-xs">
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
                                    className="block w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-md text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"
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
                                    id="postedBy"
                                    defaultValue={user.displayName}
                                    className="block w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-md text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"
                                />
                            </div>

                            {/* Category */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-800 mb-2" >
                                    Category <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <select name="category" id="category" className="block w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-md text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"                                 >
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
                                <textarea name="summary" id="summary" className='block w-full px-4 py-3 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500'></textarea>

                            </div>

                            {/* Cover Image */}
                            <div>
                                <label htmlFor="job-title" className="block text-sm font-semibold text-gray-800 mb-2" >
                                    Cover Image <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="imageUrl"
                                    id="job-image"
                                    placeholder="Image URL"
                                    className="block w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-md text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"
                                />
                            </div>

                            {/* Budget */}
                            <div>
                                <label htmlFor="job-title" className="block text-sm font-semibold text-gray-800 mb-2" >
                                    Budget <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="budget"
                                    id="job-budget"
                                    placeholder="Budget"
                                    className="block w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-md text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"
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
                                    id="job-email"
                                    defaultValue={user.email}
                                    className="block w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-md text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"
                                />
                            </div>
                        </div>
                        {/* Submit Button */}
                        <div className="mt-10">
                            <button className="block w-40 rounded-4xl text-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-5 transition-colors mt-6">
                                Submit Job
                            </button>
                        </div>
                    </form>
                </div>
            {/* </MyContainer> */}

        </div>
    );
};

export default AddJob;