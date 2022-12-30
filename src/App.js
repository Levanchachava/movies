import logo from './logo.svg';
import React, {useState, useEffect} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Movielist from './components/Movielist';
import Detail from './components/Detail';

function App() {
  const[trufalse, setClick] = useState(true)

  const[movie, setMovie] = useState([])
  const[detmovie, setDetmovie] = useState([])
  const[search, setSearch] = useState('')
  

  useEffect(()=> {
    fetch('https://api.themoviedb.org/3/discover/movie?primary_release_year=2010&sort_by=vote_average.desc&api_key=991cd4d3e825f16b966a1b9529e7b422')
        .then(response => response.json())
        .then(response => setMovie(response.results))
        .catch(err => console.error(err));
  }, [])

  const api_search = "https://api.themoviedb.org/3/search/movie?api_key=991cd4d3e825f16b966a1b9529e7b422&query="

  const searchmovie = (e) =>{
    e.preventDefault();
    fetch(api_search+search)
      .then(res=>res.json())
      .then(data=>setMovie(data.results))

    setSearch('')
  }

  function handleitem(item) {
			setDetmovie([ item]);
      setClick(false)
  }


 
  return (
    <div className="App">
      <Navbar setClick={setClick} searchmovie={searchmovie} setMovie={setMovie}  search={search} setSearch={setSearch} />
      {trufalse ? <Movielist  handleitem={handleitem} movie={movie} setMovie={setMovie} setClick={setClick} trufalse={trufalse} /> : <Detail setDetmovie={setDetmovie} detmovie={detmovie} />}

    </div>
  );
}

export default App;
