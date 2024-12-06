import React from 'react';
import Banner from '../components/Banner';
import SportCategories from '../components/SportCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className=''>
                <SportCategories></SportCategories>
            </div>
        </div>
    );
};

export default Home;