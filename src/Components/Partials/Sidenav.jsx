import React from 'react';
import { NavLink } from 'react-router-dom';
import { SiBuzzfeed } from "react-icons/si";
import { FaFireAlt } from "react-icons/fa";
import { RiMovieFill } from "react-icons/ri";
import { MdOutlineConnectedTv } from "react-icons/md";
import { BsFillCameraReelsFill } from "react-icons/bs";

const Sidenav = () => {
    return (
        <div className='w-[20%] h-full border-r-2 border-slate-400 p-8    '>
            {/* Header logo */}
            <h1 className='flex items-center'>
                <i className="text-[#00ed82] text-3xl mr-2 ri-tv-fill"></i>
                <span className='text-3xl text-white font-bold'>Netify.</span>
            </h1>

            {/* Navigation */}
            <nav className='mt-10 flex flex-col'>
                <h1 className='text-xl font-light text-white mb-5'>New Feeds</h1>
                <NavLink to='/trending' className='p-5 text-slate-500 rounded duration-300 font-semibold hover:bg-[rgba(0,237,130,0.7)] hover:text-white flex items-center'><FaFireAlt className='mr-2 text-xl' />Trending</NavLink>
                <NavLink to='/popular' className='p-5 text-slate-500 rounded duration-300 font-semibold hover:bg-[rgba(0,237,130,0.7)] hover:text-white flex items-center'><SiBuzzfeed className='mr-2 text-xl' />Popular</NavLink>
                <NavLink to="/movies" className='p-5 text-slate-500 rounded duration-300 font-semibold hover:bg-[rgba(0,237,130,0.7)] hover:text-white flex items-center'><RiMovieFill className='mr-2 text-xl' />Movies</NavLink>
                <NavLink to="/tv" className='p-5 text-slate-500 rounded duration-300 font-semibold hover:bg-[rgba(0,237,130,0.7)] hover:text-white flex items-center'><MdOutlineConnectedTv className='mr-2 text-xl' />TV Shows</NavLink>
                <NavLink to="/people" className='p-5 text-slate-500 rounded duration-300 font-semibold hover:bg-[rgba(0,237,130,0.7)] hover:text-white flex items-center'><BsFillCameraReelsFill className='mr-2 text-xl' />Crew</NavLink>
            </nav>

            <hr className='m-2' />
            {/* Contact Nav */}
            <nav className='mt-5'>
                <h1 className='text-xl font-light text-white mb-5'>About Netify</h1>
                <NavLink className='p-5 text-slate-500 rounded duration-300 font-semibold hover:bg-[rgba(0,237,130,0.7)] hover:text-white flex items-center'><i className="ri-information-fill mr-2 text-xl"></i>About</NavLink>
                <NavLink className='p-5 text-slate-500 rounded duration-300 font-semibold hover:bg-[rgba(0,237,130,0.7)] hover:text-white flex items-center'><i className="ri-phone-fill mr-2 text-xl"></i>Contact Us</NavLink>
            </nav>
        </div>
    )
}

export default Sidenav
