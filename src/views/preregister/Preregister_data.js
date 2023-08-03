const textProps = {
    color: "dark",
    detailsPanel: {
      leftTitle: "Join Us!",
      leftDescription:
        "To secure your spot in our platform and get exclusive perks, don't miss out. No credit card required",
      leftButton: {
        children: "Sign up - Coming soon",
        color: "light",
        size: "sm",
      },
      rightTitle: "Welcome!",
      rightDescription: "Enter your personal details and start journey with us",
      rightButton: {
        children: "Count me in",
        color: "light",
        size: "sm",
      },
    },
    leftCard: {
      title: "Pre Register!",
      subtitle: "Enter your personal details and start journey with us",
      button: {
        children: "Count me in!",
        color: "dark",
      },
      inputs: [
        {
          leftIcon: "fas fa-envelope",
          placeholder: "Email",
          type: "email",
          border: "borderless",
        },
        {
          leftIcon: "fas fa-lock",
          placeholder: "Password",
          type: "password",
          border: "borderless",
        },
      ],
      socials: [ ],
      // socials: [
      //   {
      //     icon: "fab fa-facebook",
      //     button: {
      //       size: "sm",
      //       color: "facebook",
      //     },
      //   },
      //   {
      //     icon: "fab fa-instagram",
      //     button: {
      //       size: "sm",
      //       color: "instagram",
      //     },
      //   },
      //   {
      //     icon: "fab fa-twitter",
      //     button: {
      //       size: "sm",
      //       color: "twitter",
      //     },
      //   },
      // ],
    },
    rightCard: {
      title: "Create Account",
      subtitle: "or use your email for registration",
      button: {
        children: "sign up",
        color: "dark",
      },
      inputs: [
        {
          leftIcon: "fas fa-user",
          placeholder: "Name",
          type: "name",
          border: "borderless",
        },
        {
          leftIcon: "fas fa-envelope",
          placeholder: "Email",
          type: "email",
          border: "borderless",
        },
        {
          leftIcon: "fas fa-lock",
          placeholder: "Password",
          type: "password",
          border: "borderless",
        },
      ],
      socials: [
        {
          icon: "fab fa-facebook",
          button: {
            size: "sm",
            color: "facebook",
          },
        },
        {
          icon: "fab fa-instagram",
          button: {
            size: "sm",
            color: "instagram",
          },
        },
        {
          icon: "fab fa-twitter",
          button: {
            size: "sm",
            color: "twitter",
          },
        },
      ],
    },
  };
  export default textProps;
  