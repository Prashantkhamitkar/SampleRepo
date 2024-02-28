import React from 'react'
import Award from './Award'
import MainContent from './MainContent'
import './CSS/Home.css'
const Home = () => {
  return (
    <>
    <div className="HomeContainer text-center">
 
  <div className="row">
    <div className="col-sm-12 col-md-4"><Award/></div>
    <div className="col-sm-12 col-md-8"><MainContent/></div>
  </div>
</div>
    </>
  )
}

export default Home