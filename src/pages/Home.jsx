import React from 'react'
import { Link } from 'react-router-dom'
import HomeButton from '../commonComponents/HomeButton'
import { AiOutlineHome } from "react-icons/ai";
// import Welcome from "../assets/Welcome.mp3"
const Home = () => {
  
// function play(){
//   new Audio (Welcome).play()
// }

  return (
    <div className="home">
      <h1 className='p-5 text-center text-dark'><u>Welcome To React Project World</u></h1>
      <HomeButton />
      <div className="flex-end text-center">
        <Link to="/" className='btn btn-light rounded-5 border border-secondary'><AiOutlineHome /> Home</Link>
        &nbsp;&nbsp;
        <Link to="/about" className='btn btn-light rounded-5 border border-secondary'>About</Link>
        &nbsp;&nbsp;
        <a href="https://todo-reactjs-nu.vercel.app/" className='btn btn-light rounded-5 border border-secondary' target="_blank">Todo APP</a> &nbsp;&nbsp;
        <a href="https://expense-manager-six.vercel.app/" className='btn btn-light rounded-5 border border-secondary' target="_blank">Expense Manager</a>
      </div>
    </div>
  )
}

export default Home
