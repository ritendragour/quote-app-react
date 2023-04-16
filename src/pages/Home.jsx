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
      {/* <HomeButton /> */}
      <div className="flex-end text-center">
        {/* &nbsp;&nbsp; */}
        {/* <Link to="/about" className='btn btn-light rounded-5 border border-secondary'>About</Link> */}
        {/* &nbsp;&nbsp; */}
        <a href="https://todo-reactjs-nu.vercel.app/" className='btn btn-light rounded-5 border border-secondary' target="_blank">Todo APP</a> &nbsp;&nbsp;
        <a href="https://expense-manager-six.vercel.app/" className='btn btn-light rounded-5 border border-secondary' target="_blank">Expense Manager</a>
      </div>


      
      {/* added collapse */}


      <p className='container mt-5'>
        <button class="btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#News_App" aria-expanded="false" aria-controls="collapseExample">
          News APP
        </button>
      </p>
      <div class="container collapse show container " id="News_App">
        <div class="card card-body container">
          <p class="closedBtn text-danger" type="button" data-bs-toggle="collapse" data-bs-target="#News_App" aria-expanded="false" aria-controls="collapseExample">
            <p className='btn btn-danger btnmargin'> Closed </p>
          </p>
          <p className='p-2 m-0'>
            A news app using React JS is a web application that allows users to browse and read news articles from various sources. The app is built using the React JS library, which provides a fast and efficient way to build user interfaces.
          </p>
        </div>
      </div>

      <p className='container mt-2'>
        <button class="btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#Quote_APP" aria-expanded="false" aria-controls="collapseExample">
        Quote APP
        </button>
      </p>
      <div class="container collapse show container " id="Quote_APP">
        <div class="card card-body container">
          <p class="closedBtn text-danger" type="button" data-bs-toggle="collapse" data-bs-target="#Quote_APP" aria-expanded="false" aria-controls="collapseExample">
            <p className='btn btn-danger btnmargin'> Closed </p>
          </p>
          <p className='p-2 m-0'>
          A quote app using React JS is a web application that displays a collection of quotes and allows users to interact with them. The app is built using the React JS library, which provides a fast and efficient way to build user interfaces.
          </p>
        </div>
      </div>


      <p className='container mt-2'>
        <button class="btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#QR_CODE" aria-expanded="false" aria-controls="collapseExample">
        QR Code
        </button>
      </p>
      <div class="container collapse show container " id="QR_CODE">
        <div class="card card-body container">
          <p class="closedBtn text-danger" type="button" data-bs-toggle="collapse" data-bs-target="#QR_CODE" aria-expanded="false" aria-controls="collapseExample">
            <p className='btn btn-danger btnmargin'> Closed </p>
          </p>
          <p className='p-2 m-0'>
          A URL to QR app using React JS is a web application that allows users to convert a URL into a QR code. The app is built using the React JS library, which provides a fast and efficient way to build user interfaces.
          </p>
        </div>
      </div>


      <p className='container mt-2'>
        <button class="btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#Todo" aria-expanded="false" aria-controls="collapseExample">
        TODO App
        </button>
      </p>
      <div class="container collapse show container " id="Todo">
        <div class="card card-body container">
          <p class="closedBtn text-danger" type="button" data-bs-toggle="collapse" data-bs-target="#Todo" aria-expanded="false" aria-controls="collapseExample">
            <p className='btn btn-danger btnmargin'> Closed </p>
          </p>
          <p className='p-2 m-0'>
          A Todo app is a common project for learning and practicing ReactJS, and using Context is a great way to manage global state in a React application. Here are the basic steps to create a Todo app using ReactJS Context:
          </p>
        </div>
      </div>

      <p className='container mt-2'>
        <button class="btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#Expense_Manager" aria-expanded="false" aria-controls="collapseExample">
        Expense Manager
        </button>
      </p>
      <div class="container collapse show container pb-2" id="Expense_Manager">
        <div class="card card-body container">
          <p class="closedBtn text-danger" type="button" data-bs-toggle="collapse" data-bs-target="#Expense_Manager" aria-expanded="false" aria-controls="collapseExample">
            <p className='btn btn-danger btnmargin'> Closed </p>
          </p>
          <p className='p-2 m-0'>
          An expense manager is a web application that helps users track their expenses and manage their budget. ReactJS is a popular JavaScript library for building user interfaces, and it can be used to create a component-based expense manager application.

          </p>
        </div>
      </div>



    </div>
  )
}

export default Home
