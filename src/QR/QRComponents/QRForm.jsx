import React, { useContext, useState } from 'react'
import QRContext from '../QRContext/QRContext'
import { getQR } from '../QRContext/QRAction'

const QRForm = () => {
  const { QRS , dispatch } = useContext(QRContext)

  const[text,setText] = useState("")

  const hanleQR = async (e) => {
    e.preventDefault()
    console.log(text)
    var data = await getQR(text)
    dispatch({
      type: "GET_QR",
      payload: data
    })
    setText("")
  }
  return (
    <>
      <form className='container qr m-5 p-5' onSubmit={(e)=>hanleQR(e)}>
        <div className="form-group inQR">
          <label>ENTER URL</label>
          <input type="text" className="form-control mt-3 w-100" placeholder="Enter URL" onChange={(e)=>setText(e.target.value)} required/>
          <input type='submit' value="Convert" className='btn btn-primary mt-3 text-center w-100'/>
        </div>
      <img src={QRS} alt="" width="25%" className='text-center' />
      </form>
    </>
  )
}

export default QRForm
