import React, { useState } from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Router/AuthProvider';
import MyEquipmentCard from '../components/MyEquipmentCard';

const MyEequipment = () => {
    const {user} = useContext(AuthContext);
    const equipments = useLoaderData();
    const reamingEquipment = equipments.filter(equipment => equipment.email === user?.email);
    return (
        <div className='max-w-7xl mx-auto mt-10'>
            <h1 className='text-5xl font-semibold text-center'>My Equipmnts</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center mt-5'>
                {
                    reamingEquipment.map(equipment => <MyEquipmentCard key={equipment._id} equipment={equipment}></MyEquipmentCard>)
                }
            </div>
        </div>
    );
};

export default MyEequipment;
