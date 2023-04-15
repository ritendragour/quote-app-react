import React, { useContext, useState } from 'react'
import QRContext from '../QRContext/QRContext'
import { getQR } from '../QRContext/QRAction'

const QRForm = () => {
  const { QRS , dispatch } = useContext(QRContext)

  const[text,setText] = useState("")

  const hanleQR = async (e) => {
    e.preventDefault()
    var data = await getQR(text)
    dispatch({
      type: "GET_QR",
      payload: data
    })
    setText("")
  }
  return (
    <div className='qouteNews'>
      <span>
       <img src={QRS === "NO_QR"?"https://source.unsplash.com/random/150x150?tech":QRS} alt="" className='text-center mt-3 imggs' />
      {QRS === "NO_QR"? <h3 className='mt-3 urlDownImg'>It's Default Image</h3>:<h3 className='text-danger mt-1 urlDownImg'>{QRS.replace('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=', 'YOUR URL : ').toUpperCase()}</h3>}
      </span>
      <form className=' qr pt-5' onSubmit={(e)=>hanleQR(e)}>
        <div className="form-group col-xl-8 col-sm-12 col-md-10">
          <label>ENTER URL</label>
          <input type="text" value={text} className="form-control mt-2 " placeholder="Enter URL" onChange={(e)=>setText(e.target.value)} required/>
          <input type='submit' value="Convert" className='btn btn-primary mt-3 text-center w-50'/>
          <div className="comtainer">
            <h4 className='mt-5'>
            The main features of a URL to QR App:
            </h4>
            <p className='mt-5'>
              <b>1. </b>
              Converting URLs to QR codes: The app allows users to enter a URL and generate a QR code that represents the URL.
            </p>
            <p>
              <b>2. </b>
              Scanning QR codes: Users can scan the generated QR code using their mobile device to open the URL in their mobile browser.
            </p>
            <p>
              <b>3. </b>
              Downloading QR codes: Users can download the generated QR code as an image for later use.            </p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default QRForm
