import React from  'react';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'
import PracticDetails from '../../components/practicedetails'
import FooterSection from '../../components/Footer'

import { practices } from '../../utils/practices';
import { useParams } from 'react-router-dom';

const PracticeDetails = () => {
     const { id } = useParams(); 
     const service = practices.find(p => p.id === Number(id));

    return(
       <div>
           <Navbar/>
           <Breadcumb bdtitle={service.bdtitle} bdsub={service.bdsub}/>
           <PracticDetails
             bottomImage={service.bottomImage}
             details1={service.details1}
             details2={service.details2}
             mainImage={service.mainImage}
             h1={service.h1}
             h5={service.h5}
           />
           <FooterSection/>
       </div>
    )
}

export default PracticeDetails;