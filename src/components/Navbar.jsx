import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-md px-4 fixed w-full z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/allequipment'>All Equipment</NavLink>
                        <NavLink to='/addequipment'>Add Equipment</NavLink>
                        <NavLink to='/myequipment'>My Equipment</NavLink>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl font-semibold">SPORT STORE</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-6 text-base font-semibold ">
                    <NavLink to='/' className="hover:text-red-600">Home</NavLink>
                    <NavLink to='/allequipment' className="hover:text-red-600">All Equipment</NavLink>
                    <NavLink to='/addequipment' className="hover:text-red-600">Add Equipment</NavLink>
                    <NavLink to='/myequipment' className="hover:text-red-600">My Equipment</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/signin' className="btn font-semibold text-base">LogIn</Link>
            </div>
        </div>
    );
};

export default Navbar;