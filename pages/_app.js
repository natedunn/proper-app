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
      body {
        background-color: ${tw.colors.gray[300]};
      }
    `;

    return (
      <Container>
        <GlobalStyle />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
