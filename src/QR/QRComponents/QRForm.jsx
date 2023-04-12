import React, { useContext } from 'react'
import QRContext from '../QRContext/QRContext'
import { getQR } from '../QRContext/QRAction'

const QRForm = () => {
  const { QRS } = useContext(QRContext)

  const hanleQR = async (e) => {
    e.preventDefault()
    var data = await getQR()
    // console.log(data)
    dispatch({
      type: "GET_QR",
      payload: data
    })
  }
  return (
    <>

      <form className='container m-5 p-5'>
        <div className="form-group">
          <label>{QRS}</label>
          <input type="text" className="form-control mt-3" placeholder="Enter URL" required/>
          <input type='submit' value="Convert" className='btn btn-primary mt-3 text-center w-100' onClick={(e) => hanleQR(e)} />
        </div>
      </form>
      <img src={QRS} alt="" />
    </>
  )
}

export default QRForm
