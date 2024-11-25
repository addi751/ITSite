import React from 'react'
import Hero from '../components/Hero'
import Servicessection from '../components/Services'
import ImageAndText from '../components/ImagesAndText'
import Statistic from '../components/Stats'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        
        <Hero />
        <Servicessection />
        <ImageAndText />
        <Statistic />
        <Testimonial />
        <Footer />
    </div>
  )
}

export default Home