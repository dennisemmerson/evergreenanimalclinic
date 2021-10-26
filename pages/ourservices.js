import React from "react";

import LanguageContext from '../lib/MyContext.js';

import Navbar from "../components/Navbars/MyAuthNavbar.js";
import Footer from "../components/Footers/MyFooter.js";


import { sanityClient, urlFor } from "../lib/sanity";

// data from sanity
const navBarQuery = `*[_type=="navBar"]`;
const footerQuery = `*[_type=="footer"]`;
const ourServicesPageQuery = `*[_type=="ourServicesPage"]`;


export default function OurServices({ navBarQueryData, footerQueryData, ourServicesPageQueryData, }) {

    const { language, setLanguage, backgroundColour, setBackgroundColour, textColour, setTextColour } = React.useContext(LanguageContext);

    return (
        <>

            <div className={`absolute top-0 w-full h-20 shadow border green`} ></div>


            <div className="bg-blueGray-200">
                <Navbar language={language} setLanguage={setLanguage} navBarQueryData={navBarQueryData} />

                <div className="absolute mybackgroundopacity top-0 w-full h-20"></div>
                <main>

                    <div className="relative mt-8 pt-16 pb-16 content-center items-center justify-center min-h-screen-75 flex flex-wrap">
                        <div className="container mx-auto">

                            <div className="flex flex-wrap text-center">
                                <div className="w-full lg:w-10/12">




                                    <div id="section1" class="max-w-lg mx-auto px-3">
                                        <div class="bg-white shadow-md border border-gray-200 rounded-lg mb-12 px-3">
                                            <div className="container">
                                                <div className="flex flex-wrap relative flex flex-col">
                                                    <div className="flex flex-wrap items-center">
                                                        <div className="w-full md:w-5/12 mr-auto ml-auto">
                                                            <div className="text-blueGray-500 pb-6 inline-flex">

                                                                <div>
                                                                    <div class="p-5 ">
                                                                        <h1 className="text-3xl pb-2">{ourServicesPageQueryData[language].section1Title}</h1>
                                                                    </div>
                                                                    <p className="text-left">{ourServicesPageQueryData[language].section1Text[0].children[0].text}</p>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="w-full md:w-4/12 pb-6 mr-auto ml-auto">
                                                            <div className="text-center inline-flex items-center justify-center">
                                                                <div>
                                                                    <img
                                                                        alt="logo"
                                                                        src={urlFor(ourServicesPageQueryData[language].section1Image).url()}
                                                                        className="w-full align-middle rounded rounded-t-lg"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                    <div id="section2" class="max-w-lg mx-auto px-3">
                                        <div class="bg-white shadow-md border border-gray-200 rounded-lg mb-12 px-3">
                                            <div className="container">
                                                <div className="flex flex-wrap relative flex flex-col">
                                                    <div className="flex flex-wrap items-center">
                                                        <div className="w-full md:w-5/12 mr-auto ml-auto">
                                                            <div className="text-blueGray-500 pb-6 inline-flex">

                                                                <div>
                                                                    <div class="p-5 ">
                                                                        <h1 className="text-3xl pb-2">{ourServicesPageQueryData[language].section2Title}</h1>
                                                                    </div>
                                                                    <p className="text-left">{ourServicesPageQueryData[language].section2Text[0].children[0].text}</p>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="w-full md:w-4/12 pb-6 mr-auto ml-auto">
                                                            <div className="text-center inline-flex items-center justify-center">
                                                                <div>
                                                                    <img
                                                                        alt="logo"
                                                                        src={urlFor(ourServicesPageQueryData[language].section2Image).url()}
                                                                        className="w-full align-middle rounded rounded-t-lg"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div id="section3" class="max-w-lg mx-auto px-3">
                                        <div class="bg-white shadow-md border border-gray-200 rounded-lg mb-12 px-3">
                                            <div className="container">
                                                <div className="flex flex-wrap relative flex flex-col">
                                                    <div className="flex flex-wrap items-center">
                                                        <div className="w-full md:w-5/12 mr-auto ml-auto">
                                                            <div className="text-blueGray-500 pb-6 inline-flex">

                                                                <div>
                                                                    <div class="p-5 ">
                                                                        <h1 className="text-3xl pb-2">{ourServicesPageQueryData[language].section3Title}</h1>
                                                                    </div>
                                                                    <p className="text-left">{ourServicesPageQueryData[language].section3Text[0].children[0].text}</p>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="w-full md:w-4/12 pb-6 mr-auto ml-auto">
                                                            <div className="text-center inline-flex items-center justify-center">
                                                                <div>
                                                                    <img
                                                                        alt="logo"
                                                                        src={urlFor(ourServicesPageQueryData[language].section3Image).url()}
                                                                        className="w-full align-middle rounded rounded-t-lg"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div id="section4" class="max-w-lg mx-auto px-3">
                                        <div class="bg-white shadow-md border border-gray-200 rounded-lg mb-12 px-3">
                                            <div className="container">
                                                <div className="flex flex-wrap relative flex flex-col">
                                                    <div className="flex flex-wrap items-center">
                                                        <div className="w-full md:w-5/12 mr-auto ml-auto">
                                                            <div className="text-blueGray-500 pb-6 inline-flex">

                                                                <div>
                                                                    <div class="p-5 ">
                                                                        <h1 className="text-3xl pb-2">{ourServicesPageQueryData[language].section4Title}</h1>
                                                                    </div>
                                                                    <p className="text-left">{ourServicesPageQueryData[language].section4Text[0].children[0].text}</p>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="w-full md:w-4/12  mr-auto ml-auto">
                                                            <div className="text-center inline-flex items-center justify-center">
                                                                <div>
                                                                    <img
                                                                        alt="logo"
                                                                        src={urlFor(ourServicesPageQueryData[language].section4Image).url()}
                                                                        className="w-full align-middle rounded rounded-t-lg"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
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
    const ourServicesPageQueryData = await sanityClient.fetch(ourServicesPageQuery);

    return {
        props: {
            navBarQueryData,
            footerQueryData,
            ourServicesPageQueryData,
        }
    }
}
