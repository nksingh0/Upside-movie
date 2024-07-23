import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom'
import YouTube from 'react-youtube';
const CardContent = () => {
  const opts = {
    height: '500',
    width: '1040',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  let loc=useLocation()
  let s=loc.state
  let[y,setY]=useState([])
    fetch(`http://api.themoviedb.org/3/movie/${s.id}/videos?api_key=4ee318c98f52ee4cdd38a7cba158dbae`)
    .then(res=>res.json())
    .then(data=>setY(data.results[0].key))

  return (
    <>
    <Navbar/>
    <div id='ydiv'>
      <p>{s.title}</p>
      {y && <YouTube videoId={y} opts={opts} />}
      <p><b>Language:</b> {s.original_language}</p>
      <p><b>Overview:</b></p>
      <p>{s.overview}</p>
      <p><b>Rating:</b> {s.vote_average}</p>
      <p><b>Release Date:</b> {s.release_date}</p>
      <p><b>Popularity:</b> {s.popularity}</p>
    </div>
    </>
  )
}

export default CardContent