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
            return (<Reload/>)
        }
    }

    return (
        <div className="card container pt-5 w-50 mt-2 mb-2">
            <div className="card-header h2">
                Quote
            </div>
            <div className="card-body">
                <p className="card-text h5">{quote.content}</p>
                <img src={"https://source.unsplash.com/random/900%C3%97700/?"+quote.tags[0]} alt="IMG" width="100%" height="300px"/>
                <h5 className="card-title">{quote.author}</h5>
                <div className="container my-3">
                    <span className="badge bg-secondary">{quote.tags[0]}</span>
                    <span className="badge bg-secondary">{quote.tags[1]}</span>
                    <span className="badge bg-secondary">{quote.tags[2]}</span>
                </div>
                <button className="btn btn-primary" onClick={handleCLick}>NEXT <FaGreaterThan/><FaGreaterThan/><FaGreaterThan/></button>
            </div>
        </div>
    )
}

export default Card
