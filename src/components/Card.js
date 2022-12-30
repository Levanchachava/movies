import React from 'react'
import movi from './movi.jpg'
import cardcss from './card.css'
import Detail from './Detail';

function Card({item, handleitem}) {
    const {title, release_date, poster_path} = item
    let img = "https://image.tmdb.org/t/p/w500";

 
  return (
    <div className='card-container'>     
        <img src={img+poster_path} />
            <div className='title'>
                <h4>{title}</h4>
                <p>{release_date}</p>
            </div>
            <button className='card-button' onClick={()=>handleitem(item)}>More info</button> 
    </div>
  )
}

export default Card