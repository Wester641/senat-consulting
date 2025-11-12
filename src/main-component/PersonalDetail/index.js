import React from "react";

// components
import Navbar from "../../components/Navbar";
import Breadcumb from "../../components/breadcumb";

import FooterSection from "../../components/Footer";
import { useEffect } from "react";
import PersonalDetailPage from "../../components/PersonalDetailPage";

const PersonalDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <Breadcumb
        bdtitle={"О Руководителе Компании"}
        bdsub={"О Руководителе Компании"}
      />
      <PersonalDetailPage />
      <FooterSection />
    </div>
  );
};

export default PersonalDetail;
