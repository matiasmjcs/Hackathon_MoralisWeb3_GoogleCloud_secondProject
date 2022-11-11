import React from 'react'
import ReactDOM from 'react-dom'
import Input from '../input/input'
import ButtonClose from '../buttonClose/buttonClose'

const Congratulate = ({close}) => {
  return ReactDOM.createPortal(
    <div className='divContainer'>
      <div className='divContainer-form'>
        <form className='form-box' >
          <label>Address</label>
          <Input type='text' name='Address' placeholder='Address' />
          <button className='divContainer__button'>Congratulate</button>
        </form>
        <ButtonClose close={close} />
      </div>
    </div>,
    document.getElementById('Congratulate')
  )
}

export default Congratulate