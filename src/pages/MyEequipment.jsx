import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Router/AuthProvider';
import MyEquipmentCard from '../components/MyEquipmentCard';
import { Bounce, Zoom } from 'react-awesome-reveal';


const MyEequipment = () => {
    const { user } = useContext(AuthContext);
    const equipmentData = useLoaderData();
    const [equipments, setEquipments] = useState(equipmentData);

    useEffect(() => {
        const reamingEquipment = equipments.filter(equipment => equipment.email === user?.email);
        setEquipments(reamingEquipment);
    }, [])

    return (
        <div className='max-w-7xl mx-auto my-10'>
            <Zoom>
                <h1 className='text-5xl font-semibold text-center'>My Equipmnts</h1>
            </Zoom>
            {
                equipments.length === 0 ? <div>
                    <p className='text-3xl flex flex-col items-center justify-center h-[50vh]'>You have no equipments. If you want to added equipment please <Link to='/addequipment' className='text-blue-600'>clicked</Link></p>
                </div>
                    :
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center mt-5'>
                        {
                            equipments.map(equipment => <MyEquipmentCard
                                key={equipment._id}
                                equipment={equipment}
                                equipments={equipments}
                                setEquipments={setEquipments}
                            ></MyEquipmentCard>)
                        }
                    </div>
            }
        </div>
    );
};

export default MyEequipment;
