import React from "react";
import { useTranslation } from 'react-i18next';

// components
import Navbar from "../../components/Navbar";
import Breadcumb from "../../components/breadcumb";

import FooterSection from "../../components/Footer";
import { useEffect } from "react";
import PersonalDetailComponent from "../../components/PersonalDetailPage";

const PersonalDetailPage = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <Breadcumb
        bdtitle={t("pages.PersonalDetailPageTitle")}
        bdsub={t("pages.PersonalDetailPageTitle")}
      />
      <PersonalDetailComponent />
      <FooterSection />
    </div>
  );
};

export default PersonalDetailPage;
