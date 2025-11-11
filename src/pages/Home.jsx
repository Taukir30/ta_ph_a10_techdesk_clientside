import React from 'react';
import Banner from '../components/Banner/Banner';
import Categories from '../components/Categories/Categories';
import LatestJobs from '../components/LatestJobs/LatestJobs';
import Support from '../components/Support/Support';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <LatestJobs></LatestJobs>
            <Support></Support>
        </div>
    );
};

export default Home;