import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import DecodeText from './DecodeText';
import TextTransition, { presets } from 'react-text-transition';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import cv from '../assets/Docs/Ayoub_Resume.pdf';
import { IoDocumentText } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";
const Hello = () => {

    const TEXTS = ['Web Developer', 'Mobile Developer',];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000,);
        return () => clearTimeout(intervalId);
    }, []);
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };
    return (
        <motion.div
            initial={{ opacity: 0, x: -200, opacity: 0, scale: 1.1}} // Starts offscreen to the left with a larger scale
            whileInView={{ opacity: 1, x: 0, scale: 1, opacity: 1 }} // Moves to the center and scales downfinal horizontal position and scales down

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
            className='xl:w-1/2 xl:items-start px-9 xl:px-0 text-center  w-full h-full flex flex-col justify-center m-auto items-center xl:text-start'>
            <h1

                className='text-3xl font-bold mb-4 text-white font-Menlo_r'>
                <span className='text-primary'>&lt;</span>
                <DecodeText className='capitalize' text="Hello" />
                <span className='text-primary'>&gt;</span>
            </h1>
            <p className='text-white font-Menlo_r text-3xl mb-4'>
                I'm <span className='text-primary'>Ayoub Bourhfella</span>
            </p>
            <p className='text-white font-Menlo_r gap-4 flex transition-all  text-3xl mb-4'>
                I'm a <span className='text-primary'> {'{ '}</span>
                <TextTransition className='inline' springConfig={presets.default} >{TEXTS[index % TEXTS.length]}</TextTransition>
                <span className='text-primary'> {' }'}</span>
            </p>
            <p className='text-gray font-monaco text-sm'>Passionate developer exploring the realms of <span className='text-white'>{'< mobile >'}</span>  and <span className='text-white'>{'< web >'}</span> applications, aspiring to make impactful contributions in the tech industry.
            </p>
            <motion.ul
                initial="hidden"
                animate="visible"
                variants={container}
                className='flex gap-10 items-center my-5 w-full justify-center xl:justify-start flex-wrap'
            >
                <motion.li variants={item}>
                    <Link to={'https://github.com/AyoubBourhfella'} >
                        <FaGithub className='hover:fill-white hover:scale-105 transition-all ' color='#6b7483' size={30} />
                    </Link>
                </motion.li>
                <motion.li variants={item}>
                    <Link to={'https://www.linkedin.com/in/ayoub-bourhfella/'} >
                        <FaLinkedin className='hover:fill-white hover:scale-105 transition-all ' color='#6b7483' size={30} />
                    </Link>
                </motion.li>
            </motion.ul>
            <motion.ul
                initial="hidden"
                animate="visible"
                variants={container}
                className='flex gap-5 items-center my-5 w-full flex-wrap justify-center xl:justify-start'
            >
                <motion.li variants={item}>
                    <a
                        href={cv}
                        download={true}
                        className='flex gap-2 group hover:border-primary hover:text-primary hover:scale-105 transition-all items-center text-white bg-[#4f566d]/20 p-2 px-5 border border-gray rounded-full'
                    >
                        <IoDocumentText
                            className='group-hover:text-primary transition-colors text-[#6b7483]'

                            size={20}
                        />
                        Download CV
                    </a>
                </motion.li>
                <motion.li variants={item}>
                    <Link
                        to={'/Contact'}
                        className='flex gap-3 group border-primary text-white hover:scale-105 transition-all items-center hover:text-white bg-primary p-2 px-7 border hover:border-gray rounded-full'
                    >
                        <MdOutlineAttachEmail 
                            className='m-auto transition-colors text-white'

                            size={20}
                        />
                        Contact
                    </Link>
                </motion.li>
            </motion.ul>
        </motion.div>
    );
};

export default Hello;
