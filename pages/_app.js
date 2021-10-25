import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import PageChange from "components/PageChange/PageChange.js";
import LanguageContext from "../lib/MyContext.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/tailwind.css";
import "styles/mycss.css";


// Router.events.on("routeChangeStart", (url) => {
//   console.log(`Loading: ${url}`);
//   document.body.classList.add("body-page-transition");
//   ReactDOM.render(
//     <PageChange path={url} />,
//     document.getElementById("page-transition")
//   );
// });
// Router.events.on("routeChangeComplete", () => {
//   ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
//   document.body.classList.remove("body-page-transition");
// });
// Router.events.on("routeChangeError", () => {
//   ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
//   document.body.classList.remove("body-page-transition");
// });

export default class MyApp extends App {
  state = {
    language: 1,
    backgroundColour: 'bg-emerald-500',
    textColour: 'text-emerald-500',
  };

  setLanguage = () => {
    (this.state.language === 1) ? this.setState({language:0}): this.setState({language:1});
  }

  setBackgroundColour = (colour) => {
    if (colour) this.setState({backgroundColour:colour});
  }

  setTextColour = (colour) => {
    if (colour) this.setState({textColour:colour});
  }

  componentDidMount() {

    let comment = document.createComment(`

=========================================================
* Notus NextJS - v1.1.0 based on Tailwind Starter Kit by Creative Tim
=========================================================

* Product Page: https://www.creative-tim.com/product/notus-nextjs
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md)

* Tailwind Starter Kit Page: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

`);
    document.insertBefore(comment, document.documentElement);
  }
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);     
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>{(this.state.language==0) ? 'Evergreen Animal Hospital' : '늘푸른 동물병원'}</title>
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBugbEUi34hmQQ2q7LMwhgbgO1_2w1dKJg"></script>
        </Head>
        <Layout>
        <LanguageContext.Provider value={{ language: this.state.language, setLanguage:this.setLanguage, backgroundColour:this.state.backgroundColour, setBackgroundColour:this.setBackgroundColour, textColour:this.state.textColour,setTextColour:this.setTextColour }}>
          <Component {...pageProps} />
          </LanguageContext.Provider>
        </Layout>
      </React.Fragment>
    );
  }
}
