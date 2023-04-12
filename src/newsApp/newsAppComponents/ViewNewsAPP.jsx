import React, { useContext } from 'react'
import NewsAppContext from '../NewsAppContext/NewsAppContext'
import { GetNews } from '../NewsAppContext/NewsAppAction'

const ViewNewsAPP = ({news}) => {
  // console.log(news)

  const {newsss ,dispatch} = useContext(NewsAppContext)
  // console.log(newsss)

  // console.log(GetNews.articles[0].title)
  return (
    <div className="card container col-sm-12 col-ms-6 col-xl-8 mt-3">
    <div className="card-header h2">
    {news.title}
    </div>
    <div className="card-body">
        <span className='part'>  
        <img src={news.urlToImage} alt="IMG" width="60%" height="300px" />
        <h4 className="card-title descri-part">{news.description}</h4>
          </span>
        <h5 className="card-title">{news.content}</h5>
        <div className="container my-3">
           </div>
        <a className="btn btn-secondry border border-dark" target='_blank' href={news.url}>Read More ...</a>
    </div>
</div>
  )
}

export default ViewNewsAPP
