import React, { useContext, useEffect } from 'react'
import ViewNewsAPP from './ViewNewsAPP'
import NewsAppContext from '../NewsAppContext/NewsAppContext'
import { GetNews } from '../NewsAppContext/NewsAppAction'


const NewContainer = () => {
const {newsss ,dispatch} = useContext(NewsAppContext)

const handleNews= async()=>{
    const data = await GetNews("Bhopal")
    dispatch({
      type : "GET_NEWS",
      payload : data
    })
  }

useEffect(()=>{
    handleNews()
},[])

// console.log(newsss)
    if(!newsss || newsss.length ===0){
        return
        ( 
        <h1>no data</h1>
         )
    }
  return (
    <div>
{
      newsss.map((news,index) => <ViewNewsAPP key={index} news={news}/>)
}
    </div>
  )
}

export default NewContainer
