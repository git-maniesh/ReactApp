import React from 'react'
import './Style/App.scss'
import Home from './Components/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Services from './Components/Services'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';



import "./Style/App.scss"
import "./Style/Header.scss"
import "./Style/Footer.scss"
import "./Style/Contact.scss"
// import "./Style/Services.scss"
import "./Style/Home.scss"
import "./Style/mediaquery.scss"



const App = () => {
  return (
    <>
    <Router>
    <Header />
      <Routes>


        <Route path='/' element = {<Home/> } />
        <Route path = '/contact' element = {<Contact/>} />
        <Route path = '/services' element = {<Services/>} />
      </Routes>




    <Footer/>
    {/* <div>App</div> */}
    </Router>
    </>
    
  )
}

export default App