import React, { useState, useEffect } from 'react';
import Topnav from '../Components/Partials/Topnav';
import Dropdown from '../Components/Partials/Dropdown';
import { useNavigate } from 'react-router-dom';
import axios from '../../Utils/axios';
import Cards from './Partials/Cards';
import InfiniteScroll from 'react-infinite-scroll-component';

const Trending = () => {
  document.title = "Netify | Trending";
  const [trending, setTrending] = useState([]);
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();
  const getTrendingCard = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
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
      getTrendingCard();
    }
    else {
      setPage(1);
      setTrending([]);
      getTrendingCard();
    }
  }
  useEffect(() => {
    refereshHandler();
  }, [category, duration]);
  return trending.length > 0 ? (
    <div className='w-full h-full'>
      <div className='mt-5'>
        <h1 className='text-3xl font-bold text-white ml-5'><i onClick={() => navigate(-1)} className="text-2xl mr-2 duration-150 cursor-pointer hover:text-[#00ed82] ri-arrow-left-line"></i>Trending</h1>

        <div className='w-full flex justify-start'>
          <div className='w-[60%]'>
            <Topnav />
          </div>
          <Dropdown title="Filter" options={[ "all","tv", "movie"]} func={(e) => setCategory(e.target.value)} />
          <div className='w-[2%]'></div>
          <Dropdown title="Filter" options={["day", "week"]} func={(e) => setDuration(e.target.value)} />
        </div>
      </div>
      <InfiniteScroll
        dataLength={trending.length}
        next={getTrendingCard}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <Cards trending={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : <h1>Loading</h1>
}

export default Trending
