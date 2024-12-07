import React, { useState } from 'react';
import Banner from '../components/Banner';
import SportCategories from '../components/SportCategories';
import { useLoaderData } from 'react-router-dom';
import EquipmentCard from '../components/EquipmentCard';
import { Bounce} from "react-awesome-reveal";

const Home = () => {
    const equipmentData = useLoaderData();
    const [equipments, setEquipments] = useState(equipmentData);
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-7xl mx-auto'>
                <Bounce>
                    <h1 className='text-5xl font-bold text-center mt-20'>Our Equipments</h1>
                    <p className='w-[70%] mx-auto text-center mt-4'>Find the perfect gear for your favorite sport equipments. We offer a wide range of high-quality products for cricket, football, basketball, swimming, tennis, yoga and others. </p>
                </Bounce>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center mt-10'>
                    {
                        equipments.map(equipment => <EquipmentCard key={equipment._id}
                            equipment={equipment}></EquipmentCard>)
                    }
                </div>
            </div>
            <div className='my-20'>
                <SportCategories></SportCategories>
            </div>
        </div>
    );
};

export default Home;