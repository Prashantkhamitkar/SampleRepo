import React from 'react'
import './CSS/Product.css'
export  const Product = () => {
  return (
    <div className='ProductContainer'>
        <div className='row text-center'>
            <div className='col-12'>
            <p className='TextParagraph'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
            </div>
        </div>
        <div className='row text-center'>
            <div className='col-12'>
                <img src={'/asserts/3.png'} className='ProductImage'/>
            </div>
        </div>
        <div className='row text-center'>
            <div className='col-12'>
                <p className='ProductText'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
            </div>
        </div>

               <center> <div className='borderstyle'/></center>
            </div>
        
    
  )
}
