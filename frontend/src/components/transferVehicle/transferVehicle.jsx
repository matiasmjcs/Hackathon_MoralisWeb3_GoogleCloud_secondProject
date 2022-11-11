import React from 'react'
import ReactDOM from 'react-dom'
import Input from '../input/input'
import ButtonClose from '../buttonClose/buttonClose'

const TransferVehicle = ({close}) => {
  return ReactDOM.createPortal(
    <div className='divContainer'>
      <div className='divContainer-form'>
        <form className='form-box' >
          <label>Address</label>
          <Input type='text' name='address' placeholder='Address' />
          <label>Patent</label>
          <Input type='text' name='Patent' placeholder='Patent' />
          <button className='divContainer__button'>Transfer</button>
        </form>
        <ButtonClose close={close} />
      </div>
    </div>,
    document.getElementById('transferVehicle')
  )
}

export default TransferVehicle