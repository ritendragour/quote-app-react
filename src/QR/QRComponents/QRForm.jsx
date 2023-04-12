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
    <>
      <form className=' qr pt-5' onSubmit={(e)=>hanleQR(e)}>
        <div className="form-group col-xl-5 col-sm-12 col-md-10">
          <label>ENTER URL</label>
          <input type="text" value={text} className="form-control mt-2 w-100" placeholder="Enter URL" onChange={(e)=>setText(e.target.value)} required/>
          <input type='submit' value="Convert" className='btn btn-primary mt-3 text-center w-100'/>
        </div>
       <img src={QRS === "NO_QR"?"https://source.unsplash.com/random/150x150?demo":QRS} alt="" className='text-center mt-3 imggs' />
      {QRS === "NO_QR"? <h3 className='mt-3 urlDownImg'>It's Demo QR</h3>:<h3 className='text-danger mt-1 urlDownImg'>{QRS.replace('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=', 'YOUR URL : ').toUpperCase()}</h3>}
      </form>
    </>
  )
}

export default QRForm
