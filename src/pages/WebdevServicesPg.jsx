import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero3'
import OurProcess from '../components/OurProcess'
import ServiceDescriptionSection from '../components/Description'
import TestimonialSlider from '../components/Testimonial2'
import FAQs from '../components/FAQs'


const WebdevServices = () => {
  return (
    <div>
        
        <Hero/>
        <ServiceDescriptionSection />
        <OurProcess/>
        <TestimonialSlider />
        <FAQs/>      
        <Footer />
    </div>
  )
}

export default WebdevServices