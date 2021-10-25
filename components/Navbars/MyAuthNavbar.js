import React, { useState } from "react";
import Link from "next/link";

import MyPagesDropdown from "components/Dropdowns/MyPagesDropdown.js";
import { sanityClient, urlFor } from "../../lib/sanity";


export default function Navbar(props) {

  const [navbarOpen, setNavbarOpen] = React.useState(false);

  //open and close the nav bar menu
  const [refresh, doRefresh] = useState(0);

  let phoneNumber = 'tel:' + props.navBarQueryData[props.language].phoneNumber;
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href=""
              >
                <i className="lg:text-white text-white fas fa-solid fa-paw text-lg leading-lg mr-2" />{props.navBarQueryData[props.language].nameOfCompany}
              </a>
            </Link>

            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => {
                setNavbarOpen(!navbarOpen);
                doRefresh(prev => prev + 1)
              }}
            >
              <i className="text-white fas fa-bars"></i>
            </button>

          </div>
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="flex items-center">
              <a
                className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href={phoneNumber}
              >
                <i className="lg:text-white text-white fas fa-phone-square text-lg leading-lg mr-2" />
                {props.navBarQueryData[props.language].phoneNumber}
              </a>
            </li>
          </ul>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <MyPagesDropdown refresh={refresh} navBarQueryData={props.navBarQueryData} language={props.language} />
              </li>
            </ul>

          </div>
          <button
            className="lg:text-white text-white"
            type="button"
            onClick={() => {
              props.language == 0 ? props.setLanguage(1) : props.setLanguage(0)
            }}
          >
            Eng/Kor
          </button>
        </div>

      </nav>
    </>
  );
}
