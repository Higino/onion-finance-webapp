import infoArea from "_texts/presentation/infoarea/infoareaicontitlelink.js";
import skewCard from "_texts/presentation/cards/cardblogimage.js";

const textProps = {
  heading3: {
    color: "lightBlue",
    subtitle: "Loans and Cash Advance",
    title: "Improve your social media cash flow",
    description:
      "Monetize your channel value. We can assign a credit value to your social media accounts and provide you a safe reasonable loan. If you just need money now, we can predict your channel future receivables and provide you a cash advance.",
    alignment: "center",
  },
  infoCards: [
    {
      icon: "fas fa-award",
      iconColor: "red",
      title: "Media Cash Advances",
      description:
        "Connect your social media and we will predict future revenue from them. We will advance the cash now and collect from the social media provider later.",
    },
    {
      icon: "fas fa-retweet",
      iconColor: "lightBlue",
      title: "Free hassle Loans",
      description:
        "Need money for your next mic or light set? We will provide you a loan based on your social media value. No credit check, no hassle, no paperwork.",
    },
    {
      icon: "fas fa-fingerprint",
      iconColor: "emerald",
      title: "Sponsorship factoring",
      description:
        "Made a deal with a recent brand and need the money now? We will advance the cash now and collect from the brand later. No more waiting for the brand to pay you",
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
