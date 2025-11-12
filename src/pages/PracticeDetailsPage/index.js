import React from "react";
import { useTranslation } from "react-i18next";

// components
import Navbar from "../../components/Navbar";
import Breadcumb from "../../components/breadcumb";

import FooterSection from "../../components/Footer";
import { useEffect } from "react";

import { practices } from "../../utils/practices";
import { useParams } from "react-router-dom";
import PracticDetails from "../../components/practicedetails";

const PracticeDetailsPage = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const practicesData = practices(t);
  const service = practicesData.find((p) => p.id === Number(id));

  if (!service) {
    return <div>Услуга не найдена</div>;
  }

  return (
    <div>
      <Navbar />
      <Breadcumb bdtitle={service.bdtitle} bdsub={service.bdsub} />
      <PracticDetails
        bottomImage={service.bottomImage}
        details1={service.details1}
        details2={service.details2}
        mainImage={service.mainImage}
        h1={service.h1}
        h5={service.h5}
      />
      <FooterSection />
    </div>
  );
};

export default PracticeDetailsPage;
