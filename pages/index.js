// Deps
import React, { Component } from 'react';
import tw from 'tailwind.macro';
// Components
import Head from 'component/head';
import Nav from 'component/nav';
import Search from 'component/search';
import Queue from 'component/queue';
import Footer from 'component/footer';
import Container from 'layout/container';
import { H1 } from 'component/heading';
// Imported
import { getData } from '../utils/fetch';
import { generateZip } from '../utils/helper';

const pageInfo = {
  title: 'Proper | Build',
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      origin: {
        id: 'NPM',
        name: 'NPM',
      },
      queue: [],
      results: [],
      loading: false,
    };
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount () {
    const data = localStorage.getItem('_queue');
    if (data) {
      this.setState({
        queue: JSON.parse(data),
      });
    }
  }

  componentDidUpdate () {
    const { queue } = this.state;
    localStorage.setItem('_queue', JSON.stringify(queue));
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
    this.setState({ term: value, loading: true });
    if (!value.length) {
      this.resetResults();
    } else {
      this.resetResults();
      getData(value, origin.id).then(results => {
        if (results && results.length)
          this.setState({ results, loading: false });
      });
    }
  };

  addToQueue = item => {
    const { origin, queue } = this.state;
    const { name, ver, id } = item;
    this.setState({
      queue: [
        ...queue,
        {
          ...queue[name],
          name,
          id,
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

  render () {
    const { queue } = this.state;
    return (
      <>
        <Head title={pageInfo.title} />
        <Nav />
        <Container>
          <div css={tw`py-12 px-12 bg-purple-700 rounded`}>
            <H1 css={tw`mb-10 mt-10 font-bold text-white text-5xl`}>
              Get your machine up <br />& running with Proper
            </H1>
            <Search
              {...this.state}
              addToQueue={this.addToQueue}
              handleSearchChange={this.handleSearchChange}
              handleSearchKeyDown={this.handleSearchKeyDown}
              onOriginChange={this.onOriginChange}
              css={tw`border-t border-purple-500 pt-5`}
            />
          </div>
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
