import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/jeffrey-keenan-pUhxoSapPFA-unsplash.jpg";
import AVTR2 from "../../assets/julian-wan-WNoLnJo7tS8-unsplash.jpg";
import AVTR3 from "../../assets/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Raouf Hamshe",
    review:
      "A successful programmer who is always training and also seeks to increase his knowledge of programming.",
  },
  {
    avatar: AVTR2,
    name: "Reza Abdullahzadeh",
    review:
      "An excellent, experienced and very successful programmer in the field of science as well as in social relations.",
  },
  {
    avatar: AVTR3,
    name: "Nasser Shamlizadeh",
    review:
      "The best programmer and has great perseverance in programming as well as in a very successful life and high financial intelligence.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avator">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
