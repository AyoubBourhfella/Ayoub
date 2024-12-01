import { motion } from "framer-motion";

const Footer = () => {

    return (
        <motion.footer
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}

            className=" bg-[#4f566d]/20">
            <h4 className='text-base text-white text-center  py-4'>
                Ayoub Bourhfella - 2024
            </h4>


        </motion.footer>
    )
}

export default Footer