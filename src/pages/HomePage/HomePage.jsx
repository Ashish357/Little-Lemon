import React from 'react'
import Header from '../../components/Header/Header'
import CallToAction from '../../components/CallToAction/CallToAction'
import Specials from '../../components/Specials/Specials'
import CustomersSay from '../../components/CustomersSay/CustomersSay'
import Chicago from '../../components/Chicago/Chicago'
import Footer from '../../components/Footer/Footer'

const HomePage = () => {
  return (
    <div>
      <Header/>
      <CallToAction/>
      <Specials/>
      <CustomersSay/>
      <Chicago/>
      <Footer/>
    </div>
  )
}

export default HomePage