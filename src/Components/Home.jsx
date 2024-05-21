import React from 'react'
import Sidenav from './Partials/Sidenav';
import Topnav from './Partials/Topnav';
import Header from './Partials/Header';
import HorizontalCards from './Partials/HorizontalCards';

const Home = () => {
  document.title = "Netify | Homepage";
  return (
    <>
        <Sidenav />
        <div className='w-[80%] h-full overflow-auto'>
            <Topnav />
            <Header />
            <HorizontalCards />
        </div>
    </>
  )
}

export default Home
