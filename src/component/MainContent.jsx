import React from 'react'
import './CSS/MainContent.css'
const MainContent = () => {
  return (
    <div className='MainContainer text-start'>
<div className='LogoContainer'>
    <img src={'/asserts/logo.png'} className='LogoImage'/>
</div>
<div className='TextContainer'>
    <h5 className='TextHeading'>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h5> 
    <ul className='
    ListContent'>
        <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
        <li>
        C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. 
        </li>
    </ul>
    </div>
    <div className='MainImageContainer'>
        <img src={'/asserts/2.png'} className='MainImage'/>
    </div>
<div>
<p>Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
</div>
    </div>
  )
}

export default MainContent
