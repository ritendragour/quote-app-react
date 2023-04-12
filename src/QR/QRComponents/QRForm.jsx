import React, { useContext } from 'react'
import QRContext from '../QRContext/QRContext'
import { getQR } from '../QRContext/QRAction'

const QRForm = () => {
  const { QRS , dispatch } = useContext(QRContext)

  const hanleQR = async (e) => {
    e.preventDefault()
    var data = await getQR()
    console.log(data)
    dispatch({
      type: "GET_QR",
      payload: data
    })
  }
  return (
    <>

      <form className='container qr m-5 p-5'>
        <div className="form-group inQR">
          {/* <label>ENTER URL</label> */}
          <input type="text" className="form-control mt-3 w-100" placeholder="Enter URL" required/>
          <input type='submit' value="Convert" className='btn btn-primary mt-3 text-center w-100' onClick={(e) => hanleQR(e)} />
        </div>
      <img src={QRS} alt="" width="25%" className='text-center' />
      </form>
    </>
  )
}

export default QRForm
