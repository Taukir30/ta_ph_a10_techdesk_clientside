import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import useAxios from '../../hooks/useAxios';
import Loading from '../Loading/Loading';
import JobCard from '../JobCard/JobCard';

const JobContainer = () => {

    const [latestJobs, setLatestJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    const axiosInstance = useAxios();

    useEffect(() => {
        setLoading(true);

        axiosInstance.get('/latest-jobs')
            .then(data => {
                // console.log(data.data)
                setLatestJobs(data.data);
                setLoading(false);
            })
    }, [axiosInstance])

    // console.log(latestJobs)

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200">

                {/* Job card */}
                {
                    latestJobs.map( job => <JobCard key={job._id} job={job}></JobCard>)
                }

            </div>
        </div>
    );
};

export default JobContainer;