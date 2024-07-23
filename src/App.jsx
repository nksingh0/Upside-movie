import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Movies from './pages/Movies';
import Contact from './pages/Contact';
import CardContent from './pages/CardContent';

const App = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path='/contact' element={<Contact/>}/>
                <Route path="*" element={<Error/>} />
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/movies' element={<Movies/>}/>
                <Route path='/loc' element={<CardContent/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App