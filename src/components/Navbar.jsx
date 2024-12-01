import React, { useMemo , memo } from 'react';
import logo from '../assets/images/logo.png';
import Container from './Container';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import DecodeText from './DecodeText';

const Navbar = memo(() => {

    // Use `useMemo` to memoize static animation settings
    const container = useMemo(() => ({
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }), []);

    const item = useMemo(() => ({
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }), []);

    const floating = useMemo(() => ({
        rest: { y: 0, transition: { type: "spring", duration: 0.5, ease: "easeIn" } },
        hover: { y: -10, transition: { type: "spring", duration: 0.5, ease: "easeOut" } }
    }), []);

    return (
        <Container>
            <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='w-full my-5 flex justify-between items-center'
            >
                <motion.ul
                    initial="hidden"
                    animate="visible"
                    variants={container}
                    className='flex gap-10 items-center w-full flex-wrap'
                >
                    <motion.li variants={item}>
                        <Link className='text-xl flex items-center text-white font-Menlo_r gap-2' to={'/'}>
                            <motion.img
                                className='w-11 h-11 object-contain hover:drop-shadow-lg'
                                src={logo}
                                alt="logo"
                                whileHover="hover"
                                initial="rest"
                                animate="rest"
                                variants={floating}
                            />
                            <DecodeText className='font-Menlo_r' text={'Ayoub'} />
                            <DecodeText className="font-Menlo_r text-primary" text={'Bourhfella'} />
                        </Link>
                    </motion.li>
                    <motion.li variants={item} className='ml-auto'>
                        <NavLink className='flex text-white font-monaco hover-1 relative' to={'/'}>About</NavLink>
                    </motion.li>
                    <motion.li variants={item}>
                        <NavLink className='flex text-white font-monaco hover-1 relative' to={'/Projets'}>Projets</NavLink>
                    </motion.li>
                    <motion.li variants={item}>
                        <NavLink className='flex text-white font-monaco hover-1 relative' to={'/contact'}>Contact</NavLink>
                    </motion.li>
                </motion.ul>
            </motion.div>
        </Container>
    );
});

export default Navbar;
