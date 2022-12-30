import React, {useState} from 'react'
import navbar from './navbar.css'

function Navbar({setMovie,setClick, search, setSearch,searchmovie}) {

  function startdata() {
    fetch('https://api.themoviedb.org/3/discover/movie?primary_release_year=2010&sort_by=vote_average.desc&api_key=991cd4d3e825f16b966a1b9529e7b422')
      .then(response => response.json())
      .then(response => setMovie(response.results))
      .catch(err => console.error(err));
  }
 
  

  return (
    <div className='navbar-container'>
        <ul className='navbar-list-container'>
            <li onClick={startdata}> <a href='#'>Main</a> </li>
            <li onClick={()=> setClick(true)} > <a href='#home'>Home</a></li>
        </ul>
        <form className='nav-form' onSubmit={searchmovie}>
          <input type="text" placeholder='Search Movie' className='navbar-input'
          onChange={(e)=> setSearch(e.target.value)} value={search}  />
        <button className='search-button'>Enter</button>
        </form>

    </div>
  )
}

export default Navbar