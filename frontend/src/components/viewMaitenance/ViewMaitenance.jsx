import React from 'react'
import ReactDOM from 'react-dom'
import Input from '../input/input'
import ButtonClose from '../buttonClose/buttonClose'

const ViewMaitenance = ({close}) => {
  return ReactDOM.createPortal(
    <div className='divContainer'>
      <div className='divContainer-form'>
        <form className='form-box' >
          <label>ID</label>
          <Input type='text' name='ID' placeholder='ID' />
          <button className='divContainer__button'>View</button>
        </form>
        <ButtonClose close={close} />
      </div>
    </div>,
    document.getElementById('ViewMaitenance')
  )
}

export default ViewMaitenance