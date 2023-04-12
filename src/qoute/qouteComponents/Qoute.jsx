import React from 'react'
import Card from './Card'
import { QuoteProvider } from '../qouteContext/QuoteContext'

const Qoute = () => {
    return (
        <QuoteProvider>
            <div className="qoute">
                <Card />
            </div>
        </QuoteProvider>
    )
}

export default Qoute
