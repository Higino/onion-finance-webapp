import React from "react";
import { Link } from "react-router-dom";

export default function NavbarComponents() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="fixed w-full bg-blueGray-900 flex flex-wrap items-center justify-between px-2 py-3 z-9999">
        <div className="w-full px-4 mx-auto flex flex-wrap items-center justify-between max-h-screen-70 overflow-y-auto">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/finance"
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              Influencers FinTech
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded lg:shadow-lg" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto lg:items-center">
              <li>
                <Link
                  to="/finance"
                  className="hover:opacity-75 lg:text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold transition-all duration-150 ease-in-out text-blueGray-800"
                >
                  Financing
                </Link>
              </li>
              <li>
                <Link
                  to="/accounting"
                  className="hover:opacity-75 lg:text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold transition-all duration-150 ease-in-out text-blueGray-800"
                >
                  Accounting
                </Link>
              </li>
              <li>
                <Link
                  to="/components"
                  className="hover:opacity-75 lg:text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold transition-all duration-150 ease-in-out text-blueGray-800"
                >
                  Sponsorship
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="hover:opacity-75 lg:text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold transition-all duration-150 ease-in-out text-blueGray-800"
                >
                  Influencer Events
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto lg:items-center">
              <li>
                <a
                  className="text-blueGray-800 hover:text-blueGray-600 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#facebook-page"
                >
                  <i className="text-blueGray-500 lg:text-white fab fa-facebook text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>

              <li>
                <a
                  className="text-blueGray-800 hover:text-blueGray-600 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#twitter-page"
                >
                  <i className="text-blueGray-500 lg:text-white fab fa-twitter text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li>

              <li>
                <a
                  className="text-blueGray-800 hover:text-blueGray-600 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#github-account"
                >
                  <i className="text-blueGray-500  lg:text-white fab fa-github text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </a>
              </li>
              <li>
                <Link
                    to="/login-1"
                    className="hover:opacity-75 lg:text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold transition-all duration-150 ease-in-out text-blueGray-800"
                  >
                    <span className="text-xs px-4 py-2 shadow hover:shadow-md text-white bg-blueGray-800 border-blueGray-800 active:bg-blueGray-900 active:border-blueGray-900 rounded outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold mr-2">
                      Pre-register
                    </span>
                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
