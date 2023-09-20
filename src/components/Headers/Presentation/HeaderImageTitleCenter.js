import React from "react";
import PropTypes from "prop-types";

// components
import Skew from "../../../components/Skews/Skew.js";
import Button from "../../../components/Elements/Button.js";
import { Link } from "react-router-dom/cjs/react-router-dom.min.js";

export default function HeaderImageTitleCenter({
  bgImage,
  title,
  description,
  skewColor,
  buttonText,
  buttonColor,
  buttonIcon
}) {
  return (
    <>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: "url('" + bgImage + "')",
          }}
        >
          <span className="w-full h-full absolute opacity-65 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-7/12 px-4 ml-auto mr-auto text-center">
              <div className="">
                <h1 className="text-white font-semibold text-5xl">{title}</h1>
                <p className="mt-4 text-lg text-blueGray-300">{description}</p>
              </div>
              <p className="mt-2 text-lg text-white opacity-75 mb-16">
              </p>
              <Button color={buttonColor} size="lg">
                <Link to="/preregister">
                <i className={buttonIcon + " mr-2"}></i>
                {buttonText}
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full absolute top-auto bottom-0">
          <Skew color={skewColor} />
        </div>
      </div>
    </>
  );
}

HeaderImageTitleCenter.defaultProps = {
  skewColor: "blueGray",
};

HeaderImageTitleCenter.propTypes = {
  bgImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonIcon: PropTypes.string,
  buttonColor: PropTypes.oneOf([
    "light",
    "dark",
    "blueGray",
    "red",
    "orange",
    "amber",
    "emerald",
    "teal",
    "lightBlue",
    "indigo",
    "purple",
    "pink",
  ]),
  skewColor: PropTypes.oneOf([
    "blueGray",
    "red",
    "orange",
    "amber",
    "emerald",
    "teal",
    "lightBlue",
    "indigo",
    "purple",
    "pink",
  ]),
};
