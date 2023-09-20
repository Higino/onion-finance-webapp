const infoArea1 = {
  icon: "fas fa-money-bill-alt",
    type: "light",
    title: "Hassle Free Loans",
    description:
      "Apply in 5 minutes, get help in days. We are lauching soon but we wont waist your time. We will help you get the best loans for your needs in days not weeks",
};

const infoArea2 = {
  icon: "fas fa-poll",
  type: "light",
  title: "Rising start Influencers partner",
  description:
    "If you take your media seriously we take our business to help you seriously too.",

};

const infoArea3 = {
  icon: "fas fa-lightbulb",
  type: "light",
  title: "Launch time",
  description:
    "No time to waist, social media doesn't wait, timing is everything. We are launching soon, but when we lauch we will be ready to help you in days, from day one",
};

const textProps = {
  heading3: {
    color: "light",
    subtitle: "Pre-register now for exclusive perks",
    title: "Be the first to know when we launch and start spending for free",
    description:
      "That’s right. We does not charge any membership or transaction fees.",
    alignment: "center",
    whiteContent: true,
  },
  infoAreas: [
    {
      ...infoArea1,
    },
    {
      ...infoArea2,
    },
    {
      ...infoArea3,
    },
  ],
};
export default textProps;
