import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from '../../../Utils/axios';
import noimage from '../../assets/noimage.jpg';

const Topnav = () => {
    const [query, setQuery] = useState('');
    const [searches, setSearches] = useState([]);

    const getContent = async () => {
        try {
            const { data } = await axios.get(`/search/multi?query=${query}`);
            setSearches(data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getContent();
    }, [query]);

    return (
        <div className='h-[10vh] z-10 relative flex justify-start items-center ml-28'>
            <i className="text-2xl text-zinc-300 ri-search-line"></i>
            <input
                onChange={(event) => setQuery(event.target.value)}
                value={query}
                className='w-[50%] border-b-2 border-zinc-500 hover:border-zinc-100 outline-none mx-10 bg-transparent text-lg text-slate-200 font-semibold'
                type="text"
                placeholder='Search movies, tv shows and peoples'
            />
            {query.length > 0 && <i onClick={() => setQuery('')} class="text-2xl cursor-pointer text-zinc-300 ri-close-fill"></i>}

            <div className='w-[50%] max-h-[50vh] absolute top-3/4 left-16 bg-[rgba(7,25,82,0.5)] overflow-auto rounded shadow-xl'>
                {searches.map((item, index) => <NavLink to={`/${item.media_type}/details/${item.id}`} key={index} className='p-8 flex justify-start items-center border-b-2 border-zinc-300 hover:bg-[rgba(7,25,82,1)]'>
                    <img className='w-[12vh] h-[10vh] object-cover rounded mr-5' src={item.backdrop_path || item.profile_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path}`: noimage} alt="image" />
                    <span className='text-slate-300'>{item.name || item.original_title || item.original_name || item.title}</span>
                </NavLink>)}
            </div>
        </div>
    )
}

export default Topnav
