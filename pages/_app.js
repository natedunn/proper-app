/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App, { Container } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import tw from 'tailwindcss/defaultTheme';
import 'style/main.css';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    const GlobalStyle = createGlobalStyle`
      html, body {
        height: 100%;
      }
      body {
        background: #f7f9fc;
      }
    `;

    return (
      <div>
        <GlobalStyle />
        <Component {...pageProps} />
      </div>
    );
  }
}

export default MyApp;
