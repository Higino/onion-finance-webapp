const textProps = {
    color: "dark",
    detailsPanel: {
      leftTitle: "Join Us!",
      leftDescription:
        "Secure your spot in our platform and get exclusive perks, by pre-registring and don't miss out. No credit card required",
      leftButton: {
        children: "Sign in",
        color: "light",
        size: "sm",
      },
      rightTitle: "Welcome!",
      rightDescription: "Signups will be available soon. Stay tuned! For now just register yourself with us and we will be contacting once we open for business. We will be adding people by their pre-registration order",
      rightButton: {
        children: "Go to pre-registration form",
        color: "light",
        size: "sm",
      },
    },
    leftCard: {
      title: "Pre Register!",
      subtitle: "Enter your personal details to complete pre-registration",
      button: {
        children: "Pre-registe me!",
        href: "/",
        color: "dark",
      },
      inputs: [
        {
          leftIcon: "fas fa-user",
          placeholder: "Name",
          type: "text",
          border: "borderless",
        },
        {
          leftIcon: "fas fa-envelope",
          placeholder: "Email",
          type: "email",
          border: "borderless",
        },
      ],
      // socials: [ ],
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
    rightCard: {
      title: "Login to your account",
      subtitle: "Sign in with your credentials.",
      button: {
        children: "sign up - Coming soon!",
        color: "dark",
      },
      inputs: [],
      // inputs: [
      //   {
      //     leftIcon: "fas fa-user",
      //     placeholder: "Name",
      //     type: "name",
      //     border: "borderless",
      //   },
      //   {
      //     leftIcon: "fas fa-envelope",
      //     placeholder: "Email",
      //     type: "email",
      //     border: "borderless",
      //   },
      //   {
      //     leftIcon: "fas fa-lock",
      //     placeholder: "Password",
      //     type: "password",
      //     border: "borderless",
      //   },
      // ],
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
  