import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Movies from './../pages/Movies';
const SearchHome = () => {
    let [api,setA]=useState([])
    let [s,setS]=useState([])
    let navigate= useNavigate()
    let sea=()=>{
        fetch(`https://api.themoviedb.org/3/search/movie?query=${s}&api_key=4ee318c98f52ee4cdd38a7cba158dbae`)
       .then(r=>r.json()).then(d=>setA(d.results))
    }
  return (
    <>
        <div id='search-container'>
        <h1 style={{color:'white', fontSize:50,}}>Explore the Movies accros the World.....</h1>
        <br/>
        <br/> 
      <input type="text" placeholder="Search Movies" id='search' value={s}
              onChange={(e)=>setS(e.target.value)}/>
      <button className='button-63' onClick={sea}>Search</button>
    </div>
    <br/>
    <br/>
    <div id='card'>
            {api.map((val,index)=>{
                return (
                    <Card key={index} style={{ width:'20rem',}}>
    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${val.backdrop_path}`} id='img-card' />
      <Card.Body>
        <Card.Title>{val.title}</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary" onClick={()=>{navigate('/loc',{state: val})}} className='button-63'>View More</Button>
      </Card.Body>
    </Card>
                )
            })}
        </div>  
    
    </>
  )
}

export default SearchHome