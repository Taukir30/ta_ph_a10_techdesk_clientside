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
    const [dataCount, setDataCount] = useState(5);
    const [searchText, setSearchText] = useState('');
    const [category, setCategory] = useState("")

    const limit = 5;

    const axiosInstance = useAxios();

    useEffect(() => {
        setLoading(true);

        axiosInstance.get(`/alljobs?category=${category}&searchText=${searchText}&limit=${limit}&skip=${currentPage * limit}&sort=${sort}&order=${order}`)
            .then(data => {
                console.log(data.data)
                setAllJobs(data.data.result);
                setDataCount(data.data.total);
                setLoading(false);
            })
    }, [axiosInstance, sort, order, currentPage, searchText, category])

    const totalPages = Math.ceil(dataCount / limit);
    // console.log(totalPages)

    const handleSelect = e => {
        const sortText = e.target.value;
        console.log(sortText);
        setSort(sortText.split("-")[0]);
        setOrder(sortText.split("-")[1]);
    }
    console.log(category)

    // console.log(searchText)

    //showing loading like this will reset the search input field --note my taukir
    // if (loading) {
    //     return <Loading></Loading>
    // }

    return (
        <section className="py-20 sm:py-24">
            <MyContainer>
                <div className="container mx-auto w-full">

                    <div className="text-center mb-5">
                        <h2 className="text-3xl sm:text-4xl font-bold text-info mb-3">
                            All Jobs
                        </h2>
                    </div>

                    {loading && (
                        <div className="flex justify-center py-10">
                            <Loading />
                        </div>
                    )}

                    {/* Section Header */}
                    <div className="flex justify-between items-center mb-8">
                        <label className="input rounded-4xl border border-secondary w-40 md:w-55">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor" >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input onChange={(e) => setSearchText(e.target.value)} type="search" className="grow" placeholder="Search" />
                        </label>

                        <select onChange={handleSelect} defaultValue="Pick a color" className="select rounded-4xl border border-secondary w-40 md:w-45">
                            <option disabled={true}>Sort</option>
                            <option value={"created_at-desc"}>Date : High - Low</option>
                            <option value={"created_at-asc"}>Date : Low - High</option>
                            <option value={"budget-asc"}>Rate : Low - High</option>
                            <option value={"budget-desc"}>Rate : Low - High</option>
                        </select>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-5 gap-x-0 md:gap-x-2 gap-y-2 md:gap-y-0'>
                        <div className='col-span-1'>
                            <div className="p-6 bg-white rounded-lg shadow-md font-sans">
                                <h2 className="text-xl font-bold text-gray-900 mb-8">Filters</h2>

                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-base font-bold text-gray-900">Categories</h3>
                                    <button
                                        type="button"
                                        className="text-blue-600 text-sm hover:text-blue-800 hover:cursor-pointer font-medium transition-colors"
                                        onClick={()=> setCategory("")}
                                    >
                                        Clear
                                    </button>
                                </div>

                                <div className="space-y-4">

                                    <label className="flex items-center cursor-pointer">
                                        <input
                                            type="radio"
                                            name="category"
                                            value="Programming & Tech"
                                            checked={category === "Programming"}
                                            onChange={()=> setCategory('Programming')}
                                            className="h-3 w-3"
                                        />
                                        <span className="ml-2 text-xs">Programming & Tech</span>
                                    </label>

                                    <label className="flex items-center cursor-pointer">
                                        <input
                                            type="radio"
                                            name="category"
                                            value="Web Development"
                                            checked={category === "Web Development"}
                                            onChange={()=> setCategory('Web Development')}
                                            className="h-3 w-3"
                                        />
                                        <span className="ml-2 text-xs">Web Development</span>
                                    </label>

                                    
                                </div>
                            </div>
                        </div>

                        <div className='col-span-1 md:col-span-4'>
                            {/* Job List Container */}
                            <JobContainer jobs={allJobs}></JobContainer>
                        </div>
                    </div>

                    <div className='flex justify-center flex-wrap py-5 gap-1'>
                        {
                            currentPage > 0 && <button onClick={() => setCurrentPage(currentPage - 1)} className='btn'>Prev</button>
                        }
                        {
                            [...Array(totalPages).keys()].map((i) => (
                                <button key={i} onClick={() => setCurrentPage(i)} className={`btn ${i === currentPage && 'btn-primary'}`}>{i + 1}</button>
                            ))
                        }
                        {
                            currentPage < totalPages - 1 && <button onClick={() => setCurrentPage(currentPage + 1)} className='btn'>Next</button>
                        }
                    </div>
                </div>
            </MyContainer>
        </section>
    );
};

export default AllJobs;