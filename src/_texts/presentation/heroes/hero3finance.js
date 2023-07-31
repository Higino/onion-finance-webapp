import infoArea1 from "_texts/presentation/infoarea/infoareawhitetitle.js";

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
      icon: "fas fa-poll",
      type: "light",
      title: "Grow your market",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      icon: "fas fa-lightbulb",
      type: "light",
      title: "Launch time",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ],
};
export default textProps;
