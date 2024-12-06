import React, { useContext } from 'react';
import { AuthContext } from '../Router/AuthProvider';

const AllEquipment = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
           {user?.email}
        </div>
    );
};

export default AllEquipment;