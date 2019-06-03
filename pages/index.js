// Deps
import React, { Component, Fragment } from 'react';
import Link from 'next/link';
// Components
import Head from 'component/head';
import Nav from 'component/nav';
import Search from 'component/search';
import Queue from 'component/queue';
import Footer from 'component/footer';
// Theme
import styled from 'styled-components';
import tw from 'tailwindcss/defaultTheme';
// Imported
import { getData } from '../utils/fetch';
import { generateZip } from '../utils/helper';

// ? Does this belong here?
const pageInfo = {
  title: 'Proper | Generate Your Scripts',
};

const Container = styled.div`
  max-width: ${tw.maxWidth['4xl']};
  margin-left: auto;
  margin-right: auto;
`;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      origin: {},
      queue: [],
      results: [],
      loading: false,
    };
    this.deleteItem = this.deleteItem.bind(this);
  }

  resetResults = () => {
    this.setState({
      results: [],
    });
  };

  resetTerm = () => {
    this.setState({
      term: '',
    });
  };

  resetQueue = () => {
    this.setState({
      queue: [],
    });
  };

  onOriginChange = event => {
    const { target } = event;
    const selectedValue = target.value;
    const selectedText = target.options[target.selectedIndex].text;
    if (selectedValue) {
      this.setState({
        origin: {
          name: selectedText,
          id: selectedValue,
        },
      });
    }
    this.resetResults();
    this.resetTerm();
  };

  handleSearchChange = event => {
    const { origin } = this.state;
    const { value } = event.target;
    this.setState({ term: value.trim(), loading: true });
    if (!value.trim().length) {
      this.resetResults();
    } else {
      this.resetResults();
      getData(value.trim(), origin.id).then(results => {
        if (results && results.length)
          this.setState({ results, loading: false });
      });
    }
  };

  addToQueue = item => {
    const { origin, queue } = this.state;
    const { name, ver } = item;
    this.setState({
      queue: [
        ...queue,
        {
          ...queue[name],
          name,
          origin,
          ver,
        },
      ],
    });
    this.setState({
      term: '',
      results: [],
    });
  };

  deleteItem = key => {
    const { queue } = this.state;
    this.setState({
      queue: queue.filter((_, i) => i !== key),
    });
  };

  render() {
    const { queue } = this.state;
    return (
      <>
        <Head title={pageInfo.title} />
        <Nav />
        <Container>
          <div className="text-center mt-16 mb-12">
            <h1 className="text-4xl font-medium mb-2">
              Work with your machine, not against it.
            </h1>
            <div>
              Get started by creating your script below or directly{' '}
              <Link href="https://github.com/useproper/proper">
                <a className="text-purple-600 tracking-wide hover:text-purple-800 border-b-2 border-purple-200 hover:border-purple-400">
                  forking the repo
                </a>
              </Link>
              .
            </div>
          </div>

          <Search
            {...this.state}
            addToQueue={this.addToQueue}
            handleSearchChange={this.handleSearchChange}
            handleSearchKeyDown={this.handleSearchKeyDown}
            onOriginChange={this.onOriginChange}
          />
          <Queue
            items={queue}
            deleteItem={this.deleteItem}
            generateZip={generateZip}
          />
          <Footer />
        </Container>
      </>
    );
  }
}
