import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const Notification = ({ shownotif, message, statue }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (shownotif) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
      }).then(() => {
        controls.start({
          scaleX: 1,
          transition: { duration: 0.2 }
        });
      });
    } else {
      controls.start({
        scaleX: 0,
        transition: { duration: 0.2 }
      }).then(() => {
        controls.start({
          opacity: 0,
          y: -100,
          transition: { duration: 0.5 }
        });
      });
    }
  }, [shownotif, controls]);

  return (
    <motion.div
      className="fixed m-5 top-0 overflow-hidden z-[999]"
      animate={controls}
      initial={{ opacity: 0, y: -100, scaleX: 0 }}
      style={{ transformOrigin: 'center' }} // Start scaling from the center
    >
      <div role="alert" className={`alert alert-${statue} border-primary flex items-center bg-backhightlight text-primary`}>
        {statue === 'success' ? (

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
        <p className='text-white text-nowrap'>{message}</p>
      </div>
    </motion.div>
  );
};

export default Notification;
