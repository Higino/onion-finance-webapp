import React from "react";
import { useLocation } from "react-router-dom";

// sections
import Hero3 from "components/Sections/Presentation/Heroes/Hero3.js";
import Hero1 from "components/Sections/Presentation/Heroes/Hero1.js";
import Testimonies from "components/Sections/Presentation/Heroes/Hero4.js";
// components
//import HeaderVideoTitle from "components/Headers/Presentation/HeaderVideoTitle.js";
import HeaderImageTitleCenter from "components/Headers/Presentation/HeaderImageTitleCenter.js";
import FooterSmall from "components/Footers/Landing/FooterSmall.js";
// texts for sections as props

import hero3 from "./_texts/hero3finance.js";
import hero1 from "./_texts/hero1Loans.js";
import testimoniesData from "./_texts/hero4finance.js";
// texts for components as props
import headervideotitle from "./_texts/headerfinancevideotitle.js";
import footersmall from "_texts/presentation/footers/footersmall.js";

export default function LandingSponsorship() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      {/* <NavbarLinks {...navbarlinkslanding2} /> */}
      {/* <HeaderVideoTitle {...headervideotitle} /> */}
      <HeaderImageTitleCenter {...headervideotitle} />
      <div className="container mx-auto px-4">
        <Testimonies {...testimoniesData} />
        <Hero1 {...hero1} />
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
