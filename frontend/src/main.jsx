import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './routes/welcome/Welcome'
import UserProvider from './context/userProvider'
import UserPanel from './routes/userPanel/userPanel'
import History from './routes/history/History'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Welcome />} />
            <Route path='/userPanel' element={<UserPanel />}/>
            <Route path='transactions' element={<History/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
)
