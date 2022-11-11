import React from 'react'
import ReactDOM from 'react-dom'
import Input from '../input/input'
import ButtonClose from '../buttonClose/buttonClose'

const RegisterUser = ({close}) => {
  return ReactDOM.createPortal(
    <div className='divContainer'>
      <div className='divContainer-form'>
        <form className='form-box' >
          <label>Name</label>
          <Input type='text' name='Name' placeholder='Name' />
          <label>Country</label>
          <Input type='text' name='Country' placeholder='Country' />
          <label>City</label>
          <Input type='text' name='City' placeholder='City' />
          <button className='divContainer__button'>View</button>
        </form>
        <ButtonClose close={close} />
      </div>
    </div>,
    document.getElementById('RegisterUser')
  )
}

export default RegisterUser