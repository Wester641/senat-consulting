import React from  'react';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'

import FaqSection from '../../components/Fagpage'
import FooterSection from '../../components/Footer'


const FAQPage = () => {
    return(
       <div>
           <Navbar/>
           <Breadcumb bdtitle={'FAQ'} bdsub={'FAQ'}/>
           <FaqSection/>
           <FooterSection/>
       </div>
    )
}

export default FAQPage;