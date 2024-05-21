import Dropdown from './Dropdown';
import axios from '../../../Utils/axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const HorizontalCards = () => {

    const [trendingCard, setTrendingCard] = useState();
    const [filter,setFilter] = useState("all");
    const getTrendingCard = async () => {
        try {
            const { data } = await axios.get(`/trending/${filter}/day`);
            setTrendingCard(data.results);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getTrendingCard();
    }, [filter]);
    return trendingCard ? (
        <div className='w-full mt-3 p-5'>
            <div className='flex justify-between items-center mb-5'>
                <h1 className='text-2xl font-bold text-white'>
                    Trending
                </h1>
                <Dropdown title="Filter" options={["tv","movie","all"]} func={(e)=>{setFilter(e.target.value)}}/> 
            </div>

            <div className='w-[100%] flex gap-4 overflow-x-auto'>
                {trendingCard.map((item, index) => {
                    return (
                        <NavLink to={`/${item.media_type}/details/${item.id}`} key={index} className='min-w-[15%] mb-5 bg-zinc-900 rounded-lg overflow-hidden'>
                            <img className='w-full h-[40%] object-cover' src={`https://image.tmdb.org/t/p/original${item.backdrop_path || item.poster_path}`} alt="" />
                            <div className='mt-2 p-2'>
                                <h1 className='text-zinc-300 text-xl font-semibold'>{item.name || item.title || item.original_name || item.original_title}</h1>
                                <p className='text-zinc-300 text-sm'>{item.overview.slice(0, 50)}...<span className='text-blue-400 underline cursor-pointer hover:text-blue-600'>more</span></p>
                            </div>
                        </NavLink>

                    )
                })}
            </div>
        </div>
    ) : <h1>Loading</h1>
}

export default HorizontalCards
