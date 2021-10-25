import React from "react";

import LanguageContext from '../lib/MyContext.js';

import Navbar from "../components/Navbars/MyAuthNavbar.js";
import Footer from "../components/Footers/MyFooter.js";
import StaffProfile from "../components/Cards/StaffProfile.js"


import { sanityClient, urlFor } from "../lib/sanity";

// data from sanity
const navBarQuery = `*[_type=="navBar"]`;
const footerQuery = `*[_type=="footer"]`;
const ourStaffPageQuery = `*[_type=="ourStaffPage"]`;
const vetProfileQuery = `*[_type=="vetProfile"]`;
const nurseProfileQuery = `*[_type=="nurseProfile"]`;
const groomerProfileQuery = `*[_type=="groomerProfile"]`;


export default function OurStaff({ navBarQueryData, footerQueryData, ourStaffPageQueryData,vetProfileQueryData, nurseProfileQueryData, groomerProfileQueryData }) {

    const { language, setLanguage, backgroundColour, setBackgroundColour, textColour, setTextColour } = React.useContext(LanguageContext);

    const [openTab, setOpenTab] = React.useState(1);

    let color = "green";
     console.log("vet" + nurseProfileQueryData)
    return (
        <>

            <div className={`absolute top-0 w-full h-20 shadow border green`} ></div>


            <div className="bg-blueGray-200">
                <Navbar language={language} setLanguage={setLanguage} navBarQueryData={navBarQueryData} />

                <div className="absolute mybackgroundopacity top-0 w-full h-20"></div>
                <main>

                    <div className="relative mt-8 pt-16 pb-32 content-center items-center justify-center min-h-screen-75 flex flex-wrap">
                        <div className="container mx-auto">
                            <ul
                                className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                                role="tablist"
                            >
                                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                    <a
                                        className={
                                            "font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                            (openTab === 1
                                                ? "text-white " + color
                                                : "text-" + color + "-500 bg-white")
                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(1);
                                        }}
                                        data-toggle="tab"
                                        href="#link1"
                                        role="tablist"
                                    >
                                        <i className="fas fa-stethoscope text-base mr-1"></i> {ourStaffPageQueryData[language].tab1}
                                    </a>
                                </li>
                                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                    <a
                                        className={
                                            "font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                            (openTab === 2
                                                ? "text-white " + color
                                                : "text-" + color + "-500 bg-white")
                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(2);
                                        }}
                                        data-toggle="tab"
                                        href="#link2"
                                        role="tablist"
                                    >
                                        <i className="fas fa-hand-holding-medical text-base mr-1"></i>  {ourStaffPageQueryData[language].tab2}
                                    </a>
                                </li>
                                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                    <a
                                        className={
                                            "font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                            (openTab === 3
                                                ? "text-white " + color
                                                : "text-" + color + "-500 bg-white")
                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(3);
                                        }}
                                        data-toggle="tab"
                                        href="#link3"
                                        role="tablist"
                                    >
                                        <i className="fas fa-hand-scissors text-base mr-1"></i>  {ourStaffPageQueryData[language].tab3}
                                    </a>
                                </li>
                            </ul>
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="tab-content tab-space"> 
                                        <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                            <StaffProfile vetProfileQueryData={vetProfileQueryData} language={language}/>
                                        </div>
                                        <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                            <StaffProfile nurseProfileQueryData={nurseProfileQueryData} language={language} />
                                        </div>
                                        <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                            <StaffProfile groomerProfileQueryData={groomerProfileQueryData} language={language} />
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
    const ourStaffPageQueryData = await sanityClient.fetch(ourStaffPageQuery);
    const vetProfileQueryData = await sanityClient.fetch(vetProfileQuery);
    const nurseProfileQueryData = await sanityClient.fetch(nurseProfileQuery);
    const groomerProfileQueryData = await sanityClient.fetch(groomerProfileQuery);
    return {
        props: {
            navBarQueryData,
            footerQueryData,
            ourStaffPageQueryData,
            vetProfileQueryData,
            nurseProfileQueryData,
            groomerProfileQueryData,
        }
    }
}
