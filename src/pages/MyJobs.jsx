import React, { use, useEffect, useState } from 'react';
import MyCard from '../components/MyCard/MyCard';
import useAxios from '../hooks/useAxios';
import Loading from '../components/Loading/Loading';
import { AuthContext } from '../provider/AuthContext';
import MyContainer from '../components/MyContainer/MyContainer';
import { Link } from 'react-router';

const MyJobs = () => {

    const {user} = use(AuthContext);

    const [myJobs, setMyJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    const axiosInstance = useAxios();

    useEffect(() => {
        setLoading(true);

        axiosInstance.get(`/alljobs?email=${user.email}`)
            .then(data => {
                // console.log(data.data)
                setMyJobs(data.data);
                setLoading(false);
            })

    },[axiosInstance, user])

    // console.log(latestJobs)

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <section className="py-20 sm:py-24">
            <MyContainer>
                <div className="container mx-auto px-1 sm:px-6 lg:px-8 max-w-5xl">

                    {/* Section Header */}
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-xl sm:text-3xl font-bold text-info">My Posted Jobs</h2>
                        <Link to='/alljobs' className="flex items-center text-sm font-medium text-primary hover:text-blue-800 transition-colors"  >
                            All Jobs
                            {/* Arrow Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="ml-1" >
                                <line x1={5} y1={12} x2={19} y2={12} />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </Link>
                    </div>

                    {/* Job List Container */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="divide-y divide-gray-200">

                            {
                                myJobs.length === 0 && <h2 className='text-center p-5'>No Posted Job Found!</h2>
                            }

                            {/* Job card */}
                            {
                                myJobs.map(job => <MyCard key={job._id} job={job} myJobs={myJobs} setMyJobs={setMyJobs}></MyCard>)
                            }

                        </div>
                    </div>

                </div>
            </MyContainer>
        </section>
    );
};

export default MyJobs;