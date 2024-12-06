import React from 'react';
import { Link } from 'react-router-dom';

const EquipmentCard = ({ equipment }) => {
    const { _id, photo, item, category, price, rating } = equipment;
    return (
        <div className='border p-4 rounded-md'>
            <img className='rounded-md h-[250px]' src={photo} alt="" />
            <div className='mt-4 space-y-1'>
                <h3 className='text-2xl font-semibold'>{item}</h3>
                <p className='text-sm font-semibold text-gray-700'>Category: {category}</p>
                <div className='flex items-center justify-between'>
                    <h5 className='font-semibold'>Price: ${price}</h5>
                    <div className='flex items-center gap-2'>
                        <p className='font-semibold'>{rating}</p>
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
                <div>
                    <Link className='btn mt-2'>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default EquipmentCard;