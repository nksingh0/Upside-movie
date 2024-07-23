import React from 'react'
import { Link } from 'react-router-dom'
import x from '../assests/profile_image.png'
const Login = () => {
  return (
    <nav>
     <h1 id='logo'>Upside Movies</h1>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
        <li><Link to={'/login'}>Login</Link></li>
        <li><Link to={'/register'}>Register</Link></li>
        <li><img src={x} alt='profile' id='profileimg'/></li>
      </ul>
    </nav>
  )
}

export default Login