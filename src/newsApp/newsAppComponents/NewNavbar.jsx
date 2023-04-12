import React, { useContext, useState } from 'react'
import NewsAppContext from '../NewsAppContext/NewsAppContext'
import { GetNews } from '../NewsAppContext/NewsAppAction';
import { FaUser } from "react-icons/fa";

const NewNavbar = () => {
  const {dispatch } = useContext(NewsAppContext)

  const[text, setText] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await GetNews(text)
    console.log(data)
    dispatch({
      type: "GET_NEWS",
      payload: data
    })
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary w-100 py-2 mar">
      <h1>News 100+</h1>
      <marquee behavior="5s" direction="" className="w-50">BREAKING NEWS | 
कर्नाटक चुनाव: जगदीश शेट्टार को कल जेपी नड्डा ने दिल्ली बुलाया, पहली लिस्ट में नहीं है नाम</marquee>
          <form className="d-flex float-end w-20" role="search" onSubmit={(e) => handleSubmit(e)}>
            <input className="form-control me-2 p-2" type="search" placeholder="Search" onChange={(e)=>setText(e.target.value)} required/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
      <span className='w-30'>
      <iframe src="https://free.timeanddate.com/clock/i8svmqrg/n1741" width="128" height="19"></iframe>
     <br/> 
     <iframe src="https://free.timeanddate.com/clock/i8svmqrg/n1741/tt1/tw0"  width="129" height="19"></iframe>
      </span>
      <a className='btn btn-dark' href="https://ritendra.in/" target='_blank'><FaUser/>&nbsp;&nbsp;Profile</a>
      </nav>
  )
}

export default NewNavbar
