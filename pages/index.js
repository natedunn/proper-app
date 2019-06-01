import React, { Component } from 'react';
// Components
import Head from 'component/head';
import Nav from 'component/nav';
import Search from 'component/search';
// Theme
import styled from 'styled-components';
import tw from 'tailwindcss/defaultTheme';

// ? Does this belong here?
const pageInfo = {
  title: 'Proper | Generate Your Scripts',
};

const Container = styled.div`
  max-width: ${tw.maxWidth['4xl']};
  margin: 0 auto;
`;

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Head title={pageInfo.title} />
        <Nav />
        <h1 className="text-4xl font-light text-center mt-16 mb-6">
          Work with your machine, not against it
        </h1>
        <Search />
      </Container>
    )
  }
}
