import React from 'react'
import { Link } from 'react-router-dom'
import '../Stylesheet/Header.css'

const Header = () => {
  return (
    <div className='header' >
        <div   className='heading'>
        <Link style={{textDecoration:'none'}} to='/'> <h1 style={{color:'white'}}>Image Gallary</h1></Link>
        </div>
        <div className='navigate' >
            <ul style={{display: 'flex',justifyContent: 'space-around',listStyleType: 'none',marginTop: "13px"}}>
               <Link style={{textDecoration:'none',color:'whitesmoke'}}  to='/car'><li>Cars</li>  </Link>
               <Link style={{textDecoration:'none',color:'whitesmoke'}}  to='/AI'><li>AI</li>  </Link> 
               <Link style={{textDecoration:'none',color:'whitesmoke'}}  to='/earth'><li>Earth</li>  </Link>
            </ul>
        </div>
    </div>
  )
}

export default Header