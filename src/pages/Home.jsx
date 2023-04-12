import React from 'react'
import { Link } from 'react-router-dom'
import HomeButton from '../commonComponents/HomeButton'
import { AiOutlineHome } from "react-icons/ai";

const Home = () => {
  return (
    <div className="home">
        <h1 className='p-5 text-center text-dark'><u>Welcome React Project World</u></h1>
        <HomeButton/>
                <div className="flex-end text-center">
                <Link to="/" className='btn btn-light rounded-5'><AiOutlineHome/> Home</Link>
                    &nbsp;
                    <Link to="/about" className='btn btn-light rounded-5'>About</Link>
                    &nbsp;
                    <Link to="/qoute" className='btn btn-light rounded-5'>Qoute</Link>
                    &nbsp;
                    <Link to="/newsApp" className='btn btn-light rounded-5'>News APP</Link>
                    &nbsp;
                    <Link to="/qr" className='btn btn-light rounded-5'>URL TO QR</Link>
                    &nbsp;
                    <Link to="/contact" className='btn btn-light rounded-5'>Contact us</Link> 
    </div>
    </div>

  )
}

export default Home
