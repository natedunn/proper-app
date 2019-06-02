// Deps
import React, { Component } from 'react';
// Components
import Head from 'component/head';
import Nav from 'component/nav';
import Search from 'component/search';
import Queue from 'component/queue';
// Theme
import styled from 'styled-components';
import tw from 'tailwindcss/defaultTheme';
// Imported
import { getData } from '../utils/fetch';
import { makeZipFile } from '../utils/helper';

// ? Does this belong here?
const pageInfo = {
  title: 'Proper | Generate Your Scripts',
};

const Container = styled.div`
  max-width: ${tw.maxWidth['4xl']};
  margin: 0 auto;
`;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      origin: {},
      queue: [],
      results: [],
    };
    this.deleteItem = this.deleteItem.bind(this);
  }

  resetResults = () => {
    console.log('Reset results?');
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
    this.setState({ term: value.trim() });
    if (!value.trim().length) {
      this.resetResults();
    } else {
      this.resetResults();
      getData(value.trim(), origin.id).then(results => {
        if (results && results.length) this.setState({ results });
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

  createZip = manifest => {
    const { queue } = this.state;
    const itemNames = [];
    queue.forEach(function(item) {
      const { name } = item;
      itemNames.push(name);
    });
    makeZipFile(manifest, itemNames.join('\n'));
  };

  render() {
    const { queue } = this.state;
    return (
      <Container>
        <Head title={pageInfo.title} />
        <Nav />
        <h1 className="text-4xl font-light text-center mt-16 mb-6">
          Work with your machine, not against it
        </h1>
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
          createZip={this.createZip}
        />
      </Container>
    );
  }
}
