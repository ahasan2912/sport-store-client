import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EquipmentDetails = () => {
    const singleEquipment = useLoaderData();
    const { _id, photo, item, category, description, price, rating, customization, processing, stock, quantity } = singleEquipment;
    return (
        <div className='max-w-6xl mx-auto border flex flex-col lg:flex-row justify-center mt-5 lg:my-24 gap-5 p-5 rounded-md'>
            <div className='lg:w-1/2'>
                <img className='w-full h-full object-cover rounded-lg' src={photo} alt="" />
            </div>
            <div className='space-y-2 lg:w-1/2'>
                <h1 className='text-3xl font-semibold'>{item}</h1>
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
                <p className='text-lg font-semibold'>Price: ${price}</p>
                <p className='text-base text-justify'>{description}</p>
                <p className='text-lg font-semibold'>Customaization: {customization}</p>
                <p className='text-lg font-semibold'>Availabel Quantity: {quantity}</p>
                <p className='text-lg font-semibold'>Stock Status: {stock}</p>
                <p className='text-lg font-semibold'>Proceesing Time: {processing} Days</p>
                <button className='btn text-base'>Add To Cart</button>
            </div>
        </div>
    );
};

export default EquipmentDetails;