const infoArea = {
  icon: "fas fa-user-friends",
  iconColor: "blueGray",
  title: "Your banking partner for your media business",
  description: [
    "In the dynamic world of media, it's essential to have a financial partner that understands your unique challenges and aspirations. Our bank is tailor-made for media professionals and businesses, offering a suite of specialized financial products and services to cater to your industry-specific needs. With our expertise in the media sector and a commitment to fostering growth, innovation, and sustainability.",
    "Consider us your dedicated banking ally in every stage of your media journey. Partner with us today and let's co-create a brighter, more prosperous future for your media business.",
  ],
  link: {
    text: "Pre-register Now!",
    link: "/preregister",
    innerLink: true,
  },
};

const skewCard = {
  image:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
  title: "From Influencers to Influencers",
  description:
    "We ourselves are influencers understanding how hard it is to grow without finance. We take your business seriously and our mission is to provide hassle free and fair finance for emerging professions and innovators.",
  color: "lightBlue",
};

const textProps = {
  heading3: {
    color: "lightBlue",
    subtitle: "Loans and Cash Advance",
    title: "Ramp up your cash",
    description:
      "Monetize your channel value. We can propose a credit value to your social media accounts and provide you a safe reasonable loan plan adjuste to your needs.",
    alignment: "center",
  },
  infoCards: [
    {
      icon: "fas fa-award",
      iconColor: "red",
      title: "Cash Advances",
      description:
        "Connect your social media and we will predict future revenue from them. If you just need money now, we can predict your channel future receivables and provide you a cash advance.",
    },
    {
      icon: "fas fa-retweet",
      iconColor: "lightBlue",
      title: "Get money to invest in yourself",
      description:
        "Need money for your next mic or light set or just loan a studio in your local provider for better sound quality? We will provide you a loan based on your social media value. No credit check, no hassle, no paperwork.",
    },
    {
      icon: "fas fa-fingerprint",
      iconColor: "emerald",
      title: "Sponsorship factoring",
      description:
        "Made a deal with a brand? We will advance the cash now and collect from the brand later. No more waiting for the brand to pay you",
    },
  ],
  infoArea: {
    ...infoArea,
  },
  skewCard: {
    ...skewCard,
  },
};
export default textProps;
