import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate, useParams, Outlet } from 'react-router-dom';
import { asyncLoadTv, removeTvDetails } from '../store/actions/TvAction';
import Trailer from './Trailer';

const TvDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector(state => state.tv);
  useEffect(() => {
    dispatch(asyncLoadTv(id));
    return () => {
      dispatch(removeTvDetails());
    }
  }, [id]);
  console.log(info);
  return info ? (
    <div style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path || info.details.profile_path})`,
      backgroundSize: 'cover',
      backgroundPosition: 'upper',
      backgroundRepeat: 'no-repeat'
    }} className='relative w-full h-[140vh] px-32'>
      <div className='my-5 flex justify-between items-center overflow-auto'>
        <i onClick={() => navigate(-1)} className="text-3xl text-white duration-150 cursor-pointer hover:text-[#00ed82] ri-arrow-left-line"></i>
        <div className='flex gap-5'>
          <a href={`https://www.imdb.com/title/${info.externalIds.imdb_id}/`} target='_blank' className='inline-block bg-yellow-500 py-3 px-1 font-extrabold rounded-lg'>IMDb</a>
          <a href={info.details.homepage} target='_blank'><img className='w-12 h-12 object-cover rounded-lg' src={`https://image.tmdb.org/t/p/original${info.details.poster_path}`} alt="" /></a>
          <a href={`https://www.wikidata.org/wiki/${info.externalIds.wikidata_id}`} target='_blank'><img className='w-14 h-12 object-cover rounded-lg' src="https://www.marefa.org/w/images/thumb/6/66/Wikidata-logo-en.svg/1200px-Wikidata-logo-en.svg.png" alt="" /></a>
        </div>
      </div>

      <div className='flex'>
        <img className='w-72 h-96 object-cover rounded-lg shadow-2xl' src={`https://image.tmdb.org/t/p/original${info.details.poster_path}`} alt="" />
        <div className='ml-10'>
          <h1 className='text-5xl font-black text-white'>{info.details.name || info.details.title || info.details.original_name || info.details.original_title}</h1>
          <div className='my-3 flex items-center gap-10'>
            <h1 className='text-white flex items-center text-xl font-semibold'>Genres: {info.details.genres.map((item, key) => item.name).join(',')}</h1>
            <h1 className='text-white flex items-center text-xl font-semibold'>Review
              <div className='bg-yellow-600 w-12 h-12 ml-1 rounded-full flex justify-center items-center'>
                <p className='text-white text-lg font-semibold'>{(info.details.vote_average * 10).toFixed()}%</p>
              </div>
            </h1>
          </div>
          <p className='text-white w-[80%] font-semibold'>{info.details.overview}</p>
          <div className='flex justify-start gap-16'>
            {info.watchProviders && info.watchProviders.buy && <div className='flex items-center gap-8 my-2'>
              <h1 className='text-white text-xl font-bold'>Buy</h1>
              {info.watchProviders.buy.map((item, index) => (
                <img key={index} className='w-12 h-12 object-cover rounded-lg' src={`https://image.tmdb.org/t/p/original${item.logo_path}`}></img>
              ))}
            </div>}
            {info.watchProviders && info.watchProviders.rent && <div className='flex items-center gap-10 my-7'>
              <h1 className='text-white text-xl font-bold'>Rent</h1>
              {info.watchProviders.rent.map((item, index) => (
                <img key={index} className='w-12 h-12 object-cover rounded-lg' src={`https://image.tmdb.org/t/p/original${item.logo_path}`}></img>
              ))}
            </div>}
          </div>
          <NavLink to={`${pathname}/trailer`} className='inline-block mt-2 px-5 py-3 bg-[#00ed82] hover:bg-[#5dc194] text-white font-semibold rounded-lg'>
            <i className="ri-play-fill"></i>Play Trailer
          </NavLink>
        </div>
      </div>

      <hr className='mt-10 mb-5 border-none bg-zinc-200 h-[1.5px]' />

      <div>
        <div className='mb-3'>
          <h1 className='text-3xl text-white font-bold'>Recommended</h1>
          <p className='text-zinc-400 font-semibold'>Based on your search</p>
        </div>
        {info.recommendations.length > 0 ? <div className='w-full flex gap-4 overflow-x-auto'>
          {info.recommendations.map((item, index) => {
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
        </div> : <div className='w-full flex gap-4 overflow-x-auto'>
          {info.similar.map((item, index) => {
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
        </div>}
      </div>
      <Outlet>
        <Trailer />
      </Outlet>
    </div>
  ) : <></>
}

export default TvDetails
