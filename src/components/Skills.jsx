import { motion } from 'framer-motion';
import DecodeText from './DecodeText';
import Skill from './Skill';
import AdvanceSkills from './AdvSkill';
import apiService from '../configs/apiService';
import { useEffect, useState } from 'react';
const Skills = () => {

    const AdvSkills = [
        {
            "id": 1,
            "name": "React JS",
            "icon": "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
            "color": "#61DAFB",
            "description": "Learn React for building dynamic and interactive web applications."
        },
        {
            "id": 2,
            "name": "React Native",
            "icon": "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
            "color": "#61DAFB",
            "description": "Master React Native for cross-platform mobile app development."
        },
        {
            "id": 3,
            "name": "Tailwind CSS",
            "icon": "https://img.icons8.com/?size=256&id=CIAZz2CYc6Kc&format=png",
            "color": "#38B2AC",
            "description": "Master Tailwind CSS for rapid UI development with utility-first classes."
        },
        {
            "id": 4,
            "name": "GitHub",
            "icon": "https://cdn-icons-png.flaticon.com/128/25/25231.png",
            "color": "#181717",
            "description": "Gain experience with Git and GitHub for version control and collaboration."
        },
        {
            "id": 5,
            "name": "Vs Code",
            "icon": "https://img.icons8.com/?size=256&id=9OGIyU8hrxW5&format=png",
            "color": "#007ACC",
            "description": "Learn how to use Visual Studio Code for efficient coding and debugging."
        },
        {
            "id": 6,
            "name": "Figma",
            "icon": "https://img.icons8.com/?size=256&id=zfHRZ6i1Wg0U&format=png",
            "color": "#F24E1E",
            "description": "Improve your design skills with Figma for creating professional UI/UX designs."
        },
        {
            "id": 7,
            "name": "Firebase",
            "icon": "https://img.icons8.com/?size=256&id=62452&format=png",
            "color": "#FFCA28",
            "description": "Learn how to use Firebase for backend services and real-time database management."
        },
        {
            "id": 8,
            "name": "Adobe Illustrator",
            "icon": "https://cdn-icons-png.flaticon.com/128/5611/5611037.png",
            "color": "#FF0000",
            "description": "Master Adobe Illustrator for creating stunning graphics and illustrations."
        },
        {
            "id": 9,
            "name": "Node.js",
            "icon": "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
            "color": "#339933",
            "description": "Learn Node.js for building fast and scalable server-side applications."
        },
        {
            "id": 10,
            "name": "Express.js",
            "icon": "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000",
            "color": "#000000",
            "description": "Understand Express.js for building robust web application backends."
        },
        {
            "id": 11,
            "name": "Flutter",
            "icon": "https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000",
            "color": "#02569B",
            "description": "Learn Flutter for crafting beautiful native apps for iOS and Android."
        },
        {
            "id": 12,
            "name": "Python",
            "icon": "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
            "color": "#306998",
            "description": "Learn Python for data science, web development, and scripting."
        },
        {
            "id": 13,
            "name": "PostgreSQL",
            "icon": "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
            "color": "#336791",
            "description": "Master PostgreSQL for powerful and reliable relational database management."
        },
        {
            "id": 14,
            "name": "MongoDB",
            "icon": "https://img.icons8.com/?size=100&id=74402&format=png&color=000000",
            "color": "#47A248",
            "description": "Understand MongoDB for handling flexible and scalable NoSQL databases."
        },
        {
            "id": 15,
            "name": "Linux",
            "icon": "https://img.icons8.com/?size=256&id=17842&format=png",
            "color": "#FCC624",
            "description": "Learn Linux for managing servers and understanding the open-source environment."
        },
        {
            "id": 16,
            "name": "Bootstrap",
            "icon": "https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000",
            "color": "#7952B3",
            "description": "Learn Bootstrap for responsive and mobile-first web development."
        }
    ]
    
    const basicSkills = [
        {
            "id": 1,
            "name": "HTML",
            "icon": "https:\/\/cdn-icons-png.flaticon.com\/128\/1051\/1051277.png",
            "color": "#E34F26",
            "extenstion": "html"
        },
        {
            "id": 2,
            "name": "CSS",
            "icon": "https:\/\/cdn-icons-png.flaticon.com\/128\/732\/732190.png",
            "color": "#1572B6",
            "extenstion": "css"
        },
        {
            "id": 3,
            "name": "JavaScript",
            "icon": "https:\/\/cdn-icons-png.flaticon.com\/128\/5968\/5968292.png",
            "color": "#F7DF1E",
            "extenstion": "js"
        }
    ] 
    
    
    return (
        <motion.div
            initial={{ opacity: 0, y: -200, opacity: 0, scale: 1.1 }} // Starts offscreen to the left with a larger scale
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
            className='  px-9 xl:px-0 text-center my-10  w-full h-full flex flex-col justify-center m-auto items-center xl:text-start'>
            <h1

                className='text-3xl font-bold mb-4 text-white text-center font-Menlo_r'>
                <span className='text-primary'>&lt;</span>
                <DecodeText className='capitalize' text="Skills" />
                <span className='text-primary'>&gt;</span>
            </h1>
            <h2 className='text-2xl font-bold mb-4 text-primary text-center font-Menlo_r'>
                Skills and Proficiencies
            </h2>
            <div className="flex flex-row w-full flex-wrap justify-center items-center my-7 gap-4">
                {basicSkills && basicSkills.map((item) => (
                    <Skill key={item.id} skill={item} />
                ))
                }
            </div>
            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-7">
                {AdvSkills && AdvSkills.map((item) => (
                    <AdvanceSkills key={item.id} skill={item} />
                ))}
            </div>
        </motion.div>
    )
}

export default Skills