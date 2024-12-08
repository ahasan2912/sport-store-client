import React from 'react';
import { Bounce, Rotate, Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const EquipmentCard = ({ equipment }) => {
    const { _id, photo, item, category, price, rating, stock } = equipment;
    return (
        <Zoom>
            <div className='border p-4 rounded-md'>
                <img className='rounded-md h-[250px] w-full' src={photo} alt="" />
                <div className='mt-4 space-y-1'>
                    <h3 className='text-2xl font-semibold'>{item}</h3>
                    <div className='flex items-center justify-between'>
                        <p className='text-sm font-semibold text-gray-700'>Category: {category}</p>
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
                    <div className='flex items-center justify-between space-y-1'>
                        <h5 className='font-semibold'>Price: ${price}</h5>
                        <p className='text-base font-semibold border px-4 py-1 cursor-pointer rounded-md hover:bg-base-300'>{stock}</p>
                    </div>
                    <div>
                        <Link to={`/equipment/${_id}`} className='btn mt-2 text-base'>View Details</Link>
                    </div>
                </div>
            </div>
        </Zoom>
    );
};

export default EquipmentCard;