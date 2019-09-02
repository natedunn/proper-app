// Deps
import React, { Component, Fragment } from 'react';
// Components
import Head from 'component/head';
import Nav from 'component/nav';
import Search from 'component/search';
import Queue from 'component/queue';
import Footer from 'component/footer';
import Container from 'layout/container';
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

  render () {
    const { queue } = this.state;
    return (
      <>
        <Head title={pageInfo.title} />
        <Nav />
        <Container>
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
