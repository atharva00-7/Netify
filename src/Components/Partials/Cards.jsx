import React from 'react'
import { NavLink } from 'react-router-dom'

const Cards = ({ trending,title }) => {
    console.log(title);
    return (

        <div className='flex flex-wrap bg-[#1a1d29] justify-center mt-10 gap-9'>
            {trending.map((item, index) => (<div key={index} className='w-64 h-80 mb-20'>
                <NavLink to={`/${item.media_type || title}/details/${item.id}`} className='relative'>
                    <img className='w-full h-full object-cover rounded-lg shadow-2xl' src={`https://image.tmdb.org/t/p/original${item.backdrop_path || item.poster_path || item.profile_path}`} alt="" />
                    <h1 className='text-xl text-zinc-300 hover:text-white font-semibold mt-2'>{item.name || item.title || item.original_name || item.original_title}</h1>
                    {item.vote_average && <div className='absolute -left-2 -top-5 bg-yellow-600 p-2 rounded-full flex flex-col items-center'>
                        <p className='text-white text-xs font-bold'>Review</p>
                        <p className='text-white text-xl font-semibold'>{(item.vote_average * 10).toFixed()}%</p>
                    </div>}
                </NavLink>
            </div>))}
        </div>
    )
}

export default Cards
