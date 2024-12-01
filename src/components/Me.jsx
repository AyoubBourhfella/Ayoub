import React from 'react';
import banner from '../assets/images/banner.png';
import me from '../assets/images/me.jpeg';
import { motion } from 'framer-motion';
import DecodeText from './DecodeText';

const Me = () => {
    return (

        <motion.div
            className="xl:items-start px-9 xl:px-0 text-center w-full h-full flex flex-col justify-between m-auto items-center xl:text-start"
            initial={{ opacity: 0, x: -200, opacity: 0, scale: 1.1}} // Starts offscreen to the left with a larger scale
            whileInView={{ opacity: 1, x: 0, scale: 1, opacity: 1}} // Moves to the center and scales downfinal horizontal position and scales down

            transition={{
                x: { duration: 1, ease: "easeOut" }, // Controls the horizontal slide duration and easing
                opacity: { duration: 0.8, ease: "easeIn" }, // Fades in during the slide
                scale: {
                    delay: 1,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                },
                filter: {
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                }
            }}
        >

            <h1 className="text-3xl font-bold  my-7  text-white font-Menlo_r">
                <span className="text-primary">&lt;</span>
                <DecodeText className="capitalize" text="About" />
                <span className="text-primary">&gt;</span>
            </h1>
            <div className="flex flex-row flex-wrap items-start justify-center w-full">

                <div className="myimg lg:w-1/3 w-full p-6 rounded-lg overflow-hidden relative">

                    <div className="relative w-1/2 mx-auto  rounded-lg">
                        <img
                            src={me}
                            alt="myimg"
                            className=" aspect-square object-cover relative z-10 rounded-lg"
                        />
                        <div className="absolute inset-0 rounded-lg -translate-x-5 -translate-y-5 blur-[2px] bg-white/20"></div>
                    </div>

                </div>
                <div className="lg:w-2/3 p-6   w-full flex flex-grow flex-col justify-center">

                    <p className='text-gray font-monaco text-pretty p-5 text-left  bg-[#4f566d]/20 rounded-md'>
                        Web Developer with a proven ability to adapt to both autonomous and collaborative environments while remaining focused on delivering high-quality results within strict deadlines.


                    </p>
                    <div className="flex flex-row flex-wrap gap-5 mt-5 ">

                        <p className="text-gray font-monaco text-left">
                            Front-end <span className=" text-primary">Development</span>
                        </p>
                        <p className="text-gray font-monaco text-left">
                            Back-end <span className=" text-primary">Development</span>
                        </p>
                        <p className="text-gray font-monaco text-left">
                            <span className="font-bold">Git, GitHub</span>
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>

    );
};

export default Me;
