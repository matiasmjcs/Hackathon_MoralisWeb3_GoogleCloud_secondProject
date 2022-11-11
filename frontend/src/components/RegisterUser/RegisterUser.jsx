import React, { useState, useContext } from "react";
import ReactDOM from 'react-dom'
import Input from '../input/input'
import ButtonClose from '../buttonClose/buttonClose'
import Abi from '../../utils/vehicleRegister.json'
import { UserContext } from '../../context/userProvider';
import Swal from 'sweetalert2'
import { ethers } from "ethers";
import Loading2 from "../loading2/loading2";

const RegisterUser = ({close}) => {

  const { active } = useContext(UserContext)

  const [loading, setLoading] = useState(false)


  const abi = Abi.abi;

  // direccion del contrato
  const address = "0x04930fd07eb0b6d5834754DFd2e25EBb77dc168A";



  const initialState = {
    Name: '',
    Country: '',
    City: ''
  }

  const [input, setInput] = useState(initialState)

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const registerUser = async () => {
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

        const tx = await contract.registerUser(
          input.Name,
          input.Country,
          input.City
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

    if (!input.Name.trim()) {
      e.target.Name.focus()
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Do not leave the Name field empty',
      })
    }
    if (!input.Country.trim()) {
      e.target.Country.focus()
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Do not leave the Country field empty',
      })
    }
    if (!input.City.trim()) {
      e.target.City.focus()
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'do not leave the date City empty',
      })
    }


    registerUser()

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
        <form onSubmit={validacionRed} className='form-box' onChange={handleChange} >
          {loading ? <Loading2/> :
          <>
          <label>Name</label>
          <Input type='text' name='Name' placeholder='Name' />
          <label>Country</label>
          <Input type='text' name='Country' placeholder='Country' />
          <label>City</label>
          <Input type='text' name='City' placeholder='City' />
          <button className='divContainer__button'>Register</button>
          </>
}
        </form>
        <ButtonClose close={close} />
      </div>
    </div>,
    document.getElementById('RegisterUser')
  )
}

export default RegisterUser