import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { data } from "autoprefixer";



const Testimonials = () => {
const [reviews, setReviews] = useState([]);

useEffect(() =>{
    fetch('reviews.json')
    .then(res => res.json())
    .then(data => {
        setReviews(data)
    })
}, [])



    return (
        <div className="my-20">
            <SectionTitle
                heading="TESTIMONIALS"
                subHeading="What Our Clients Say"
            >

            </SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                
                {
                    reviews.map(review =>  
                    <SwiperSlide
                    key={review._id}

                    >
                    <div>
                        <p>
                            {review.details}
                        </p>
                        <h3 className="text-2xl text-orange-400">
                            {review.name}
                        </h3>
                    </div>
                        
                        </SwiperSlide>)
                }

            </Swiper>


        </div>
    );
};

export default Testimonials;