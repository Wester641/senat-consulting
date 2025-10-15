import React from  'react';

// components
import Navbar3 from '../../components/Navbar3'
import SimpleSlider3 from '../../components/hero3'

import Features from '../../components/features'
import AboutSection from '../../components/about'
import PracticeArea from '../../components/PracticeArea'
import Porfolio from '../../components/case'
import Testimonial from '../../components/testimonial'
import ContactSection from '../../components/ContactSection'
import TeamSection from '../../components/Team'
import CounterSection from '../../components/CounterSection'
import BlogSection from '../../components/BlogSection'
import FooterSection from '../../components/Footer'


const Homepage3 = () => {
    return(
       <div>
           <Navbar3/>
           <SimpleSlider3/>
           <Features/>
           <AboutSection/>
           <PracticeArea subclass={'practice-area-3'}/>
           <Porfolio/>
           <Testimonial/>
           <ContactSection/>
           <TeamSection/>
           <CounterSection/>
           <BlogSection/>
           <FooterSection/>
       </div>
    )
}

export default Homepage3;