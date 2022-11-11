import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/navBar/navBar'
import Footer from './components/footer/footer'

function App () {
  return (
    <div className='app'>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
