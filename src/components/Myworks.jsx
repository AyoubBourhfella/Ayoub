import { motion } from 'framer-motion'
import DecodeText from './DecodeText'
import Work from './Work'
import { useState } from 'react';
const Myworks = () => {
    const worksList = [
        {
            id: 1,
            type: ['web'], 
            title: 'Plan-Jeu',
            description: 'A web application designed for managing matches and players, built to streamline event organization and performance tracking.',
            image: '/Projets/planjeu.png',
            link: 'https://github.com/AyoubBourhfella/Planjeu' ,
            availble : true
        },
        {
            id: 2,
            title: 'ChefMe',
            type: ['web'], 
            description: 'A recipe management web app for users to find, save, and share cooking recipes. Built with a focus on user-friendly navigation.',
            image: 'https://github.com/AyoubBourhfella/Chefme/raw/master/AppScreenShots/chefmeLogin.jpeg',
            link: 'https://github.com/AyoubBourhfella/Chefme' ,
            availble : true
        },
        {
            id: 3,
            title: 'The Wise Remembrance',
            type: ['mobile'], 
            description: 'A mobile app featuring prayer times, Quran reading/listening, and tasbih functionalities. Designed for daily Islamic practices.',
            image: '/Projets/theWiseRemembrance.jpg',
            link: 'https://github.com/Ayoub-b1/The-Wise-Remembrance' ,
            availble : true
        },
        {
            id: 4,
            title: 'Daily Scheduler',
            type: ['mobile'], 
            description: 'A mobile app providing train schedules, designed to make daily commutes more efficient and stress-free.',
            image: 'https://github.com/AyoubBourhfella/daily-Scheduler/raw/main/AppScreenShots/main.jpg',
            link: 'https://github.com/AyoubBourhfella/daily-Scheduler',
            availble : true
        },
        {
            id: 5,
            type: ['mobile' , 'web'], 
            title: 'Site Vitrine',
            description: 'A web and mobile application for displaying articles, complete with an admin panel for easy content management.',
            image: 'https://via.placeholder.com/300x200?text=Site+Vitrine',
            link: 'https://github.com/Ayoub-b1/Site-Vitrine',
            availble : true,
            
        },
        {
            id: 6,
            type: [ 'web'], 
            title: 'Cafeteria',
            description: 'A web application to manage school cafeteria, complete with an chef panel for easy content management.',
            image: '/Projets/Cafeteria.png',
            link: 'https://github.com/AyoubBourhfella/Cafeteria',
            availble : true,
        },
        {
            id: 7,
            type: ['web'], 
            title: 'School Management System',
            description: 'A comprehensive school management system using PostgreSQL for relational data and MongoDB for semi-structured data.',
            image: 'https://via.placeholder.com/300x200?text=School+Management+System',
            link: 'https://github.com/Ayoub-b1/School-Management-System',
            availble : false,
        }
    ];

    const [works, setWorks] = useState(worksList);
    const handleChange = (e)=>{
        
    
        const filterValue = e.target.value;
        setWorks(worksList); 

        if (filterValue === 'all') {
            setWorks(worksList); 
        } else {
            setWorks(worksList.filter(work => work.type.includes(filterValue)));
        }
    
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: -200, opacity: 0, scale: 1.1 }} 
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

            <h1 className="text-2xl font-bold  my-7  text-white font-Menlo_r">
                <span className="text-primary">&lt;</span>
                <DecodeText className="capitalize" text="My Works" />
                <span className="text-primary">&gt;</span>
            </h1>
            <div className="flex w-full">
                <form action="" className='flex items-center justify-evenly w-1/2 mx-auto' >
                    <input onChange={(e)=> { handleChange(e)} } type="radio" value="all" name="filter" id="all" defaultChecked className='hidden' />
                    <label htmlFor="all" className='py-1 min-w-24 text-center cursor-pointer hover:scale-105  text-xl text-gray border border-gray rounded-full '>All</label>
                    <input onChange={(e)=> { handleChange(e)} } type="radio" value="web" name="filter" id="web" className='hidden' />
                    <label htmlFor="web" className='py-1 min-w-24 text-center cursor-pointer hover:scale-105  text-xl text-gray border border-gray rounded-full '>Web</label>
                    <input onChange={(e)=> { handleChange(e)} } type="radio" value="mobile" name="filter" id="mobile" className='hidden' />
                    <label htmlFor="mobile" className='py-1 min-w-24 text-center cursor-pointer hover:scale-105  text-xl text-gray border border-gray rounded-full '>Mobile</label>

                </form>
            </div>
            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 my-7">
                {works && works.map((work) => (
                    <Work key={work.id} work={work} />
                ))}

            </div>
        </motion.div>
    )
}

export default Myworks