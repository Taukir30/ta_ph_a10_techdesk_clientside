import React, { useEffect, useState } from 'react';
import MyContainer from '../components/MyContainer/MyContainer';
import { Link } from 'react-router';
import JobContainer from '../components/JobContainer/JobContainer';
import useAxios from '../hooks/useAxios';
import Loading from '../components/Loading/Loading';

const AllJobs = () => {

    const [allJobs, setAllJobs] = useState([]);
        const [loading, setLoading] = useState(true);
    
        const axiosInstance = useAxios();
    
        useEffect(() => {
            setLoading(true);
    
            axiosInstance.get('/alljobs')
                .then(data => {
                    // console.log(data.data)
                    setAllJobs(data.data);
                    setLoading(false);
                })
        }, [axiosInstance])
    
        // console.log(latestJobs)
    
        if (loading) {
            return <Loading></Loading>
        }

    return (
        <section className="py-16 sm:py-24">
            <MyContainer>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">

                    {/* Section Header */}
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">All Jobs</h2>
                        <Link to='/myjobs' className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"  >
                            My Jobs
                            {/* Arrow Icon */}
                            <svg  xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}  strokeLinecap="round" strokeLinejoin="round" className="ml-1" >
                                <line x1={5} y1={12} x2={19} y2={12} />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </Link>
                    </div>

                    {/* Job List Container */}
                    <JobContainer jobs={allJobs}></JobContainer>

                </div>
            </MyContainer>
        </section>
    );
};

export default AllJobs;