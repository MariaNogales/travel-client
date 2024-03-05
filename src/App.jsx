import AppRoutes from './Routes/AppRoutes'
import React from 'react'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

function App() {


  return (
    <div className="App">
      <NavBar/>
      <AppRoutes/>
    </div>
  )
}

export default App
