import React from  'react';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'

import Contactpage from '../../components/Contactpage'
import FooterSection from '../../components/Footer'


const ContactPage = () => {
    return(
       <div>
           <Navbar/>
           <Breadcumb bdtitle={'Contact Us'} bdsub={'Contact'}/>
           <Contactpage/>
           <FooterSection/>
       </div>
    )
}

export default ContactPage;