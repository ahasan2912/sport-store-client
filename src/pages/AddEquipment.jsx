import React, { useContext } from 'react';
import { AuthContext } from '../Router/AuthProvider';
import Swal from 'sweetalert2';

const AddEquipment = () => {
    const { user } = useContext(AuthContext);
    const handleAddEquipment = event => {
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
        const email = form.email.value;
        const name = form.name.value;

        const newData = { photo, item, category, description, price, rating, customization, processing, stock, quantity, email, name }
        console.log(newData)

        fetch('http://localhost:5000/equipment', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newData),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Scuccess!',
                        text: 'Equipment added successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <h2 className='text-4xl font-extrabold text-center mt-10'>Add Equipment</h2>
            <div className='bg-[#F4F3F0] px-6 py-10 rounded-xl mt-10'>
                <form onSubmit={handleAddEquipment}>
                    {/* form row */}
                    <div className='md:flex gap-6'>
                        <div className='form-control md:w-1/2 '>
                            <label className='label'>
                                <span className='label-text font-semibold'>Equipement Image URL</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='Image URL' className='input input-bordered w-full' name='photo' required/>
                            </label>
                        </div>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text'>Item Name</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='Item Name' className='input input-bordered w-full' name='item' required/>
                            </label>
                        </div>
                    </div>
                    {/* form suplier row */}
                    <div className='md:flex gap-6'>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text'>Category Name</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='Category Name' className='input input-bordered w-full' name='category'/>
                            </label>
                        </div>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text'>Description</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='Description' className='input input-bordered w-full' name='description' />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className='md:flex gap-6'>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text'>Price</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='Price' className='input input-bordered w-full' name='price' />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text'>Rating</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='Rating' className='input input-bordered w-full' name='rating' />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className='md:flex gap-6'>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text'>Customization</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='Customization' className='input input-bordered w-full' name='customization' />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text'>Processing Time</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='Processing Time' className='input input-bordered w-full' name='processing' />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className='md:flex gap-6'>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text'>Stock Status</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='Stock Status' className='input input-bordered w-full' name='stock' />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text'>Stock Quantity</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='Stock Quantity' className='input input-bordered w-full' name='quantity' />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className='md:flex gap-6'>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text'>User Email</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='User Email' className='input input-bordered w-full' defaultValue={user?.email} name='email' />
                            </label>
                        </div>
                        <div className='form-control md:w-1/2'>
                            <label className='label'>
                                <span className='label-text'>User Name</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='name' className='input input-bordered w-full' defaultValue={user?.displayName} name='name' />
                            </label>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <input type="submit" value='Add Equipment' className='btn btn-block input-bordered' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEquipment;
