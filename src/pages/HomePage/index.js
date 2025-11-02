import React from "react";

// components
import Navbar2 from "../../components/Navbar2";

import Features from "../../components/features";
import AboutSection from "../../components/about";
import PracticeArea from "../../components/PracticeArea";
import Porfolio from "../../components/case";
import Testimonial from "../../components/testimonial";
import ContactSection from "../../components/ContactSection";
import FooterSection from "../../components/Footer";
import PhoneButton from "../../components/PhoneForm";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import SimpleSlider from "../../components/hero";

const HomePage = () => {
  const { t } = useTranslation();
  const targetRef = useRef(null);

  const handleScrollToTop = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  };
  return (
    <div>
      <Navbar2 />
      <SimpleSlider onClick={handleScrollToTop}/>
      <Features />
      <AboutSection />
      <PracticeArea />
      <Porfolio props={t} />
      <Testimonial />
      <ContactSection ref={targetRef} />
      <FooterSection />
      <PhoneButton />
    </div>
  );
};

export default HomePage;
