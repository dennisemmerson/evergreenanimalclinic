import React, { useState } from "react";
import Link from "next/link";
import { useContext } from 'react';
import LanguageContext from '../lib/MyContext.js';

// components
import Navbar from "components/Navbars/MyAuthNavbar.js";
import Footer from "components/Footers/MyFooter.js";

import { sanityClient, urlFor } from "../lib/sanity";

const landingPageQuery = `*[_type=="landingPage"]`;
const navBarQuery = `*[_type=="navBar"]`;
const footerQuery = `*[_type=="footer"]`;


export default function Landing({ landingPageQueryData, navBarQueryData, footerQueryData }) {

  const { language, setLanguage,backgroundColour, setBackgroundColour,textColour, setTextColour } = useContext(LanguageContext);

  let landingPageBannerURL = 'url(' + urlFor(landingPageQueryData[language].bannerImage).url() + ')';
  return (
    <>

      <Navbar transparent language={language} setLanguage={setLanguage} navBarQueryData={navBarQueryData} />
      <main >
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75 ">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                //"url('./img/front.jpg')",
                landingPageBannerURL,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute mybackgroundopacity bg-black"
            ></span>
          </div>
          <div className="container   relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-4/12 px-4 ml-auto mr-auto text-center">
                <div className="">
                  <h1 className="text-white font-semibold text-4xl">
                    {landingPageQueryData[language].bannerTitle}
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    {landingPageQueryData[language].bannerContent[0].children[0].text}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
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
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-dog text-xl"></i>
                    </div>
                    <h6 className="text-xl font-semibold">{landingPageQueryData[language].section1FirstBlockTitle}</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      {landingPageQueryData[language].section1FirstBlockContent[0].children[0].text}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-cat text-xl"></i>
                    </div>
                    <h6 className="text-xl font-semibold">{landingPageQueryData[language].section1SecondBlockTitle}</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      {landingPageQueryData[language].section1SecondBlockContent[0].children[0].text}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-dove text-xl"></i>
                    </div>
                    <h6 className="text-xl font-semibold">{landingPageQueryData[language].section1ThirdBlockTitle}</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      {landingPageQueryData[language].section1ThirdBlockContent[0].children[0].text}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-1">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-briefcase-medical text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  {landingPageQueryData[language].section2Title}
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  {landingPageQueryData[language].section2Content[0].children[0].text}
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                  <img
                    alt="section 3 image"
                    src={urlFor(landingPageQueryData[language].section3Image).url()}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-blueGray-700 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      {landingPageQueryData[language].section3Title}
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      {landingPageQueryData[language].section3Content[0].children[0].text}
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={urlFor(landingPageQueryData[language].section4Image).url()}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200">
                    <i className="fas fa-ribbon text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">{landingPageQueryData[language].section4Title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    {landingPageQueryData[language].section4Content[0].children[0].text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>





      </main>
      <Footer language={language} footerQueryData={footerQueryData} backgroundColour={backgroundColour} setBackgroundColour={setBackgroundColour} textColour={textColour} setTextColour={setTextColour} />


    </>
  );
}


// get all the data from the Sanity CMS
export async function getStaticProps() {
  const landingPageQueryData = await sanityClient.fetch(landingPageQuery);
  const navBarQueryData = await sanityClient.fetch(navBarQuery);
  const footerQueryData = await sanityClient.fetch(footerQuery);
  return {
    props: {
      landingPageQueryData,
      navBarQueryData,
      footerQueryData,
    }
  }
}
