import React, { useContext, useState } from 'react';
import { AuthContext } from '../Router/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';
import { Tooltip as ReactTooltip } from "react-tooltip";

const AllEquipment = () => {
    const equipmentData = useLoaderData();
    const { user } = useContext(AuthContext);
    const [equipments, setEquipments] = useState(equipmentData);
    const handleSortBtn = () => {
        const sorted = [...equipments].sort((a, b) => b.price - a.price);
        setEquipments(sorted);
    }
    return (
        <div className="overflow-x-auto mt-10 w-full md:max-w-5xl mx-auto">
            <h1 className='text-5xl font-bold text-center'>All Equipments List</h1>
            <div className='text-right'>
                <button data-tooltip-id="my-tooltip-2" onClick={handleSortBtn} className='btn px-6'>Sort By Price</button>
                <ReactTooltip 
                id="my-tooltip-2"
                place="top"
                content="Descending Order">
                </ReactTooltip>
                
            </div>
            <div className='mt-6 mb-16'>
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