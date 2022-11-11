import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './RegisterVehicle.css'
import Input from '../input/input'
import ButtonClose from '../buttonClose/buttonClose'

const RegisterVehicle = ({close}) => {
  const initialState = {
    patent: '',
    brand: '',
    date: '',
    year: 0
  }

  const [input, setInput] = useState(initialState)

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  return ReactDOM.createPortal(
    <div className='divContainer'>
      <div className='divContainer-form'>
        <form className='form-box' onChange={handleChange}>
          <label>Patent</label>
          <Input type='text' name='patent' placeholder='Patent' />
          <label>Brand</label>
          <Input type='text' name='brand' placeholder='brand'/>
          <label>Date</label>
          <Input type='date' name='date'/>
          <label>Year</label>
          <Input type='number' name='year'/>
          <button className='divContainer__button'>register</button>
        </form>
        <ButtonClose close={close}/>
      </div>
    </div>,
    document.getElementById('registerVehicle')
  )
}

export default RegisterVehicle