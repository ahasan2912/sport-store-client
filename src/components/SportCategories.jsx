import React, { useEffect, useState } from 'react';
import SportCategoriesCard from './SportCategoriesCard';
import { Bounce, Zoom } from 'react-awesome-reveal';
const SportCategories = () => {
    const [categories, setCategory] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategory(data));
    }, [])
    return (
        <div className='max-w-7xl mx-auto'>
            <Zoom>
                <h1 className='text-5xl font-bold text-center'>Equipment Categories</h1>
                <p className='w-[70%] mx-auto text-center mt-4'>Find the perfect gear for your favorite sport equipments. We offer a wide range of high-quality products for cricket, football, basketball, swimming, tennis, yoga and others. </p>
            </Zoom>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center mt-10'>
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