import React, { useEffect, useState } from 'react'
import axios from '../../../Utils/axios'
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [wallpaper, setWallpaper] = useState(null);
    const getWallpaper = async () => {
        try {
            const { data } = await axios.get("/trending/all/day");
            const randomWallpaper = data.results[Math.floor(Math.random() * data.results.length)];
            setWallpaper(randomWallpaper);
        }
        catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getWallpaper();
        console.log(wallpaper);
    }, []);
    return wallpaper ?
        <div
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${wallpaper.backdrop_path || wallpaper.profile_path})`,
                backgroundSize: 'cover',
                backgroundPosition: 'upper',
                backgroundRepeat: 'no-repeat'
            }}
            className='w-[90%] h-[50vh] mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg items-start p-5 flex flex-col justify-end shadow-lg'
        >
            <h1 className='text-3xl text-white font-black mb-1'>{wallpaper.title || wallpaper.original_title || wallpaper.original_name || wallpaper.name}</h1>
            <NavLink to={`/${wallpaper.media_type}/details/${wallpaper.id}`} className='text-zinc-300 font-semibold text-sm mb-1'>{wallpaper.overview.slice(0, 150)}....<span className='text-blue-400 underline cursor-pointer hover:text-blue-600'>more</span></NavLink>
            <div className='flex gap-10 mb-1'>
                <p className='text-zinc-300 text-sm font-medium'><i className="mr-1 text-yellow-400 ri-megaphone-fill"></i>{wallpaper.release_date || "No Info"}</p>
                <p className='text-zinc-300 text-sm font-medium'><i className="mr-1 text-yellow-400 ri-record-circle-fill"></i>{wallpaper.media_type.toUpperCase() || "No Info"}</p>
            </div>
            <button className='px-4 py-2 bg-[#00ed82] text-white font-semibold rounded-lg'>Trailer</button>
        </div>
        : <h1>Loading</h1>
}

export default Header
