import React, { useState } from "react";

import { useContext } from 'react';
import LanguageContext from '../lib/MyContext.js';

import Navbar from "../components/Navbars/MyAuthNavbar.js";
import Footer from "../components/Footers/MyFooter.js";


import { sanityClient } from "../lib/sanity";

// data from sanity
const navBarQuery = `*[_type=="navBar"]`;
const footerQuery = `*[_type=="footer"]`;
const contactFormQuery = `*[_type=="contactForm"]`;


import { sendContactMail } from "../lib/emailFormContent"

export default function Appointment({ navBarQueryData, footerQueryData, contactFormQueryData }) {

    const { language, setLanguage, backgroundColour, setBackgroundColour, textColour, setTextColour } = useContext(LanguageContext);

    let handleSubmit = function (e) {
        let name = e.target.name.value;
        let petName = e.target.petName.value;
        let phone = e.target.phoneNumber.value;
        let email = e.target.email.value;
        let reason = e.target.reason.value;
        e.preventDefault();
        e.target.reset();
        sendContactMail(name, petName, phone, email, reason);

    };

    return (
        <>

            <div className={`absolute top-0 w-full h-20 green`} ></div>


            <div className="bg-blueGray-200">
                <Navbar language={language} setLanguage={setLanguage} navBarQueryData={navBarQueryData} />

                <div className="absolute mybackgroundopacity top-0 w-full h-20"></div>
                <main>
                    <div className="relative pt-32 pb-16 flex content-center items-center justify-center min-h-screen-75 ">

                        <div className="container mx-auto">
                            <div className="flex justify-center px-2 mx-8 my-12">

                                <div className="w-full xl:w-3/4 lg:w-11/12 flex">

                                    <div
                                        className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded rounded-l-lg"
                                        style={{ backgroundImage: "url('./img/cat.webp')" }}
                                    ></div>

                                    <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                                        <h3 className={`pt-4 pb-4 text-2xl  text-center`}>{contactFormQueryData[language].formTitle}</h3>
                                        <hr className="mb-6 border-t" />


                                        <form className="px-8 pt-4 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
                                            <div className="mb-4 px-6 md:flex md:justify-between">
                                                <div className="mb-4 md:mr-2 md:mb-0">
                                                    <label className={`block mb-2  font-bold `}>
                                                        <i className="fas fa-file-signature px-2"></i>{contactFormQueryData[language].field1}
                                                    </label>
                                                    <input
                                                        className={`w-full px-3 py-2 leading-tight  border rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                                                        id="name"
                                                        type="text"
                                                        placeholder={contactFormQueryData[language].field1}
                                                        required
                                                    />
                                                </div>
                                                <div className="md:ml-2">
                                                    <label className={`block mb-2  font-bold `}>
                                                        <i className="fas fa-frog px-2"></i> {contactFormQueryData[language].field2}
                                                    </label>
                                                    <input
                                                        className={`w-full px-3 py-2  leading-tight  border rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                                                        id="petName"
                                                        type="text"
                                                        placeholder={contactFormQueryData[language].field2}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="mb-4 px-6 md:flex md:justify-between">
                                                <div className="mb-4  md:mr-2 md:mb-0">
                                                    <label className={`block mb-2  font-bold `}>
                                                        <i className="fas fa-phone px-2"></i>{contactFormQueryData[language].field3}
                                                    </label>
                                                    <input
                                                        className={`w-full px-3 py-2 mb-3  leading-tight  border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                                                        id="phoneNumber"
                                                        type="text"
                                                        placeholder={contactFormQueryData[language].field3}
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <label className={`block mb-2  font-bold `}>
                                                        <i className="fas fa-envelope px-2"></i>{contactFormQueryData[language].field4}
                                                    </label>
                                                    <input
                                                        className={`w-full px-3 py-2 mb-3  leading-tight  border rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                                                        id="email"
                                                        type="email"
                                                        placeholder={contactFormQueryData[language].field4}
                                                        required
                                                    />
                                                </div>


                                            </div>
                                            <div className="mb-4 px-6">
                                                <label className={`block mb-2  font-bold `}>
                                                    <i className="fas fa-question px-2"></i> {contactFormQueryData[language].field5}
                                                </label>
                                                <textarea
                                                    className={`w-full px-3 py-2 mb-3  leading-tight  border rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
                                                    id="reason"
                                                    placeholder={contactFormQueryData[language].field5}
                                                    rows="4"
                                                    columns="20"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-6 px-12 text-center">
                                                <button
                                                    className={`w-full px-4 py-2 font-bold  rounded-full green text-white hover:green focus:outline-none focus:shadow-outline`}
                                                    type="submit"
                                                >
                                                    <i className="fas fa-calendar-check px-2"></i> {contactFormQueryData[language].buttonText}
                                                </button>
                                            </div>
                                            <hr className="mb-6 border-t" />
                                            <div className="text-center">
                                                <a
                                                    className={`inline-block   align-baseline `}
                                                    href="#"
                                                >
                                                    {contactFormQueryData[language].bottomText1}
                                                </a>
                                            </div>
                                            <div className="text-center">
                                                <a
                                                    className={`inline-block align-baseline `}
                                                    href="./index.html"
                                                >
                                                    {contactFormQueryData[language].bottomText2}
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer language={language} footerQueryData={footerQueryData} backgroundColour={backgroundColour} setBackgroundColour={setBackgroundColour} textColour={textColour} setTextColour={setTextColour} />
            </div>
        </>
    );
}



// get all the data from the Sanity CMS
export async function getStaticProps() {
    const navBarQueryData = await sanityClient.fetch(navBarQuery);
    const footerQueryData = await sanityClient.fetch(footerQuery);
    const contactFormQueryData = await sanityClient.fetch(contactFormQuery);
    return {
        props: {
            navBarQueryData,
            footerQueryData,
            contactFormQueryData,
        }
    }
}
