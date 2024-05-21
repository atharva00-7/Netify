import React, { useState, useEffect } from 'react';
import Topnav from '../Components/Partials/Topnav';
import { useNavigate } from 'react-router-dom';
import axios from '../../Utils/axios';
import Cards from './Partials/Cards';
import InfiniteScroll from 'react-infinite-scroll-component';

const People = () => {
    document.title = "Netify | People";
    const [trending, setTrending] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const navigate = useNavigate();
    const getPeople = async () => {
        try {
            const { data } = await axios.get(`/person/popular?page=${page}`);
            if (data.results.length > 0) {
                setTrending((prev) => [...prev, ...data.results]);
                setPage(page + 1);
            }
            else {
                setHasMore(false);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    const refereshHandler = () => {
        if (trending.length === 0) {
            getPeople();
        }
        else {
            setPage(1);
            setTrending([]);
            getPeople();
        }
    }
    useEffect(() => {
        refereshHandler();
    }, []);
    return trending.length > 0 ? (
        <div className='w-full h-full'>
            <div className='mt-5'>
                <h1 className='text-3xl font-bold text-white ml-5'><i onClick={() => navigate(-1)} className="text-2xl mr-2 duration-150 cursor-pointer hover:text-[#00ed82] ri-arrow-left-line"></i>People</h1>

                <div className='w-full flex justify-start'>
                    <div className='w-[60%]'>
                        <Topnav />
                    </div>
                </div>
            </div>
            <InfiniteScroll
                dataLength={trending.length}
                next={getPeople}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
            >
                <Cards trending={trending} title="person"/>
            </InfiniteScroll>
        </div>
    ) : <h1>Loading</h1>
}

export default People
