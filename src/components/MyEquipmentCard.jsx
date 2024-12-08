import React from 'react';
import { Rotate, Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyEquipmentCard = ({ equipment, equipments, setEquipments }) => {
    const { _id, photo, item, category, price, rating, stock } = equipment;
    const handleDeleteBtn = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://sport-store-server.vercel.app/allequipment/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your equipment has been deleted.",
                                icon: "success"
                            });
                        }
                        const reamingEquipment = equipments.filter(equ => equ._id !== id);
                        setEquipments(reamingEquipment);
                    })
            }
        });
    }
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
                    <div className='space-x-3'>
                        <Link to={`/equipment/${_id}`} className='btn mt-2 text-base'>View Details</Link>
                        <Link to={`/updateEquipment/${_id}`} className='btn mt-2 text-base'>Update</Link>
                        <Link onClick={() => handleDeleteBtn(_id)} className='btn mt-2 text-base'>Delete</Link>
                    </div>
                </div>
            </div>
        </Zoom>
    );
};

export default MyEquipmentCard;
