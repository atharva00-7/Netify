import React, { useEffect } from 'react'
import { removePersonDetails, asyncLoadPerson } from '../store/actions/PeopleAction'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, NavLink } from 'react-router-dom';
import noimage from '../../assets/noimage.jpg';

const PeopleDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { info } = useSelector(state => state.people);
  const { id } = useParams();
  useEffect(() => {
    dispatch(asyncLoadPerson(id));
    () => {
      dispatch(removePersonDetails());
    }
  }, [id]);
  console.log(info);
  return info ? (
    <div className='w-screen h-[170vh] bg-[#1a1d29] px-32'>
      <div className='my-5 w-full flex justify-between items-center overflow-auto'>
        <i onClick={() => navigate(-1)} className="text-3xl text-white duration-150 cursor-pointer hover:text-[#00ed82] ri-arrow-left-line"></i>
        <div className='flex gap-5'>
          <a href={`https://www.imdb.com/name/${info.details.imdb_id}`} target='_blank' className='inline-block bg-yellow-500 py-3 px-1 font-extrabold rounded-lg'>IMDb</a>
          <a href={`https://www.wikidata.org/wiki/${info.externalIds.wikidata_id}`} target='_blank'><img className='w-14 h-12 object-cover rounded-lg' src="https://www.marefa.org/w/images/thumb/6/66/Wikidata-logo-en.svg/1200px-Wikidata-logo-en.svg.png" alt="" /></a>
        </div>
      </div>

      <div className='flex'>
        <img className='w-72 h-96 object-cover rounded-lg shadow-2xl' src={`https://image.tmdb.org/t/p/original${info.details.profile_path}`} alt="" />
        <div className='ml-10'>
          <h1 className='text-5xl font-black text-white'>{info.details.name}</h1>
          <div className='my-4'>
            <p className='text-xl text-zinc-400 font-bold'>Birthday</p>
            <p className='text-zinc-400 text-sm font-semibold'>{info.details.birthday}</p>
          </div>
          <div className='my-4'>
            <p className='text-xl text-zinc-400 font-bold'>Known for</p>
            <p className='text-zinc-400 text-sm font-semibold'>{info.details.known_for_department}</p>
          </div>
          <div className='my-4'>
            <p className='text-xl text-zinc-400 font-bold'>Place of birth</p>
            <p className='text-zinc-400 text-sm font-semibold'>{info.details.place_of_birth}</p>
          </div>
          <div className='my-4'>
            <p className='text-xl text-zinc-400 font-bold'>Gender</p>
            <p className='text-zinc-400 text-sm font-semibold'>{info.details.gender === 1 ? "Female" : "Male"}</p>
          </div>
          <div className='my-4'>
            <p className='text-xl text-zinc-400 font-bold'>Social Media</p>
            <a target='_blank' href={`https://www.instagram.com/${info.externalIds.instagram_id}/`}><i className="text-white text-4xl mr-3 hover:text-pink-500 ri-instagram-fill"></i></a>
            <a target='_blank' href={`https://www.facebook.com/${info.externalIds.facebook_id}/`}><i className="text-white text-4xl mr-3 hover:text-blue-600 ri-facebook-circle-fill"></i></a>
            <a target='_blank' href={`https://twitter.com/${info.externalIds.twitter_id}/`}><i className="text-white text-4xl mr-3 hover:text-zinc-400 ri-twitter-x-fill"></i></a>
          </div>
        </div>
      </div>
      <div className='my-5'>
        <h1 className='text-white text-3xl font-extrabold mb-2'>Biography</h1>
        <p className='text-zinc-200 font-bold'>{info.details.biography}</p>
      </div>

      <div>
      <h1 className='text-white text-3xl font-extrabold mb-2'>Acted in</h1>
      <div className='w-[100%] flex gap-4 overflow-x-auto my-5'>
        {info.combinedCredits.cast.map((item, index) => {
          return (
            <NavLink to={`/${item.media_type}/details/${item.id}`} key={index} className='min-w-[15%]  rounded-lg overflow-hidden'>
              <img className='w-[30vh] h-[25vh] object-fit' src={item.backdrop_path || item.profile_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path}`: noimage} alt="" />
              <div className='mt-2'>
                <h1 className='text-zinc-300 text-xl font-semibold'>{item.name || item.title || item.original_name || item.original_title}</h1>
              </div>
            </NavLink>
          )
        })}
      </div>
      </div>
    </div>
  ) : <></>
}

export default PeopleDetails
