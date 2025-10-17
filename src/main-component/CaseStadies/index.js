import React from 'react';

// components
import Navbar from '../../components/Navbar'
import Breadcumb from '../../components/breadcumb'

// import Porfolio from '../../components/case'
import FooterSection from '../../components/Footer'
import Testimonial2 from '../../components/testimonial/index2';



const CaseStadies = () => {
    return (
        <div>
            <Navbar />
            <Breadcumb bdtitle={'Наши дела'} bdsub={'Отзыва'} />
            {/* <Porfolio/> */}
            <Testimonial2 />
            <FooterSection />
        </div>
    )
}

export default CaseStadies;