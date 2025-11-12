import React from "react";
import ContactForm2 from "../CommentForm2";
import address from "../../images/about/address.jpg";
import "./style.css";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

const Contactpage = forwardRef((props, ref) => {
    const { t } = useTranslation();
    
    return (
        <div className="contact-page-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12">
                        <div className="contact-page-item">
                            <h2>{t("ContactPage.contactsTitle")}</h2>
                            <p>
                                {t("ContactPage.contactsDescription")}
                            </p>
                            <div className="adress">
                                <h3>{t("ContactPage.addressLabel")}</h3>
                                <span>{t("ContactPage.address")}</span>
                            </div>
                            <div className="phone">
                                <h3>{t("ContactPage.phoneLabel")}</h3>
                                <span>{t("ContactPage.phone1")}</span>
                                <span>{t("ContactPage.phone2")}</span>
                            </div>
                            <div className="email">
                                <h3>{t("ContactPage.emailLabel")}</h3>
                                <span>{t("ContactPage.email")}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div
                            ref={ref}
                            className="contact-area contact-area-2 contact-area-3"
                        >
                            <h2>{t("ContactPage.formTitle")}</h2>
                            <ContactForm2 />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="contact-map">
                            <div className="map-links">
                                <a
                                    href="http://2gis.kg/bishkek/firm/70000001101156993/center/74.61802482604982,42.879077532561865/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="map-link-btn"
                                >
                                    {t("ContactPage.viewOnMap")}
                                </a>

                                <a
                                    href="http://2gis.kg/bishkek/center/74.61802,42.878519/zoom/16/routeTab/rsType/bus/to/74.61802,42.878519╎Intellect IT & Business College?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="map-link-btn route-btn"
                                >
                                    {t("ContactPage.findRoute")}
                                </a>
                            </div>

                            <h3>{t("ContactPage.mapAddress")}</h3>
                            <a
                                href="https://2gis.kg/bishkek/geo/70030076493877457/74.618063%2C42.878776?m=74.618691%2C42.878209%2F18.24"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={address} width="100%" height="500px" alt={t("ContactPage.addressAlt")} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Contactpage;
