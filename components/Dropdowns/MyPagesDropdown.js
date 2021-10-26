import React, { useEffect } from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";
import document from "next/document";


const MyPagesDropdown = (props, state) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const [dropdownPopoverShow2, setDropdownPopoverShow2] = React.useState(false);
  const [dropdownPopoverShow3, setDropdownPopoverShow3] = React.useState(false);

  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const btnDropdownRef2 = React.createRef();
  const popoverDropdownRef2 = React.createRef();
  const btnDropdownRef3 = React.createRef();
  const popoverDropdownRef3 = React.createRef();


  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    closeAllPopovers();
    setDropdownPopoverShow(true);
  };
  const openDropdownPopover2 = () => {
    createPopper(btnDropdownRef2.current, popoverDropdownRef2.current, {
      placement: "bottom-start",
    });
    closeAllPopovers();
    setDropdownPopoverShow2(true);
  };
  const openDropdownPopover3 = () => {
    createPopper(btnDropdownRef3.current, popoverDropdownRef3.current, {
      placement: "bottom-start",
    });
    closeAllPopovers();
    setDropdownPopoverShow3(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const closeDropdownPopover2 = () => {
    setDropdownPopoverShow2(false);
  };
  const closeDropdownPopover3 = () => {
    setDropdownPopoverShow3(false);
  };

  const closeAllPopovers = () => {
    setDropdownPopoverShow(false);
    setDropdownPopoverShow2(false);
    setDropdownPopoverShow3(false);
  };

  // close the popovers whenever the "menu button in parent component is pressed to refresh"
  useEffect(() => {
    closeAllPopovers()
  }, [props.refresh]);

  return (
    <>

      <a
        className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        id="treatment"
        href="/ourhospital"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        {props.navBarQueryData[props.language].menu1Title}
      </a>


      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >

        <Link key= {props.navBarQueryData[props.language].menu1item1} href="/ourhospital" activeClassName="bg-red-400">
          <a
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 "
            }
          >
            <button className={"hover:bg-red-700"}>{props.navBarQueryData[props.language].menu1item1}</button>
          </a>
        </Link>
        <Link key={props.navBarQueryData[props.language].menu1item2} href="/ourstaff">
          <a
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            {props.navBarQueryData[props.language].menu1item2}
          </a>
        </Link>
      </div>

      <a
        className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        id="treatment"
        href=""
        ref={btnDropdownRef2}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow2 ? closeDropdownPopover2() : openDropdownPopover2();
        }}
      >
        {props.navBarQueryData[props.language].menu2Title}
      </a>
      <div
        ref={popoverDropdownRef2}
        className={
          (dropdownPopoverShow2 ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >

        <Link key= {props.navBarQueryData[props.language].menu2item1} href="/ourservices#section1">
          <a
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            {props.navBarQueryData[props.language].menu2item1}
          </a>
        </Link>
        <Link key={props.navBarQueryData[props.language].menu2item2} href="/ourservices#section2">
          <a
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            {props.navBarQueryData[props.language].menu2item2}
          </a>
        </Link>
        <Link key={props.navBarQueryData[props.language].menu2item3} href="/ourservices#section3">
          <a
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            {props.navBarQueryData[props.language].menu2item3}
          </a>
        </Link>
        <Link key={props.navBarQueryData[props.language].menu2item4} href="/ourservices#section4">
          <a
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            {props.navBarQueryData[props.language].menu2item4}
          </a>
        </Link>
      </div>






      <a
        className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        id="treatment"
        href=""
        ref={btnDropdownRef3}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow3 ? closeDropdownPopover3() : openDropdownPopover3();
        }}
      >
        {props.navBarQueryData[props.language].menu3Title}
      </a>
      <div
        ref={popoverDropdownRef3}
        className={
          (dropdownPopoverShow3 ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <Link key={props.navBarQueryData[props.language].menu3item1} href="appointment">
          <a
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            {props.navBarQueryData[props.language].menu3item1}
          </a>
        </Link>
        {/* <Link key={props.navBarQueryData[props.language].menu3item2} href="/mypages/treatment">
          <a
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            {props.navBarQueryData[props.language].menu3item2}
          </a>
        </Link>
        <Link key={props.navBarQueryData[props.language].menu3item3} href="/mypages/treatment">
          <a
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            {props.navBarQueryData[props.language].menu3item3}
          </a>
        </Link> */}
      </div>
    </>
  );
};

export default MyPagesDropdown;
