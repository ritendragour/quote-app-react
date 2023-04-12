import React, { useContext } from 'react'
import { QRProvider } from '../QRContext/QRContext'
import QRForm from './QRForm'

const QR = () => {

  return (
    <QRProvider>
      <QRForm/>
    </QRProvider>
  )
}

export default QR
