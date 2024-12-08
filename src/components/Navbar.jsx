import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Router/AuthProvider';
import { Tooltip as ReactTooltip } from "react-tooltip";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa";

const Navbar = () => {
    const { user, handleLogOut } = useContext(AuthContext);
    //For Dark and Light Mode
    /* const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "system"
    );

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "system") {
            const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            root.setAttribute("data-theme", dark ? "dark" : "light");
        }
        else {
            root.setAttribute("data-theme", theme);
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        }
        else if (theme === "dark") {
            setTheme("system");
        }
        else {
            setTheme("light");
        }
    }; */

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }


    return (
        <div className="navbar bg-base-100 shadow-md px-4 fixed w-full z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-md text-base font-semibold">
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
            <div className="navbar-end space-x-2">
                {
                    user && user?.email ?
                        <div className='flex items-center justify-center gap-2'>
                            <div className='flex gap-2 items-center justify-center'>
                                <img data-tooltip-id="my-tooltip-1" className='w-12 h-12 rounded-full object-cover' src={user.photoURL} alt="" />
                                <ReactTooltip
                                    id="my-tooltip-1"
                                    place="bottom"
                                    content={user?.displayName}
                                />
                            </div>
                            <Link onClick={handleLogOut} to="/" className="btn btn-ghost">LogOut</Link>
                        </div> : <Link to='/signin' className="btn btn-ghost font-semibold text-base">LogIn</Link>
                }
                <div>
                    <button className='p-2 rounded-full bg-base-200 shadow-md flex items-center justify-center' onClick={handleTheme} title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
                        {
                            theme === "light" ? <FaSun className="text-gray-600 text-2xl"></FaSun> : <FaMoon className="text-blue-500 text-2xl"></FaMoon>
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
