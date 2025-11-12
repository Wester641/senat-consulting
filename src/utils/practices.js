import img23 from "../images/practice/4.jpg";
import img1 from "../images/studies/1.jpg";
import img2 from "../images/studies/2.jpg";
import img3 from "../images/studies/3.jpg";
import img4 from "../images/studies/4.jpg";
import img6 from "../images/studies/6.jpg";

export const practices = (t) => [
  {
    id: 1,
    title: t("practiceDetails.courtsAndDisputes.title"),
    mainImage: img1,
    details1: t("practiceDetails.courtsAndDisputes.details1"),
    details2: t("practiceDetails.courtsAndDisputes.details2"),
    bdtitle: t("practiceDetails.courtsAndDisputes.breadcrumbTitle"),
    bdsub: t("practiceDetails.courtsAndDisputes.breadcrumbSub"),
    bottomImage: img23,
    h1: t("practiceDetails.courtsAndDisputes.h1"),
    h5: t("practiceDetails.courtsAndDisputes.h5"),
  },
  {
    id: 2,
    title: t("practiceDetails.businessRegistration.title"),
    mainImage: img6,
    details1: t("practiceDetails.businessRegistration.details1"),
    details2: t("practiceDetails.businessRegistration.details2"),
    bdtitle: t("practiceDetails.businessRegistration.breadcrumbTitle"),
    bdsub: t("practiceDetails.businessRegistration.breadcrumbSub"),
    h1: t("practiceDetails.businessRegistration.h1"),
    h5: t("practiceDetails.businessRegistration.h5"),
  },
  {
    id: 3,
    title: t("practiceDetails.contracts.title"),
    mainImage: img2,
    details1: t("practiceDetails.contracts.details1"),
    details2: t("practiceDetails.contracts.details2"),
    bdtitle: t("practiceDetails.contracts.breadcrumbTitle"),
    bdsub: t("practiceDetails.contracts.breadcrumbSub"),
    h1: t("practiceDetails.contracts.h1"),
    h5: t("practiceDetails.contracts.h5"),
  },
  {
    id: 4,
    title: t("practiceDetails.businessSupport.title"),
    mainImage: img3,
    details1: t("practiceDetails.businessSupport.details1"),
    details2: t("practiceDetails.businessSupport.details2"),
    bdtitle: t("practiceDetails.businessSupport.breadcrumbTitle"),
    bdsub: t("practiceDetails.businessSupport.breadcrumbSub"),
    h1: t("practiceDetails.businessSupport.h1"),
    h5: t("practiceDetails.businessSupport.h5"),
  },
  {
    id: 5,
    title: t("practiceDetails.projectsAndFestivals.title"),
    mainImage: img4,
    details1: t("practiceDetails.projectsAndFestivals.details1"),
    details2: t("practiceDetails.projectsAndFestivals.details2"),
    bdtitle: t("practiceDetails.projectsAndFestivals.breadcrumbTitle"),
    bdsub: t("practiceDetails.projectsAndFestivals.breadcrumbSub"),
    h1: t("practiceDetails.projectsAndFestivals.h1"),
    h5: t("practiceDetails.projectsAndFestivals.h5"),
  },
];
