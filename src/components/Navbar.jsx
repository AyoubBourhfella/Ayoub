import { useMemo, memo, useState } from 'react';
import logo from '../assets/images/logo.png';
import Container from './Container';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import DecodeText from './DecodeText';


const Navbar = memo(() => {
    const [menuOpen, setMenuOpen] = useState(false);

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


Navbar.displayName = "Navbar";

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
                {/* Logo and Hamburger */}
                <div className="flex items-center w-full">
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
                    {/* Hamburger icon for mobile */}
                    <button
  className="ml-auto relative z-50 flex flex-col justify-center items-center w-8 h-8 md:hidden focus:outline-none"
  aria-label="Toggle menu"
  onClick={() => setMenuOpen((prev) => !prev)}
>
  <span
    className={`block w-6 h-0.5 bg-white rounded transition-transform duration-300 ease-in-out ${
      menuOpen ? 'rotate-45 translate-y-1.5' : ''
    }`}
  ></span>
  <span
    className={`block w-6 h-0.5 bg-white rounded my-1 transition-opacity duration-300 ease-in-out ${
      menuOpen ? 'opacity-0' : 'opacity-100'
    }`}
  ></span>
  <span
    className={`block w-6 h-0.5 bg-white rounded transition-transform duration-300 ease-in-out ${
      menuOpen ? '-rotate-45 -translate-y-1.5' : ''
    }`}
  ></span>
</button>

                </div>
                {/* Desktop Nav */}
                <motion.ul
                    initial="hidden"
                    animate="visible"
                    variants={container}
                    className='hidden md:flex gap-10  items-center w-full flex-wrap'
                >
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
                {/* Mobile Nav */}
                {menuOpen && (
                    <motion.ul
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className='absolute top-0 left-0  h-full w-full bg-black/80 bg-opacity-95 flex flex-col items-center justify-center gap-14 py-6 z-40 md:hidden shadow-lg rounded-b-lg'
                    >
                        <li>
                            <NavLink className='flex text-white font-monaco hover-1 relative text-lg' to={'/'} onClick={() => setMenuOpen(false)}>About</NavLink>
                        </li>
                        <li>
                            <NavLink className='flex text-white font-monaco hover-1 relative text-lg' to={'/Projets'} onClick={() => setMenuOpen(false)}>Projets</NavLink>
                        </li>
                        <li>
                            <NavLink className='flex text-white font-monaco hover-1 relative text-lg' to={'/contact'} onClick={() => setMenuOpen(false)}>Contact</NavLink>
                        </li>
                    </motion.ul>
                )}
            </motion.div>
        </Container>
    );
});

export default Navbar;
