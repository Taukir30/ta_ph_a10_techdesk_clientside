import React from 'react';
import { motion } from "motion/react"
import MyContainer from '../MyContainer/MyContainer'
import banBg from '../../assets/banBg.png'
import banImg from '../../assets/banPhoto.png';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className="w-full min-h-[550px] bg-cover bg-bottom mt-[200px] md:mt-[65px]" style={{ backgroundImage: `url(${banBg})` }} >
            <MyContainer>
                <div className="flex flex-col-reverse md:flex-row justify-between h-[500px] mt-15">

                    {/* LEFT SIDE - Text Animation */}
                    <motion.div
                        className="left w-full md:w-2/5 gap-4 flex flex-col justify-center my-10"
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <h1 className="text-4xl/snug tracking-wider font-bold text-white">
                            A Freelancing Platform You Can Truly Rely On
                        </h1>
                        <p className="text-base-200">
                            Hire trusted freelancers and get your projects done on time
                        </p>
                        <Link to='/addjob' className="btn shadow-none btn-success w-35 rounded-4xl">Create a job</Link>
                    </motion.div>

                    {/* RIGHT SIDE - Image Animation */}
                    <motion.div
                        className="right bg-[#525D53] h-fit flex justify-center items-center pt-20 mt-25 rounded-4xl"
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <img className="w-[300px] md:w-[350px] lg:w-[500px] rounded" src={banImg} alt="banner" />
                    </motion.div>
                </div>
            </MyContainer>
        </div>
    );
};

export default Banner;