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
import UpcomingEvent from "../../components/UpcomingEvents";
import Rewards from "../../components/Rewards";
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
      <SimpleSlider onClick={handleScrollToTop} />
      <Features />
      <AboutSection />
      <Rewards />
      <PracticeArea />
      <Porfolio props={t} />
      <Testimonial />
      <ContactSection ref={targetRef} />
      <FooterSection />
      <PhoneButton />
      <UpcomingEvent />
    </div>
  );
};

export default HomePage;
