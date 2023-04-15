import React, { useContext } from 'react'
// import NewsAppContext from '../NewsAppContext/NewsAppContext'
// import { GetNews } from '../NewsAppContext/NewsAppAction'
import { MdOutlineCancel } from "react-icons/md";
const ViewNewsAPP = ({ news }) => {

  // const { newsss, dispatch } = useContext(NewsAppContext)

  return (
    <div div className='uiNews MobilePadding'>
      <div className="card col-sm-12 col-ms-6 col-xl-9 mt-3">

        <div className="card-header h2">
          {news.title}
        </div>
        <div className="card-body">
          <span className='part'>
            <img src={!news.image_url ? "https://source.unsplash.com/random/300×187/?news" : news.image_url} alt="IMG" width="60%" height="300px" />
            {/* urlToImage */}
            <h4 className="card-title descri-part wordLimitside7">{news.description ? news.description : <h1>No Description</h1>}</h4>
          </span>
          <h5 className="card-title wordLimit">{news.content}</h5>
          <div className="container my-3">
          </div>
          {/* url */}
          <a className="btn btn-secondry border border-dark" target='_blank' href={news.link}>Read More ...</a>
        </div>
      </div>

      
      <div className="col-xl-2  bg-light card mt-3 wordLimitside HideShow">
        <span className='w-100'>

        <i className='float-end'><MdOutlineCancel/></i>
        </span>
            <h3 className='text-center'> <u>Top News 100 +</u></h3>
        <img alt="IMG" width="100%" height="50%" src="https://images.pexels.com/photos/159652/table-food-book-newspaper-159652.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <span style={{ height: "50%" }}>
          <p   className='p-2'>
          J P Singh, joint secretary of the Pak-Afghan-Iran Division of the Indian Ministry of External Affairs, and Elisabeth Faure, a representative and the country ....
           </p>
          <a className="btn btn-secondry border border-dark float-end " target='_blank' href="https://www.khaama.com/india-to-supply-10000-tons-of-wheat-to-afghanistan/">Please Visit</a>
        </span>
      </div>
    </div>
  )
}

export default ViewNewsAPP
