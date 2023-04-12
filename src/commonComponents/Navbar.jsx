import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className="navbar bg-primary px-5">
            <div className="container-fluid">
                <Link className="navbar-brand border border-secondary p-2" to="/">React World</Link>
                <div className="flex-end">
                    <Link to="/about" className='btn btn-light rounded-5'>About us</Link>
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
        </nav>
    )
}

export default Navbar
