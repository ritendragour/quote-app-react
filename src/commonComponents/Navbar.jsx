import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";


const Navbar = () => {

    return (
        <nav className="navbar bg-light px-5 border border-secondary">
            <div className="container-fluid">
                <Link className="navbar-brand  p-2" to="/">React World</Link>
                <div className="flex-end">
                    <Link to="/" className='btn btn-light rounded-5 border border-secondary'><AiOutlineHome/> Home</Link>
                    &nbsp;
                    <Link to="/about" className='btn btn-light rounded-5 border border-secondary'>About</Link>
                    &nbsp;
                    <Link to="/qoute" className='btn btn-light rounded-5 border border-secondary'>Qoute APP</Link>
                    &nbsp;
                    <Link to="/newsApp" className='btn btn-light rounded-5 border border-secondary'>News APP</Link>
                    &nbsp;
                    <Link to="/qr" className='btn btn-light rounded-5 border border-secondary'>URL TO QR</Link>
                    &nbsp;
                    {/* <Link to="/contact" className='btn btn-light rounded-5 border border-secondary'>Contact us</Link>                     */}
                    {/* <a className='btn btn-light' href="https://ritendra.in/" target='_blank'><FaUser/></a> */}
               
                </div>
            </div>
        </nav>
    )
}

export default Navbar
