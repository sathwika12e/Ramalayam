import { useState } from 'react'
import hanumanimage from './assets/hanumanimages.webp'
import ramheaderimage from './assets/ram headerimage.jpg'
import './App.css'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Mainpage from './Components/Mainpage'
import Footer from './Components/Footer'

import { BrowserRouter } from 'react-router-dom'
function App() {
 
  return (
    <>
    <div className="App">
      <BrowserRouter>
     <Header/>
     <Sidebar/>
<Mainpage/>
<Footer/>
</BrowserRouter>
     </div>
      
    </>
  )
}

export default App
