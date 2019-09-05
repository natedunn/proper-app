/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
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
        background-color: whitesmoke;
      }
    `;

    return (
      <div>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=PT+Sans:400,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </div>
    );
  }
}

export default MyApp;
