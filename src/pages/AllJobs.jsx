import React, { useEffect, useState } from 'react';
import MyContainer from '../components/MyContainer/MyContainer';
import { Link } from 'react-router';
import JobContainer from '../components/JobContainer/JobContainer';
import useAxios from '../hooks/useAxios';
import Loading from '../components/Loading/Loading';

const AllJobs = () => {

    const [allJobs, setAllJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(0);
    const [sort, setSort] = useState("createdAt");
    const [order, setOrder] = useState("desc");

    const limit = 5;

    const axiosInstance = useAxios();

    useEffect(() => {
        setLoading(true);

        axiosInstance.get(`/alljobs?sort=${sort}&order=${order}`)
            .then(data => {
                // console.log(data.data)
                setAllJobs(data.data);
                setLoading(false);
            })
    }, [axiosInstance, sort, order])

    const handleSelect = e => {
        const sortText = e.target.value;
        console.log(sortText);
        setSort(sortText.split("-")[0]);
        setOrder(sortText.split("-")[1]);
    }
    console.log(sort, order)

    // console.log(latestJobs)

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <section className="py-20 sm:py-24">
            <MyContainer>
                <div className="container mx-auto w-full">

                    <div className="text-center mb-5">
                        <h2 className="text-3xl sm:text-4xl font-bold text-info mb-3">
                            All Jobs
                        </h2>
                    </div>

                    {/* Section Header */}
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-xl sm:text-3xl font-bold text-info">All Jobs</h2>

                        <select onChange={handleSelect} defaultValue="Pick a color" className="select rounded-4xl border border-secondary w-40 md:w-45">
                            <option disabled={true}>Sort</option>
                            <option value={"created_at-desc"}>Date : High - Low</option>
                            <option value={"created_at-asc"}>Date : Low - High</option>
                            <option value={"budget-asc"}>Rate : Low - High</option>
                            <option value={"budget-desc"}>Rate : Low - High</option>
                        </select>
                    </div>

                    {/* Job List Container */}
                    <JobContainer jobs={allJobs}></JobContainer>

                </div>
            </MyContainer>
        </section>
    );
};

export default AllJobs;