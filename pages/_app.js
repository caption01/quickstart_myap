import React from "react";
import App from "next/app";
import { Provider } from "react-redux";

import store from "../redux/store";

import "antd/dist/antd.css";

class Myapp extends App {
  static getInitialProps = async appContext => {
    const pageProps = await App.getInitialProps(appContext);
    return { ...pageProps };
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default Myapp;
