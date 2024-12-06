import React, { useEffect, useState } from 'react';
import SportCategoriesCard from './SportCategoriesCard';
const SportCategories = () => {
    const [categories, setCategory] = useState([]);
    useEffect(()=> {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategory(data));
    }, [])
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-5xl font-bold text-center my-6'>Sports Categories</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center'>
               {
                categories.map(category => <SportCategoriesCard key={category.id}
                category={category}
                ></SportCategoriesCard>)
               }
            </div>
        </div>
    );
};

export default SportCategories;