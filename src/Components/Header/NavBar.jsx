import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {

    const links = <>
        <div className='flex justify-center items-center gap-8 text-[20px]'>
            <Link to='./'><li className='hover:font-bold hover:text-red-600'>Home</li></Link>
            <Link to='./about'><li className='hover:font-bold hover:text-red-600'>About</li></Link>
            <Link to='./readList'><li className='hover:font-bold hover:text-red-600'>Read List</li></Link>
        </div>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="text-5xl text-[#3B25C1] font-bold hover:cursor-pointer">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;