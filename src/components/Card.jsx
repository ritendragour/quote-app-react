import React, { useContext } from 'react'
import QuoteContext from '../context/QuoteContext'
import { getQuote } from '../context/QuoteAction'

const Card = () => {

    const {quote,dispatch} = useContext(QuoteContext)

    const handleCLick = async()=>{
        const data = await getQuote()
        console.log(data)
        dispatch({
            type : "CHANGE",
            payload : data
        })
    if(!quote){
    return(
        <h1>No Data</h1>
    )
}


    }

    return (
        <div className="card">
            <div className="card-header h2">
                Quote 
            </div>
            <div className="card-body">
                <p className="card-text">{quote.content}</p>
                <h5 className="card-title">{quote.author}</h5>
               <div className="container my-3">
               <span className="badge bg-secondary">{quote.tags[0]}</span>
                <span className="badge bg-secondary">{quote.tags[1]}</span>
                <span className="badge bg-secondary">{quote.tags[2]}</span>
               </div>
                <button className="btn btn-primary" onClick={handleCLick}>More ...</button>
            </div>
        </div>
    )
}

export default Card
