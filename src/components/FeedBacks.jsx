import { motion } from 'framer-motion'
import DecodeText from './DecodeText'
import Carrousel from './Carrousel'
import { useState , useEffect} from 'react';
import apiService from '../configs/apiService';

const FeedBacks = () => {
    const slides = [
        {
            "id": 1,
            "email": "marie.edwards@example.com",
            "FullName": "Marie Edwards",
            "opinion": "I loved the Work With the developer. It was great and the project was delivered on time.",
            "rating": 5,
            "Approved": 1
        },
        {
            "id": 2,
            "email": "kelly.woods@example.com",
            "FullName": "Kelly Woods",
            "opinion": "I loved the Work With the developer. It was great and the project was delivered on time.",
            "rating": 4,
            "Approved": 1
        },
        {
            "id": 3,
            "email": "john.doe@example.com",
            "FullName": "John Doe",
            "opinion": "I loved the Work With the developer. It was great and the project was delivered on time.",
            "rating": 5,
            "Approved": 1
        }
    ]
  
    return (
        <motion.div
            initial={{ opacity: 0, y: -200, opacity: 0, scale: 1.1}} // Starts offscreen to the left with a larger scale
            whileInView={{ opacity: 1, y: 0, scale: 1, opacity: 1 }} // Moves to the center and scales downfinal horizontal position and scales down

            transition={{
                y: { duration: 1, ease: "easeOut" }, // Controls the horizontal slide duration and easing
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
            className='  md:px-9 xl:px-0 text-center my-10  w-full h-full flex flex-col justify-center m-auto items-center xl:text-start'>
            <h1

                className='text-3xl font-bold mb-4 text-white text-center font-Menlo_r'>
                <span className='text-primary'>&lt;</span>
                <DecodeText className='capitalize' text="FeedBacks" />
                <span className='text-primary'>&gt;</span>
            </h1>
            <h2 className='text-xl font-bold mb-4 text-gray text-center font-Menlo_r'>
                See what people are saying about me
            </h2>
            <div className='flex flex-col gap-5 my-5 xl:gap-10 w-full h-full justify-center items-center'>
                <Carrousel slides={slides} />
            </div>
            
        </motion.div>
    )
}

export default FeedBacks