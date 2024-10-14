import React from 'react'
import Header from './Header'
import Service from './Service'
import ServicePage from './ServicePage'
import Stats from './Stats'
import Footer from './Footer'
import IndustryRole from './IndustryRole'

const Body = () => {
  
  return (
    <div>
      <Header/>
      <Service/>
     <IndustryRole/>
      <ServicePage/>
      <Stats/>
      <Footer/>
    </div>
  )
}

export default Body
