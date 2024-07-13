import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiMenuBurger } from 'react-icons/ci';
import { GiCrossedBones } from 'react-icons/gi';

function Navbar() {
    const [nav, setNav] = useState(false);

    const closeNav = () => {
        setNav(false);
    };

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="navbar w-full fixed top-0 bg-white shadow-md z-10">
            <div className="flex justify-between items-center px-4 h-16">
                <Link to='/' className='logo'>
                    <h1 className='logo'>Zeeshan<span className='dot'>.</span></h1>
                </Link>
                <div className="hidden md:flex space-x-4">
                    <a href='#home' className='hover:text-gray-600' onClick={closeNav}>Home</a>
                    <a href='#About'  className='hover:text-gray-600' onClick={closeNav}>About</a>
                    <a href='#skill'  className='hover:text-gray-600' onClick={closeNav}>Skills</a>
                    <a href="#projects" className='hover:text-gray-600' onClick={closeNav}>Projects</a>
                    <a href='#contact' className='hover:text-gray-600' onClick={closeNav}>Contact</a>
                </div>
                <div className="md:hidden">
                    <button onClick={handleNav}>
                        {nav ? <GiCrossedBones size={24} /> : <CiMenuBurger size={24} />}
                    </button>
                </div>
            </div>
            {nav && (
                <div className="md:hidden">
                    <ul className="flex flex-col gap-5 min-h-screen items-center space-y-6 mt-4">
                        <a href='#home' className='border-2 border-black rounded-md px-6 p-1 hover:bg-black hover:text-white' onClick={closeNav}>Home</a>
                        <a href='#About' className='border-2 border-black rounded-md px-6 p-1 hover:bg-black hover:text-white' onClick={closeNav}>About</a>
                        <a href='#skill' className='border-2 border-black rounded-md px-6 p-1 hover:bg-black hover:text-white' onClick={closeNav}>Skills</a>
                        <a href="#projects" className='border-2 border-black rounded-md px-6 p-1 hover:bg-black hover:text-white' onClick={closeNav}>Projects</a>
                        <a href='#contact' className='border-2 border-black rounded-md px-6 p-1 hover:bg-black hover:text-white' onClick={closeNav}>Contact</a>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navbar;
