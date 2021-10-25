import React, {useState} from "react";

import { useContext } from 'react';
import LanguageContext from '../../lib/MyContext.js';

import Navbar from "../../components/Navbars/MyAuthNavbar.js";
// import Footer from "components/Footers/Footer.js";


import { sanityClient, urlFor } from "../../lib/sanity";

const navBarQuery = `*[_type=="navBar"]`;


export default function Treatment({ navBarQueryData }) {
 
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <><div className="bg-red-400">
      <Navbar transparent language={language} setLanguage={setLanguage} navBarQueryData={navBarQueryData} />

      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div> Hello</div>
     <div>horasdfa;hfak</div>
          </div>
   </main>
   </div>
    </>
  );
}



// get all the data from the Sanity CMS
export async function getStaticProps() {
  const navBarQueryData = await sanityClient.fetch(navBarQuery);
  return {
    props: {
      navBarQueryData,
    }
  }
}
