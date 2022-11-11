import React from 'react'
import ReactDOM from 'react-dom'
import Input from '../input/input'
import ButtonClose from '../buttonClose/buttonClose'

const RegisterMaintenance = ({close}) => {
  return ReactDOM.createPortal(
    <div className='divContainer'>
      <div className='divContainer-form'>
        <form className='form-box' >
          <label>Patent</label>
          <Input type='text' name='Patent' placeholder='Patent' />
          <label>Date</label>
          <Input type='date' name='Date' placeholder='Date' />
          <label>Direction</label>
          <Input type='text' name='Direction' placeholder='Direction' />
          <label>Description</label>
          <Input type='text' name='Description' placeholder='Description' />
          <button className='divContainer__button'>Register</button>
        </form>
        <ButtonClose close={close} />
      </div>
    </div>,
    document.getElementById('RegisterMaintenance')
  )
}

export default RegisterMaintenance