import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <Navbar/>
    <div id='error'>
      <img src="https://www.freeiconspng.com/uploads/error-icon-15.png" alt="error-icon" width="100" height="100"/>
      <h1>Error 404: Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to={'/'}><button class="button-63">Go Back Home</button></Link>
    </div>
    </>
  )
}

export default Error