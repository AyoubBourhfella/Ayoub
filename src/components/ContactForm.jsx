import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com'; // Import EmailJS
import Notification from './Notification';
import { ImSpinner9 } from "react-icons/im";

const ContactForm = () => {
    const [shownotif, setShownotif] = useState(false);
    const [message, setMessage] = useState('');
    const [notifstatue, setNotifstatue] = useState('');
    const [isLoading, setIsLoading] = useState(false); // New state to track loading status

    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Set loading state to true when form is being submitted

        const templateParams = {
            fullName: formData.fullName,
            email: formData.email,
            message: formData.message,
        };

        try {
            await emailjs.send(
                'service_0mlhpwz',
                'template_l9grr1n',
                templateParams,
                's3iqHlIUC-Y1Adaug'
            );

            setNotifstatue('success');
            setMessage('Message sent successfully!');
            setShownotif(true);

            // Clear form
            setFormData({
                email: '',
                fullName: '',
                message: '',
            });
        } catch (error) {
            setMessage('Failed to send message. Please try again.');
            setNotifstatue('error');
            setShownotif(true);
        } finally {
            setIsLoading(false); // Reset loading state after submission is complete
            setTimeout(() => {
                setShownotif(false);
            }, 3000);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -200, scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                y: { duration: 1, ease: 'easeOut' },
                opacity: { duration: 0.8, ease: 'easeIn' },
                scale: {
                    delay: 1,
                    duration: 0.5,
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
                },
            }}
            className="px-9 xl:px-0 text-center w-full h-full flex flex-col justify-start m-auto items-center xl:text-start"
        >
            <Notification shownotif={shownotif} message={message} statue={notifstatue} />
            <h2 className="text-xl font-bold mb-4 text-gray text-center font-Menlo_r">
                Get in Touch
            </h2>

            <div className="flex w-full">
                <img className='w-1/3 object-cover' src="/get-in-touch-animate.svg" alt="" />

                <form
                    onSubmit={handleSubmit}
                    className="lg:w-2/3 w-full flex flex-col p-5 items-center bg-dark z-30 border-2 rounded-md border-gray"
                >
                    {/* Form Fields */}
                    <div className="flex flex-col sm:flex-row w-full gap-4 justify-center mb-4">
                        <div className="mb-4 w-full sm:w-1/2">
                            <label className="block text-white/80 text-start text-sm font-Menlo_r mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="py-3 px-4 bg-gray rounded-md w-full leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4 w-full sm:w-1/2">
                            <label className="block text-white/80 text-start text-sm font-Menlo_r mb-2" htmlFor="fullName">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="py-3 px-4 bg-gray rounded-md w-full leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                    </div>

                    {/* Message Field */}
                    <div className="flex w-full flex-col gap-4 items-center justify-center mb-4">
                        <div className="mb-4 w-full">
                            <label className="block text-white/80 text-start text-sm font-Menlo_r mb-2" htmlFor="message">
                                Your Message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="py-3 px-4 bg-gray rounded-md w-full leading-tight focus:outline-none focus:shadow-outline"
                                maxLength={500}  // Adjust max length if necessary
                                required
                            />
                            <p className="text-white/60 text-end text-sm mt-2">
                                {formData.message.length} / 500 characters
                            </p>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="bg-primary w-full hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        disabled={isLoading} // Disable button while loading
                    >
                        {isLoading ? (
                            <ImSpinner9 className=" animate-spin w-6 h-6 text-white mx-auto" /> // Use FaSpinner as the spinner icon
                        ) : (
                            'Send Message'
                        )}
                    </button>
                </form>
            </div>
        </motion.div>
    );
};

export default ContactForm;
