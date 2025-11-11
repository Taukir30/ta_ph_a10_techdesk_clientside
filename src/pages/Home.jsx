import React from 'react';
import Banner from '../components/Banner/Banner';
import Categories from '../components/Categories/Categories';
import LatestJobs from '../components/LatestJobs/LatestJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <LatestJobs></LatestJobs>
        </div>
    );
};

export default Home;