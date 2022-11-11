import React, { useState, useContext } from "react";
import ReactDOM from 'react-dom'
import './RegisterVehicle.css'
import Input from '../input/input'
import ButtonClose from '../buttonClose/buttonClose'
import Abi from '../../utils/vehicleRegister.json'
import { UserContext } from '../../context/userProvider';
import Swal from 'sweetalert2'
import { ethers } from "ethers";
import Loading2 from "../loading2/loading2";

const RegisterVehicle = ({close}) => {

  const { active } = useContext(UserContext) 

  const [loading, setLoading] = useState(false)


  const abi = Abi.abi;

  // direccion del contrato
  const address = "0x04930fd07eb0b6d5834754DFd2e25EBb77dc168A";
  


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

  const registerVehicle = async () => {
    try {

      const { ethereum } = window;

      if (ethereum) {
        setLoading(true)
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          address,
          abi,
          signer
        );

        const tx = await contract.RegisterNewVehicle(
          input.patent,
          input.brand,
          input.date,
          input.year
        );

        await tx.wait();
        setLoading(false)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Hash Transactions: ${tx.hash}`,
          showConfirmButton: true
        })
        close()


      }
    } catch (error) {
      setLoading(false)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'an error has occurred',
      })
      setInput(initialState)
      console.log(error);
    }
  }

  const handleSubmit = (e) => {

    if (!input.patent.trim()) {
      e.target.patent.focus()
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Do not leave the patent field empty',
      })
    }
    if (!input.brand.trim()) {
      e.target.brand.focus()
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Do not leave the brand field empty',
      })
    }
    if (!input.date.trim()) {
      e.target.date.focus()
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'do not leave the date field empty',
      })
    }
    if (!input.year.trim()) {
      e.target.year.focus()
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'do not leave the year field empty',
      })
    }
    

    registerVehicle()

  }

  const validacion = (e) => {
    if (!active) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'you must be connected to a wallet',
      })
    } else {
      handleSubmit(e)
    }
  }

  const validacionRed = async (e) => {
    e.preventDefault()
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    const mumbaiChainId = '0x13881'
    if (chainId === mumbaiChainId) {
      validacion(e)
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: ' connect to the binance smart chain network',
      })
    }
  }


  return ReactDOM.createPortal(
    <div className='divContainer'>
      <div className='divContainer-form'>
        <form onSubmit={validacionRed} className='form-box' onChange={handleChange}>
          {loading ? <Loading2/> :
          <>
          <label>Patent</label>
          <Input type='text' name='patent' placeholder='Patent' />
          <label>Brand</label>
          <Input type='text' name='brand' placeholder='brand'/>
          <label>Date</label>
          <Input type='date' name='date'/>
          <label>Year</label>
          <Input type='number' name='year'/>
          <button type='submit' className='divContainer__button'>register</button>
          </>
}
        </form>
        <ButtonClose close={close}/>
      </div>
    </div>,
    document.getElementById('registerVehicle')
  )
}

export default RegisterVehicle