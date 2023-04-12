import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";

const Navbar = () => {

    return (
        <nav className="navbar bg-light px-5 border border-secondary">
            <div className="container-fluid">
                <Link className="navbar-brand  p-2" to="/">React World</Link>
                <div className="flex-end">
                    <Link to="/" className='btn btn-light rounded-5 border border-secondary'><AiOutlineHome/> Home</Link>
                    &nbsp;
                    <Link to="/about" className='btn btn-light rounded-5 border border-secondary'>About us</Link>
                    &nbsp;
                    <Link to="/qoute" className='btn btn-light rounded-5 border border-secondary'>Qoute APP</Link>
                    &nbsp;
                    <Link to="/newsApp" className='btn btn-light rounded-5 border border-secondary'>News APP</Link>
                    &nbsp;
                    <Link to="/qr" className='btn btn-light rounded-5 border border-secondary'>URL TO QR</Link>
                    &nbsp;
                    <Link to="/contact" className='btn btn-light rounded-5 border border-secondary'>Contact us</Link>                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar
