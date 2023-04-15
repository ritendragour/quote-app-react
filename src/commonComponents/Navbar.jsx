import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 border border-secondary">
                <div className="container-fluid">
                    <Link className="navbar-brand  p-2" to="/">React World</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/" className='btn btn-light rounded-5 '> Home</Link>
                                {/* <AiOutlineHome /> */}
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className='btn btn-light rounded-5 '>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/quote" className='btn btn-light rounded-5 '>Quote App</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/newsApp" className='btn btn-light rounded-5 '>News App</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/qr" className='btn btn-light rounded-5 '>URL TO QR</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar
