import React from "react";
import { useLocation } from "react-router-dom";

// sections
import Hero2 from "components/Sections/Presentation/Heroes/Hero2.js";
import Hero3 from "components/Sections/Presentation/Heroes/Hero3.js";
import Hero4 from "components/Sections/Presentation/Heroes/Hero4.js";
// components
import HeaderVideoTitle from "components/Headers/Presentation/HeaderVideoTitle.js";
import FooterSmall from "components/Footers/Landing/FooterSmall.js";
// texts for sections as props
import hero2 from "_texts/presentation/heroes/hero2finance.js";
import hero3 from "_texts/presentation/heroes/hero3finance.js";
import hero4 from "_texts/presentation/heroes/hero4finance.js";
// texts for components as props
import navbarlinkslanding2 from "_texts/presentation/navbars/navbarlinkslanding2.js";
import headervideotitle from "_texts/presentation/headers/headerfinancevideotitle.js";
import footersmall from "_texts/presentation/footers/footersmall.js";

export default function LandingFinance() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      {/* <NavbarLinks {...navbarlinkslanding2} /> */}
      <HeaderVideoTitle {...headervideotitle} />
      <div className="container mx-auto px-4">
        <Hero4 {...hero4} />
        <Hero2 {...hero2} />
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
