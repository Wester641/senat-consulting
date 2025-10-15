import React from  'react';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'

import Features from '../../components/features'
import PracticeArea from '../../components/PracticeArea'
import PricingSection from '../../components/Pricing'
import Testimonial from '../../components/testimonial'
import FooterSection from '../../components/Footer'


const PracticePage = () => {
    return(
       <div className="practicepage">
           <Navbar/>
           <Breadcumb bdtitle={'Practice Area'} bdsub={'Practice Area'}/>
           <Features/>
           <PracticeArea/>
           <PricingSection/>
           <Testimonial/>
           <FooterSection/>
       </div>
    )
}

export default PracticePage;