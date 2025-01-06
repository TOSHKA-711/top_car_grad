import React from 'react'
import "./Home.css"
import Hero from './homeComponents/hero/Hero'
import About from './homeComponents/about/About'
import Offers from './homeComponents/offers/Offers'
import Latest from './homeComponents/latest/Latest'
import Testimonials from './homeComponents/testimonials/Testimonials'
import Contact from './homeComponents/contact/Contact'
import Faq from './homeComponents/faqs/Faq'

export default function Home() {
  return (
    <div className='home'>
      <Hero/>
      <About/>
      <Offers/>
      <Latest/>
      <Testimonials/>
      <Contact/>
      <Faq/>
    </div>
  )
}
