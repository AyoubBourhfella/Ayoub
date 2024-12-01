import { useState } from 'react';
import { motion } from 'framer-motion';
import apiService from './../configs/apiService';
import Notification from './Notification';
import { ImSpinner9 } from 'react-icons/im'; // Import the spinner icon

const LeaveFeedBack = () => {
    const [shownotif, setShownotif] = useState(false);
    const [message, setMessage] = useState('');
    const [notifstatue, setNotifstatue] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Add loading state

    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        opinion: '',
        rating: '5',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Set loading to true when submitting

        try {
            const response = await apiService.post('/feedbacks', formData);
            console.log(response);

            if (response.status) {
                setMessage(response.message);
                setShownotif(true);
                setNotifstatue('success');
                setFormData({
                    email: '',
                    fullName: '',
                    opinion: '',
                    rating: '',
                });
            } else {
                setMessage(response.message);
                setShownotif(true);
                setNotifstatue('error');
            }
        } catch (error) {
            setMessage("An error occurred. Please try again.");
            setNotifstatue('error');
            setShownotif(true);
        } finally {
            setIsLoading(false); // Reset loading state after submission
            setTimeout(() => {
                setShownotif(false);
            }, 3000);
        }
    };

    const maxChars = 200;

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
                filter: {
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
                Want to leave feedback?
            </h2>

            <form onSubmit={handleSubmit} className="lg:w-2/3 w-full flex flex-col p-5 items-center bg-dark z-30 border-2 rounded-md border-gray">
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
                <div className="flex w-full flex-col gap-4 items-center justify-center mb-4">
                    <div className="mb-4 w-full">
                        <label className="block text-white/80 text-start text-sm font-Menlo_r mb-2" htmlFor="opinion">
                            Opinion
                        </label>
                        <textarea
                            name="opinion"
                            value={formData.opinion}
                            onChange={handleChange}
                            className="py-3 px-4 bg-gray rounded-md w-full leading-tight focus:outline-none focus:shadow-outline"
                            maxLength={maxChars}
                            required
                        />
                        <p className="text-white/60 text-end text-sm mt-2">
                            {formData.opinion.length} / {maxChars} characters
                        </p>
                    </div>
                </div>
                <div className="flex w-full flex-row gap-4 items-center justify-center mb-4">
                    <div className="mb-4">
                        <label className="block text-white/80 text-start text-sm font-Menlo_r mb-2" htmlFor="rating">
                            Rating
                        </label>
                        <div className="rating flex gap-2">
                            {Array.from({ length: 5 }, (_, i) => (
                                <input
                                    key={i + 1}
                                    type="radio"
                                    name="rating"
                                    value={i + 1}
                                    checked={formData.rating === String(i + 1)}
                                    onChange={handleChange}
                                    className="mask mask-star-2 bg-orange-400"
                                    aria-label={`Rate ${i + 1} stars`}
                                />
                            ))}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-primary w-full hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        disabled={isLoading} // Disable button while loading
                    >
                        {isLoading ? (
                            <ImSpinner9 className="animate-spin w-6 h-6 text-white mx-auto" />
                        ) : (
                            'Submit Feedback'
                        )}
                    </button>
                </div>
            </form>
        </motion.div>
    );
};

export default LeaveFeedBack;
