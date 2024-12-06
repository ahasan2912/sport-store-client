import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
const Banner = () => {
    return (
        <div className='w-full'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div>
                        <img src={banner1} className='w-full' alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={banner2} className='w-full' alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={banner3} className='w-full' alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;