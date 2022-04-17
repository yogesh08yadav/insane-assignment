import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AI from './Components/AI'
import Cars from './Components/Cars'
import Earth from './Components/Earth'
import Header from './Components/Header'
import Home from './Components/Home'

const App = () => {
  return (
      <>
      <Router>
      <Header />
       <div style={{backgroundColor:'#082032'}}>
         <Routes>
             <Route exact path='/' element={<Home/>} />
             <Route exact path='/car' element={<Cars/>}/>  
             <Route exact path='/AI' element={<AI/>}/>
             <Route exact path='/earth' element={<Earth/>}/> 
         </Routes>
          </div>
      </Router>
     
   
       
    
    
</>
  )
}

export default App