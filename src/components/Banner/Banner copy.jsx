import React from 'react';
import { motion } from "motion/react"
import MyContainer from '../MyContainer/MyContainer'
import banBg from '../../assets/banBg.png'
import banImg from '../../assets/banPhoto.png';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className=' w-full min-h-[550px] bg-cover bg-bottom' style={{ backgroundImage: `url(${banBg})` }}>
            <MyContainer>
                <div className='flex flex-col-reverse md:flex-row justify-between h-[500px] mt-15'>
                    <div className="left w-full md:w-2/5 gap-4 flex flex-col justify-center my-10">
                        <h1 className='text-4xl/snug tracking-wider font-bold text-white'>A Freelancing Platform You Can Truly Rely On</h1>
                        <p className='text-base-200'>Hire trusted freelancers and get your projects done on time</p>
                        <Link className='btn w-35 rounded-4xl'>Create a job</Link>
                    </div>
                    <div className="right bg-[#525D53] h-fit flex justify-center items-center pt-20 mt-20 rounded-4xl">
                        <img className='w-[500px] rounded' src={banImg} alt="" />
                    </div>
                </div>
            </MyContainer>
        </div>
    );
};

export default Banner;