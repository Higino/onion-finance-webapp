import React from "react";
import { useLocation } from "react-router-dom";

// sections
import Hero3 from "components/Sections/Presentation/Heroes/Hero3.js";
import Hero1 from "components/Sections/Presentation/Heroes/Hero1.js";
import Teams1 from "components/Sections/Presentation/Teams/Teams1.js";
// components
//import HeaderVideoTitle from "components/Headers/Presentation/HeaderVideoTitle.js";
import HeaderImageTitleCenter from "components/Headers/Presentation/HeaderImageTitleCenter.js";
import FooterSmall from "components/Footers/Landing/FooterSmall.js";
// texts for sections as props

import hero3 from "./_texts/hero3finance.js";
import hero1 from "./_texts/hero1Loans.js";
// texts for components as props
import headervideotitle from "./_texts/headerfinancevideotitle.js";
import footersmall from "_texts/presentation/footers/footersmall.js";



const props = {
  heading3: {
    color: "orange",
    subtitle: "Famous Testimonies",
    title: "Everyone has a story, and everyone's story share the same problem",
    description:
      "Being a creoator is a business and like anyother business it needs money to grow. Traditional finance don't understand you, we do. Connect your social media accounts and apply for a loan, Earn points and use them to get better rates, choose that cutting edge software and we buy the licence for you. Rent our equipment and buy later. Your choice, your way.",
    alignment: "center",
  },
  infoAreas: [
    {
      image: "https://yt3.googleusercontent.com/ytc/AOPolaTB74G2t2PxSgDndsgKld03qVN7Cr5udqo5APKSTTE=s176-c-k-c0x00ffffff-no-rj",
      name: "Real Engineering channel",
      jobTitle: "Despite running a top YouTube channel, I couldn't get help from traditional banks",
      socialLinks: [
        { icon: "twitter", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "dribbble", link: "#pablo" },
      ],
    },
    {
      image: "https://yt3.googleusercontent.com/ytc/AOPolaR4bgz2Zpfv9o77hiIY5Z7HYxcBoucFCEgrkNAsmA=s176-c-k-c0x00ffffff-no-rj",
      name: "Alexandra Botez",
      jobTitle: "... banks rejected me twice ...",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
      ],
    },
    {
      image: "https://yt3.googleusercontent.com/ytc/AOPolaSe-ifBRtdfb67uDM8kaHdhdPdQny-MaSRdBfT2NA=s176-c-k-c0x00ffffff-no-rj-mo",
      name: "MrBeast",
      jobTitle: "... I was just trying to scrounge up money so I can buy equipment cause I was just using my brother's old laptop ...",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "twitter", link: "#pablo" },
      ],
    },
    {
      image: "https://yt3.ggpht.com/UA3-foGLMxAW0zCZ78d4jGSOO0Lm8Qh2BY8gXlpcTTOu_5QzCoU5Yww9Hutd9RxI3Xw6MBO24NE=s176-c-k-c0x00ffffff-no-rj-mo",
      name: "Nas Daily",
      jobTitle: "I have over $3M in revenue per year and 20 employees, but traditional banks still don’t trust me.",
      socialLinks: [
        { icon: "instagram", link: "#pablo" },
        { icon: "facebook", link: "#pablo" },
        { icon: "twitter", link: "#pablo" },
        { icon: "dribbble", link: "#pablo" },
      ],
    },
  ],
}


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
        <HeaderImageTitleCenter {...headervideotitle} />
        <div className="">
        <Hero1 {...hero1} />
        </div>
        <div className="-mt-40">
          <Teams1 {...props} />
          {/* <Testimonies {...testimoniesData} />   */}
        </div>
        <div className="-mt-40">
          <Hero3 {...hero3} />
        </div>
        {/* <Hero5 {...hero5} />
        <Blogs1 {...blogs1} />
        <Pricing1 {...pricing1} /> */}
      </main>
      {/* <PreFooterLarge {...prefooterlarge} /> */}
      <FooterSmall {...footersmall} />
    </>
  );
}
