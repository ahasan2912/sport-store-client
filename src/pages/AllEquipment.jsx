import React, { useContext, useState } from 'react';
import { AuthContext } from '../Router/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';

const AllEquipment = () => {
    const equipmentData = useLoaderData();
    const { user } = useContext(AuthContext);
    const [equipments, setEquipments] = useState(equipmentData);
    return (
        <div className="overflow-x-auto mt-10 w-full md:max-w-5xl mx-auto">
            <h1 className='text-5xl font-bold text-center'>All Equipments List</h1>
            <div className='my-6'>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-base border'>
                            <th>Serial No</th>
                            <th>Item Name</th>
                            <th>Category Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            equipments.map((equipment, idx) =>
                                <tr key={idx} className="hover border">
                                    <th>{idx + 1}</th>
                                    <td>{equipment.item}</td>
                                    <td>{equipment.category}</td>
                                    <td>${equipment.price}</td>
                                    <td>{equipment.stock}</td>
                                    <td>
                                        <Link to={`/equipment/${equipment._id}`}>
                                            <button className='btn'>View Details</button>
                                        </Link>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllEquipment;