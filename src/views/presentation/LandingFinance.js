import React from "react";
import { useLocation } from "react-router-dom";

// sections
import PageEnding from "../../components/Sections/Presentation/Heroes/Hero3.js";
import LoansFinance from "../../components/Sections/Presentation/Heroes/Hero1.js";
import Testimonies from "../../components/Sections/Presentation/Teams/Teams1.js";
import AdditionalServices from "../../components/Sections/Presentation/Heroes/Hero2.js";
// components
//import HeaderVideoTitle from "components/Headers/Presentation/HeaderVideoTitle.js";
import HeaderImageTitleCenter from "../../components/Headers/Presentation/HeaderImageTitleCenter.js";
import FooterSmall from "components/Footers/Landing/FooterSmall.js";
// texts for sections as props

import hero3 from "./_texts/perkspreregisterTextProps.js";
import loansFinanceTextprops from "./_texts/loansFinanceTextprops.js";
import AdditionalServicesData from "./_texts/hero2additionalservices.js";

// texts for components as props
import headerData from "./_texts/headerfinanceviewTextprops.js";
import testimoniesData from "./_texts/testimoniesfinance.js";
import footersmall from "_texts/presentation/footers/footersmall.js";





export default function LandingFinance() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      {/* <NavbarLinks {...navbarlinkslanding2} /> */}
      {/* <HeaderVideoTitle {...headervideotitle} /> */}
      <main>
        <HeaderImageTitleCenter {...headerData} />
        <div className="container mx-auto px-4">
          <Testimonies {...testimoniesData} />
          <LoansFinance {...loansFinanceTextprops} />
          <AdditionalServices {...AdditionalServicesData} />
          <PageEnding {...hero3} />
        </div>
        {/* <div className="">
          <Testimonies {...testimoniesData} />
        </div>
        <div className="">
          <AdditionalServices {...AdditionalServicesData} />
        </div>
        <div className="">
          <PageEnding {...hero3} />
        </div> */}
        {/* <Hero5 {...hero5} />
        <Blogs1 {...blogs1} />
        <Pricing1 {...pricing1} /> */}
      </main>
      {/* <PreFooterLarge {...prefooterlarge} /> */}
      <FooterSmall {...footersmall} />
    </>
  );
}
