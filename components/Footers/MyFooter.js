import React from "react";
import Map from "../Maps/Map"

export default function MyFooter(props) {
  return (
    <>
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-4/12 px-4">
              <h4 className="text-3xl font-semibold">{props.footerQueryData[props.language].footerTitle}</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                {props.footerQueryData[props.language].footerSubtitle}
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="bg-white mr-3 text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                {/* <button
                  className="bg-emerald-500 ml-3 text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                  onClick={() => { props.setBackgroundColour('bg-emerald-500'); props.setTextColour('text-emerald-500') }}
                >
                </button>
                <button
                  className="bg-teal-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                  onClick={() => { props.setBackgroundColour('bg-teal-500'); props.setTextColour('text-teal-500') }}
                >
                </button>
                <button
                  className="bg-orange-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                  onClick={() => { props.setBackgroundColour('bg-orange-500'); props.setTextColour('text-orange-500') }}
                >
                </button>
                <button
                  className="bg-red-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                  onClick={() => { props.setBackgroundColour('bg-red-500'); props.setTextColour('text-red-500') }}
                ></button>
                  <button
                    className="green shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                    onClick={() => { props.setBackgroundColour('green'); props.setTextColour('green') }}
                  >
                </button> */}
              </div>
            </div>
            <div className="w-full lg:w-8/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    {props.footerQueryData[props.language].section1Title}
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      {props.footerQueryData[props.language].section1Item1}
                    </li>
                    <li>
                      {props.footerQueryData[props.language].section1Item2}
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    {props.footerQueryData[props.language].section2Title}
                  </span>
                  <ul className="list-unstyled">
                    <li>

                      {props.footerQueryData[props.language].section2Item1}
                    </li>
                    <li>

                      {props.footerQueryData[props.language].section2Item2}

                    </li>
                    <li>
                      {props.footerQueryData[props.language].section1Item3}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex rounded">
            <Map></Map>
          </div>
        </div>
      </footer>
    </>
  );
}
