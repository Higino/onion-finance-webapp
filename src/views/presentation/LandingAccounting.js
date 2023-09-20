import React from "react";
import { useLocation } from "react-router-dom";

// sections
import AdditionalServices from "components/Sections/Presentation/Heroes/Hero2.js";
import Hero3 from "components/Sections/Presentation/Heroes/Hero3.js";

// components
import HeaderVideoTitle from "components/Headers/Presentation/HeaderVideoTitle.js";
import FooterSmall from "components/Footers/Landing/FooterSmall.js";
// texts for sections as props
import AdditionalServicesData from "./_texts/hero2additionalservices.js";
import hero3 from "./_texts/perkspreregisterTextProps.js";

// texts for components as props
import headervideotitle from "./_texts/headeraccountingvideotitle.js";
import footersmall from "_texts/presentation/footers/footersmall.js";

export default function LandingAccounting() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      {/* <NavbarLinks {...navbarlinkslanding2} /> */}
      <HeaderVideoTitle {...headervideotitle} />
      <div className="container mx-auto px-4">
        {/* <Hero4 {...hero4} /> */}
        <AdditionalServices {...AdditionalServicesData} />
        <Hero3 {...hero3} />
        {/* <Hero5 {...hero5} />
        <Blogs1 {...blogs1} />
        <Pricing1 {...pricing1} /> */}
      </div>
      {/* <PreFooterLarge {...prefooterlarge} /> */}
      <FooterSmall {...footersmall} />
    </>
  );
}
