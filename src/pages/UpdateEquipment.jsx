import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Router/AuthProvider';

const UpdateEquipment = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const singleEquipment = useLoaderData();
    const { _id, photo, item, category, description, price, rating,
        customization, processing, stock, quantity, email, name } = singleEquipment;
    const handleUpdateEquipment = (event) => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const item = form.item.value;
        const category = form.category.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing = form.processing.value;
        const stock = form.stock.value;
        const quantity = form.quantity.value;

        const updateData = {
            photo, item, category, description, price, rating, customization, processing, stock, quantity, email, name
        }
        fetch(`https://sport-store-server.vercel.app/allequipment/${_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Updated Scuccess!',
                        text: 'Equipment Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <h2 className='text-4xl font-extrabold text-center mt-10'>Update Equipment</h2>
            <div className='bg-[#F4F3F0] px-6 py-10 rounded-xl mt-10'>
                <form onSubmit={handleUpdateEquipment}>
                    {/* form row */}
                    <div className='md:flex gap-6'>
                        <div className='form-control md:w-1/2 '>
                            <label className='label'>
                                <span className='label-text font-semibold'>Equipement Image URL <span className='text-orange-500 text-lg text-left'>*</span></span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='Image URL' className='input input-bordered w-full' name='photo' required defaultValue={photo} />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text font-semibold'>Item Name <span className='text-orange-500 text-lg text-left'>*</span></span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='Item Name' className='input input-bordered w-full' name='item' required defaultValue={item} />
                            </label>
                        </div>
                    </div>
                    {/* form suplier row */}
                    <div className='md:flex gap-6'>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text font-semibold'>Category Name</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='Category Name' className='input input-bordered w-full' name='category' defaultValue={category} />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text font-semibold'>Description</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='Description' className='input input-bordered w-full' name='description' defaultValue={description} />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className='md:flex gap-6'>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text font-semibold'>Price</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='Price' className='input input-bordered w-full' name='price' defaultValue={price} />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text font-semibold'>Rating</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='Rating' className='input input-bordered w-full' name='rating' defaultValue={rating} />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className='md:flex gap-6'>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text font-semibold'>Customization</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='Customization' className='input input-bordered w-full' name='customization'
                                    defaultValue={customization} />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text font-semibold'>Processing Time</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='Processing Time' className='input input-bordered w-full' name='processing' defaultValue={processing} />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className='md:flex gap-6'>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text font-semibold'>Stock Status</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='Stock Status' className='input input-bordered w-full' name='stock' defaultValue={stock} />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text font-semibold'>Stock Quantity</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='Stock Quantity' className='input input-bordered w-full' name='quantity' defaultValue={quantity} />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className='md:flex gap-6'>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text font-semibold'>User Email <span className='text-orange-500 text-lg'>*</span></span>
                            </label>
                            <label className='input-group'>
                                <input type="email" placeholder='User Email' className='input input-bordered w-full' defaultValue={user?.email} name='email' required />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text font-semibold'>User Name <span className='text-orange-500 text-lg'>*</span></span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='name' className='input input-bordered w-full' defaultValue={user?.displayName} name='name' required />
                            </label>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <input type="submit" value='Update Equipment' className='btn btn-block input-bordered' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateEquipment;
