import React from 'react'
import detail from "./detail.css"

function Detail({detmovie}) {
    let img = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
        {
            detmovie.map(item => (
                <div className='detail-container'>
                    <div className='detail-img'>
                        <img src={img+item.poster_path} />
                    </div>
                    <div className='detail-info'>
                        <h1>{item.title}</h1>
                        <p className='detail-info-oveview'>{item.overview}</p>
                        <h4>Popularity {item.popularity}</h4>
                    </div>
                </div>
            ))
        }
    </div>

    // <div className='detail-container'>
    // <img src='' />
    
    // </div>
  )
}

export default Detail