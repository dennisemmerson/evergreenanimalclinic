import React from "react";
import {urlFor } from "../../lib/sanity";

// components

export default function StaffProfile(props) {

let profileData={};
  if (props.vetProfileQueryData) profileData = props.vetProfileQueryData;
  else if(props.nurseProfileQueryData) profileData = props.nurseProfileQueryData;
  else if (props.groomerProfileQueryData) profileData = props.groomerProfileQueryData;

  return (
    <>
      <div className="min-w-0 break-words bg-white w-full mb-2 grid md:grid-cols-2 divide-x">
        <div>
          <div className="text-center mt-12">
            <h3 className="text-4xl font-bold leading-normal mb-2 text-blueGray-700 mb-2">
              {profileData[props.language].name}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
              {profileData[props.language].subTitle}
            </div>

          </div>
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">
                <div className="relative">
                  <img
                    alt="..."
                    src={urlFor(profileData[props.language].staffImage).url()} 
                    className="shadow-xl rounded-full align-middle border-none"
                  />
                </div>

              </div>
              <div className="w-full px-4 flex justify-center mb-2 text-blueGray-600 mt-10">
                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                {profileData[props.language].experience}
              </div>
              <div className="mb-2 text-blueGray-600">
                <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                {profileData[props.language].education}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="md:mt-0 mt-6 md:pt-32 text-center">
            <div className="flex flex-wrap justify-center align-middle">
              <div className="w-full lg:w-9/12 px-4">
                <h1 className="text-2xl font-semibold pb-4">{profileData[props.language].section2Title}</h1>
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                {profileData[props.language].section2Text[0].children[0].text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
