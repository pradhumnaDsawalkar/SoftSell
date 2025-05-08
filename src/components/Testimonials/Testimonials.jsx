import React, { useRef } from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO',
    company: 'TechWorks',
    review: 'SoftSell made selling our unused software licenses incredibly simple and fast. Highly recommended!',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    company: 'InnovateInc',
    review: 'The process was seamless, and we got paid immediately after the valuation. A trustworthy partner.',
  },
  {
    name: 'Michael Green',
    role: 'Procurement Head',
    company: 'SoftCore',
    review: 'I was amazed by how easy and efficient the resale process was. 5 stars from us!',
  },
  {
    name: 'Priya Verma',
    role: 'IT Manager',
    company: 'DataNest',
    review: 'The customer support was fantastic and made the entire process stress-free.',
  },
];

const Testimonials = () => {
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <section className="testimonials">
      <h2 className="testimonials-title">What Our Clients Say</h2>

      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {testimonials.map((review, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <p className="testimonial-text">"{review.review}"</p>
                <p className="testimonial-author">
                  <strong>{review.name}</strong>, {review.role} at {review.company}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
