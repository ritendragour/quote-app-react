import React, { useContext, useEffect, useState } from 'react'
import QuoteContext from '../qouteContext/QuoteContext'
import { getQuote } from '../qouteContext/QuoteAction'
import Reload from '../../commonComponents/Reload'
import { FaGreaterThan } from "react-icons/fa";

const Card = () => {

    const { quote, dispatch } = useContext(QuoteContext)

    const handleCLick = async () => {
        const data = await getQuote()
        dispatch({
            type: "CHANGE",
            payload: data
        })

        // useEffect(() => {
        // handleCLick()
        // })
        if (!quote) {
            return (<Reload />)
        }
    }

    return (
        <div className="card container col-xl-12 col-sm-12 col-md-8 mt-2 mb-2">
            <div className="card-header h2">
                Quote
            </div>
            <div className="card-body quote-main">
                <span>
                    <p className="card-text h5">{quote.content}</p>
                    <img src={"https://source.unsplash.com/random/900%C3%97700/?" + quote.tags[0]} alt="IMG" width="100%" height="300px" className='ShowHide' />
                    <h5 className="card-title">{quote.author}</h5>
                    <div className="container my-1">
                        <p className="badge bg-secondary">{quote.tags[0]}</p>
                        <p className="badge bg-secondary">{quote.tags[1]}</p>
                        <p className="badge bg-secondary">{quote.tags[2]}</p>
                    </div>
                    <button className="btn btn-primary" onClick={handleCLick}>NEXT <FaGreaterThan /><FaGreaterThan /><FaGreaterThan /></button>
                </span>
                <img src={"https://source.unsplash.com/random/900%C3%97700/?" + quote.tags[0]} alt="IMG" width="100%" height="100%" className='HideShow' />
            </div>
        </div>
    )
}

export default Card
