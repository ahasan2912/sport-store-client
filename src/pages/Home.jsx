import React, { useState } from 'react';
import Banner from '../components/Banner';
import SportCategories from '../components/SportCategories';
import { useLoaderData } from 'react-router-dom';
import EquipmentCard from '../components/EquipmentCard';
import { Bounce, Zoom } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import customer1 from '../assets/customer1.png';
import customer2 from '../assets/customer2.png';
import customer3 from '../assets/customer3.png';
import customer4 from '../assets/customer4.png';
import customer5 from '../assets/customer5.png';

const Home = () => {
    const equipmentData = useLoaderData();
    const [equipments, setEquipments] = useState(equipmentData);
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-7xl mx-auto'>
                <Zoom>
                    <h1 className='text-5xl font-bold text-center mt-10'>Our Equipments</h1>
                    <p className='w-[70%] mx-auto text-center mt-4'>Find the perfect gear for your favorite sport equipments. We offer a wide range of high-quality products for cricket, football, basketball, swimming, tennis, yoga and others. </p>
                </Zoom>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center mt-10'>
                    {
                        equipments.map(equipment => <EquipmentCard key={equipment._id}
                            equipment={equipment}></EquipmentCard>)
                    }
                </div>
            </div>
            <div className='my-16'>
                <SportCategories></SportCategories>
            </div>
            <div className="bg-[url('/src/assets/banner.PNG')] h-[70vh] bg-no-repeat bg-cover bg-center hidden lg:block"></div>
            <div className='max-w-7xl mx-auto hidden lg:block'>
                <Zoom>
                    <h1 className='text-5xl font-bold text-center mt-16'>Our Customer Review</h1>
                    <p className='w-[70%] mx-auto text-center mt-4'>Our customers love sharing their experiences! From quality products to excellent service, their reviews highlight the trust and satisfaction they have in us. Read their stories and see why we’re a favorite choice!</p>
                </Zoom>
                <div className='mt-10 mb-16'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper">
                        <SwiperSlide>
                            <Zoom>
                                <div className='border rounded-lg p-4'>
                                    <img className='rounded-lg w-full h-[250px]' src={customer1} alt="" />
                                    <div className='flex items-center justify-between mt-3'>
                                        <h1 className='text-2xl font-bold'>Emily Carter</h1>
                                        <div className='flex items-center gap-2'>
                                            <p className='font-semibold'>4.9</p>
                                            <div className="rating">
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input
                                                    type="radio"
                                                    name="rating-2"
                                                    className="mask mask-star-2 bg-orange-400"
                                                    defaultChecked />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-justify mt-1'>Customers are delighted with the exceptional product quality, fast delivery, user-friendly website, and efficient customer support, making their shopping experience reliable and enjoyable.</p>
                                </div>
                            </Zoom>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Zoom>
                                <div className='border rounded-lg p-4'>
                                    <img className='rounded-lg w-full h-[250px]' src={customer2} alt="" />
                                    <div className='flex items-center justify-between mt-3'>
                                        <h1 className='text-2xl font-bold'>James Parker</h1>
                                        <div className='flex items-center gap-2'>
                                            <p className='font-semibold'>4.9</p>
                                            <div className="rating">
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input
                                                    type="radio"
                                                    name="rating-2"
                                                    className="mask mask-star-2 bg-orange-400"
                                                    defaultChecked />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-justify mt-1'>Customers are delighted with the exceptional product quality, fast delivery, user-friendly website, and efficient customer support, making their shopping experience reliable and enjoyable.</p>
                                </div>
                            </Zoom>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Zoom>
                                <div className='border rounded-lg p-4'>
                                    <img className='rounded-lg w-full h-[250px]' src={customer3} alt="" />
                                    <div className='flex items-center justify-between mt-3'>
                                        <h1 className='text-2xl font-bold'>Sophia Johnson</h1>
                                        <div className='flex items-center gap-2'>
                                            <p className='font-semibold'>4.9</p>
                                            <div className="rating">
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input
                                                    type="radio"
                                                    name="rating-2"
                                                    className="mask mask-star-2 bg-orange-400"
                                                    defaultChecked />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-justify mt-1'>Customers are delighted with the exceptional product quality, fast delivery, user-friendly website, and efficient customer support, making their shopping experience reliable and enjoyable.</p>
                                </div>
                            </Zoom>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Zoom>
                                <div className='border rounded-lg p-4'>
                                    <img className='rounded-lg w-full h-[250px]' src={customer4} alt="" />
                                    <div className='flex items-center justify-between mt-3'>
                                        <h1 className='text-2xl font-bold'>Michael Brown</h1>
                                        <div className='flex items-center gap-2'>
                                            <p className='font-semibold'>4.5</p>
                                            <div className="rating">
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input
                                                    type="radio"
                                                    name="rating-2"
                                                    className="mask mask-star-2 bg-orange-400"
                                                    defaultChecked />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-justify mt-1'>Customers are delighted with the exceptional product quality, fast delivery, user-friendly website, and efficient customer support, making their shopping experience reliable and enjoyable.</p>
                                </div>
                            </Zoom>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Zoom>
                                <div className='border rounded-lg p-4'>
                                    <img className='rounded-lg w-full h-[250px]' src={customer5} alt="" />
                                    <div className='flex items-center justify-between mt-3'>
                                        <h1 className='text-2xl font-bold'>Olivia Williams</h1>
                                        <div className='flex items-center gap-2'>
                                            <p className='font-semibold'>4.6</p>
                                            <div className="rating">
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input
                                                    type="radio"
                                                    name="rating-2"
                                                    className="mask mask-star-2 bg-orange-400"
                                                    defaultChecked />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-justify mt-1'>Customers are delighted with the exceptional product quality, fast delivery, user-friendly website, and efficient customer support, making their shopping experience reliable and enjoyable.</p>
                                </div>
                            </Zoom>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Home;
