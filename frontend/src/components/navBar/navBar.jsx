import React, { useContext } from 'react'
import Button from '../button1/button'
import './navBar.css'
import Card from '../card/card'
import { UserContext } from '../../context/userProvider'
import { Star } from '@web3uikit/icons';
import { NavLink } from 'react-router-dom'
import BoxMetamask from '../boxMetamask/boxMetamask'

const NavBar = () => {

  const { 
    currentAccount,
    active, 
    view, 
    Disconnet, 
    openCard,
    closeCard, 
    card,
    boxMetamask,
    openBoxMetamask,
    red, 
    Switch,
    redState,
    conectado
   } = useContext(UserContext)

  return (
    <>
      <nav className='nav'>
        <NavLink to='/'>
          <Star className='metamask home' fontSize="30px" color='#7B3FE4' />
        </NavLink>
        {(red === false && conectado) && <button className='plgn' onClick={Switch}>{redState }</button>}
        <Button 
          onclick={active ? openCard : openBoxMetamask} 
          clase='nav__button' 
          text={active ? view : 'connect wallet'} 
        />
      </nav>

      {(card && active) && <Card active={active} close={closeCard} accounts={currentAccount} Disconnet={Disconnet} />}
      {boxMetamask && <BoxMetamask/>}
    </>
  )
}

export default NavBar