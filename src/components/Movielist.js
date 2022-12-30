import React, {useState, useEffect} from 'react'
import Card from "./Card"
import movielist from './movielists.css'
import Detail from './Detail'

function Movielist(props) {





    
  return (
    <div>
        <div className='cards'>
        {
              props.movie.map((item)=>(
                <Card item={item} handleitem={props.handleitem} key={item.id}  />
              ))
        }
        </div>
        <div className='cont'></div>
    </div>
  )
}

export default Movielist