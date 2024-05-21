import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

const Trailer = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const parameter = pathname.includes("movie") ? "movie" : "tv";
  const vidLink = useSelector(state => state[parameter].info.videos);
  console.log(vidLink);
  return vidLink ? (
    <div className='absolute w-full h-full bg-[rgba(0,0,0,0.85)] top-0 left-0 '>
      <i onClick={() => navigate(-1)} className="text-3xl mx-16 mt-10 text-white duration-150 cursor-pointer hover:text-[#00ed82] ri-arrow-left-line"></i>
      <div className='w-full h-full flex justify-center mt-10'>
        <ReactPlayer controls width='1400px' height='640px' url={`https://www.youtube.com/watch?v=${vidLink.key}`} />
      </div>
    </div>
  ) : <div className='absolute w-full h-full bg-[rgba(0,0,0,0.85)] top-0 left-0 '>
    <i onClick={() => navigate(-1)} className="text-3xl mx-16 mt-10 text-white duration-150 cursor-pointer hover:text-[#00ed82] ri-arrow-left-line"></i>
    <div className='w-full h-full flex justify-center items-center'>
      <h1 className='text-white font-extrabold text-4xl'>Not Found</h1>
    </div>
  </div>
}

export default Trailer
