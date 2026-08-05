import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import TestimonialCard from "./TestimonialCard";

import { testimonials } from "./testimonialsData";

export default function TestimonialSlider() {

    return (

        <Swiper

            modules={[
                Autoplay,
                Navigation,
                Pagination,
            ]}

            slidesPerView={1}

            spaceBetween={30}

            loop

            navigation

            pagination={{
                clickable: true,
            }}

            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}

        >

            {

                testimonials.map((item)=>(

                    <SwiperSlide
                        key={item.id}
                    >

                        <TestimonialCard

                            avatar={item.avatar}

                            name={item.name}

                            city={item.city}

                            rating={item.rating}

                            category={item.category}

                            comment={item.comment}

                            date={item.date}

                        />

                    </SwiperSlide>

                ))

            }

        </Swiper>

    );

}