import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore from "swiper";
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { motion } from "framer-motion";
import { FaStar, FaRegStar } from "react-icons/fa";


SwiperCore.use([EffectCoverflow, Pagination]);

const Carrousel = ({ slides }) => {
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
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const totalStars = 5;
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <motion.li
          key={i}
          variants={item}
          className="list-none"
          
        >
          {i <= rating ? (
            <FaStar className="text-yellow-500" />
          ) : (
            <FaRegStar className="text-yellow-500" />
          )}
        </motion.li>
      );
    }

    return stars;
  };

  return (
    <div className="swiper-container">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        
        parallax={true}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 350,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ el: ".swiper-pagination" , clickable: true }}
        initialSlide={1}
        className="swiper-wrapper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="swiper-slide p-4 gap-3 flex flex-col">
            <div className="flex flex-col my-5  items-center justify-start gap-4">
              
              <h3 className="font-bold text-xl">{slide.FullName}</h3>
              <h3 className="font-bold bg-slate-200 text-sm py-1 px-3 rounded-full">{slide.email}</h3>
            </div>
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={container}
                className="flex items-center justify-center gap-2"
              >
                {renderStars(slide.rating)}
              </motion.ul>
              <p className="text-center text-pretty text-base m-5">{slide.opinion}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"></div>
      <div className="swiper-scrollbar"></div>
    </div>
  );
};

export default Carrousel;
