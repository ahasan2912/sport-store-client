import React from 'react';

const SportCategoriesCard = ({ category }) => {
    const { id, image, categoryName, rating } = category;
    return (
        <div className='border p-3 rounded-md'>
            <img className='' src={image} alt="" />
            <div className='flex items-center justify-between mt-5'>
                <h1 className='text-2xl font-semibold'>{categoryName}</h1>
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
            <div className='mt-2'>
                <button className='btn'>View Details</button>
            </div>
        </div>
    );
};

export default SportCategoriesCard;