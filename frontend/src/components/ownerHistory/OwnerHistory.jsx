import React from 'react'
import ReactDOM from 'react-dom'
import Input from '../input/input'
import ButtonClose from '../buttonClose/buttonClose'

const OwnerHistory = ({close}) => {
  return ReactDOM.createPortal(
    <div className='divContainer'>
      <div className='divContainer-form'>
        <form className='form-box' >
          <label>Patent</label>
          <Input type='text' name='Patent' placeholder='Patent' />
          <button className='divContainer__button'>View</button>
        </form>
        <ButtonClose close={close} />
      </div>
    </div>,
    document.getElementById('viewOwnerHistory')
  )
}

export default OwnerHistory