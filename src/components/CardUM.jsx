import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

const CardUM = () => {
    let [api,setA]=useState([])
    let [a,setApi]=useState([])
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${api.id}/videos?api_key=4ee318c98f52ee4cdd38a7cba158dbae&language=en-US`).then(r=>r.json()).then(d=>setApi(d.results))}
    )
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=4ee318c98f52ee4cdd38a7cba158dbae&language=en-US&page=1').then(r=>r.json()).then(d=>setA(d.results))} 
    )
  return (
    <>

      <br/>
      <div id='card1'>
      <h1 style={{color:'white'}}>Upcomming Movies</h1>
            {api.map((val,index)=>{
                return (
                    <Card key={index} style={{ width:'20rem',}}>
    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${val.backdrop_path}`} id='img-card' /><br/>
      <Card.Body>
        <Card.Title style={{color:'white'}}>{val.original_title}</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
                )
            })}
        </div>
    </>
  )
}

export default CardUM