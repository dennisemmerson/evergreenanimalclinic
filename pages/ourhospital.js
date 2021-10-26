import React, { useState } from "react";




import { useContext } from 'react';
import LanguageContext from '../lib/MyContext.js';

import Navbar from "../components/Navbars/MyAuthNavbar.js";
import Footer from "../components/Footers/MyFooter.js";


import { sanityClient, urlFor } from "../lib/sanity";


//const ourHospitalQuery = `*[_type=="ourHospitalPage"]`;
const navBarQuery = `*[_type=="navBar"]`;
const footerQuery = `*[_type=="footer"]`;
const ourHospitalPageQuery = `*[_type=="ourHospitalPage"]`;


export default function Treatment({ navBarQueryData, footerQueryData, ourHospitalPageQueryData }) {

    const { language, setLanguage } = useContext(LanguageContext);
    return (
        <>

            <div className="absolute top-0 w-full border-b-2 shadow-lg green h-16"></div>


            <div className="bg-blueGray-200">
                <Navbar language={language} setLanguage={setLanguage} navBarQueryData={navBarQueryData} />


                <main>

                    <div className="relative flex pt-32 content-center items-center justify-center min-h-screen-75">
                        <div className="container mx-auto">
                            <div className="flex flex-wrap text-center">
                                <div className="w-full lg:w-10/12">

                                    <div class="max-w-lg mx-auto px-3">
                                        <div class="bg-white shadow-md border border-gray-200 rounded-lg mb-12 px-3">

                                            <div class="p-5 ">
                                                <h1 className="text-3xl pb-2">{ourHospitalPageQueryData[language].title}</h1>
                                                <h3 className="text-xl italic">{ourHospitalPageQueryData[language].subTitle}</h3>
                                            </div>

                                            <div className="container">
                                                <div className="flex flex-wrap relative flex flex-col">
                                                    <div className="flex flex-wrap items-center">
                                                        <div className="w-full md:w-5/12 mr-auto ml-auto">
                                                            <div className="text-blueGray-500 pb-6 inline-flex">
                                                                <div>
                                                                    <p className="text-left">{ourHospitalPageQueryData[language].section1Text[0].children[0].text}</p>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div className="w-full md:w-4/12 pb-6 mr-auto ml-auto">
                                                            <div className="text-center inline-flex items-center justify-center">
                                                                <div>
                                                                    <img
                                                                        alt="logo"
                                                                        src={urlFor(ourHospitalPageQueryData[language].image).url()}
                                                                        className="w-full align-middle rounded rounded-t-lg"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>




                                            <div class="grid md:grid-cols-2 gap-6">



                                            </div>





                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>

                </main>
                <Footer language={language} footerQueryData={footerQueryData} />
            </div>
        </>
    );
}



// get all the data from the Sanity CMS
export async function getStaticProps() {
    const navBarQueryData = await sanityClient.fetch(navBarQuery);
    const footerQueryData = await sanityClient.fetch(footerQuery);
    const ourHospitalPageQueryData = await sanityClient.fetch(ourHospitalPageQuery);
    return {
        props: {
            navBarQueryData,
            footerQueryData,
            ourHospitalPageQueryData,
        }
    }
}
