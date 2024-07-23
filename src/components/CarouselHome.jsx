import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const CarouselHome = () => {
    let [api,setA]=useState([])
    useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=4ee318c98f52ee4cdd38a7cba158dbae&language=en-US').then(r=>r.json()).then(d=>setA(d.results))} 
)
  return (
    <>
    <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={1600}>
                {api.map((val,index) =>{
        return (
              <div id='carousel-b' key={index}>
                <img src={`https://image.tmdb.org/t/p/original${val.backdrop_path}`} alt='nn'/>
                <p className="legend">{val.title}</p>
              </div>
      )
      })}
    </Carousel>
    </>
  )
}

export default CarouselHome