import React from 'react'
import './CSS/Footer.css'

const Footer = () => {
  return (
        
           <div className='ParentFooter'> <div className='FooterContainer'>
           <div className='TextDiv'>
          <img src={'/asserts/pngwingphone.png'} className='logoclass'/>
            Toll Free<strong>1800 200 1234</strong></div>
           <div className='TextDiv'>
           <img  src="https://img.icons8.com/ios/50/facebook-new.png" alt="facebook-new" className='logoclass'/>
            <b>www.facebook.com/cripumps</b></div>
           <div className='TextDiv'>
           <img className='logoclass' src="https://img.icons8.com/ios/50/globe--v1.png" alt="globe--v1"/>
            <b>www.crigroups.com</b></div>
       </div></div>
        
  )
}

export default Footer