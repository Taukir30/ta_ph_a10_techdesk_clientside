import React, { use, useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';
import { Link, useNavigate, useParams } from 'react-router';
import Loading from '../components/Loading/Loading';
import noJob from '../assets/nojob.png'
import MyContainer from '../components/MyContainer/MyContainer';
import { toast } from 'react-toastify';
import { AuthContext } from '../provider/AuthContext';

const JobDetails = () => {

    const {user} = use(AuthContext);

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

    // console.log(details)

    const handleAccept = () => {

        const accepedJob = {
                job: details._id,
                title: details.title,
                postedBy: details.postedBy,
                category: details.category,
                summary: details.summary,
                coverImage: details.coverImage,
                userEmail: details.userEmail,
                accepted_by: user.email,
                created_at: details.created_at
        }

        // console.log(accepedJob);

        axiosInstance.post('/accept-task', accepedJob)
            .then( data => {
                console.log(data.data);
                if(data.data.insertedId){
                    toast("Job Accepted!");
                    navigate('/acceptedjobs');
                }
            })
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (!details._id) {
        return (
            <>
                <div className='flex flex-col justify-center items-center gap-5 my-16'>
                    <img className='py-5 h-[200px]' src={noJob} alt="" />
                    <h2 className='text-2xl font-bold'>OPPS!! JOB NOT FOUND</h2>
                    <p className='text-sm text-gray-600 px-10'>The Job you are requesting is not found on our system.  please try other product</p>
                    <Link to='/' className='btn shadow-none rounded-4xl btn-success'>Go Back!</Link>
                </div>
            </>
        )
    }

    return (
        <MyContainer>
            <section className="container mx-auto  py-16 my-[60px]">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-20">
                    {/* Left Column: Job Details */}
                    <div className="lg:col-span-2">
                        {/* Job Title */}
                        <h1 className="text-3xl font-bold text-gray-900">
                            {details.title}
                        </h1>
                        {/* Meta Info */}
                        <div className="flex items-center space-x-6 text-sm text-gray-600 mt-4">
                            <span className="flex items-center">Posted at: {details.created_at}</span>    
                        </div>

                        {/* Divider */}
                        <hr className="my-8 border-t border-gray-200" />

                        {/* Summary */}
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">Summary</h2>
                            <p className="text-gray-700 leading-relaxed">
                                {details.summary}
                            </p>
                        </div>

                        {/* Divider */}
                        <hr className="my-8 border-t border-gray-200" />

                        {/* other data Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                            {/* category */}
                            <div className="flex items-start space-x-3">
                                {/* Icon */}
                                <div className="shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"  strokeLinejoin="round"  className="w-6 h-6 text-gray-500" >
                                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                                        <line x1={7} y1={7} x2="7.01" y2={7} />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Category</p>
                                    <p className="text-sm text-gray-600">{details.category}</p>
                                </div>
                            </div>

                            {/* Posted by */}
                            <div className="flex items-start space-x-3">
                                {/* Icon */}
                                <div className="shrink-0">
                                    <svg  xmlns="http://www.w3.org/2000/svg" width={24}  height={24}  viewBox="0 0 24 24"  fill="none" stroke="currentColor"  strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-500"  >
                                        <path d="M12 1.64l2.35 4.76 5.26.77-3.8 3.7.9 5.24L12 13.6l-4.7 2.47.9-5.23-3.8-3.71 5.25-.77L12 1.64z" />
                                        <path d="M12 1.64l2.35 4.76 5.26.77-3.8 3.7.9 5.24L12 13.6l-4.7 2.47.9-5.23-3.8-3.71 5.25-.77L12 1.64z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Posted By</p>
                                    <p className="text-sm text-gray-600"> {details.postedBy} </p>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="flex items-start space-x-3">
                                {/* Icon */}
                                <div className="shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg"  width={24} height={24}  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"  strokeLinejoin="round"   className="w-6 h-6 text-gray-500" >
                                        <rect x={2} y={7} width={20} height={14} rx={2} ry={2} />
                                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">
                                        {
                                            details.price? `$ ${details.price}` : "Negotiable"
                                        } 
                                    </p>
                                </div>
                            </div>
                            {/* Attribute: Project Type */}
                            <div className="flex items-start space-x-3">
                                {/* Icon */}
                                <div className="shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}     strokeLinecap="round"   strokeLinejoin="round"  className="w-6 h-6 text-gray-500"  >
                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                        <polyline points="9 22 9 12 15 12 15 22" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Email</p>
                                    <p className="text-sm text-gray-600"> {details.userEmail} </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="lg:col-span-1 h-fit lg:sticky lg:top-8">
                        <div className='flex justify-center items-center my-5'>
                            <img className='rounded-lg w-full' src={details.coverImage} alt="" />
                        </div>
                        <div className="border border-gray-200 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Accept this Task
                            </h3>
                            <button onClick={handleAccept} className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-5 rounded-lg transition-colors mt-6" >
                                Accept
                            </button>
                            
                        </div>
                    </div>
                </div>
            </section>
        </MyContainer>

    );
};

export default JobDetails;