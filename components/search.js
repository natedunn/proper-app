import React, { Component } from 'react';
import axios from 'axios';
import Downshift from 'downshift';
import Button from 'component/button';
import Label from 'component/label';
import Queue from 'component/queue';
import { getData } from '../utils/fetch';
import { makeZipFile } from '../utils/helper';

export default class Search extends Component {
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
    const { term, origin } = this.state;
    const { value } = event.target;
    this.setState({ term: value });
    console.log('Changed.');
    if (value.trim()) {
      console.log('Not empty.');
      getData(term, origin.id).then(results => {
        this.setState({ results });
      });
    } else {
      console.log('Empty.');
      this.resetResults();
    }
  };

  onSearchSubmit = event => {
    event.preventDefault();
    this.resetResults();
    this.resetTerm();
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
          origin: origin.name,
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
    const { term, results, queue, origin } = this.state;
    return (
      <>
        <form
          className="flex items-end bg-white px-8 py-8"
          onSubmit={this.onSearchSubmit}
        >
          <div className="inline-block w-40 mr-3">
            <Label>1. Choose Origin</Label>
            <div className="relative">
              <select
                className="inline-block w-full appearance-none border-2 border-gray-300 hover:border-purple-700 rounded py-2 px-4 pr-8 leading-tight focus:outline-none focus:shadow-outline cursor-pointer"
                onChange={this.onOriginChange}
              >
                <option defaultValue="null">Choose Origin</option>
                <option value="npm">NPM</option>
                <option value="composer">Composer</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-purple">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex-auto mr-3">
            <Downshift
              id="search-input"
              onChange={this.addToQueue}
              itemToString={item => (item ? item.title : '')}
              disabled="disabled"
            >
              {({
                getInputProps,
                getItemProps,
                getLabelProps,
                getMenuProps,
                isOpen,
                inputValue,
                highlightedIndex,
                selectedItem,
              }) => (
                <div className="relative">
                  <Label {...getLabelProps()}>2. Search</Label>
                  <input
                    className="w-full appearance-none border-2 border-gray-500 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-purple-500"
                    value={term}
                    placeholder={`Search ${origin.name || ''}`}
                    {...getInputProps({
                      onChange: this.handleSearchChange,
                      disabled: !origin.id,
                    })}
                  />
                  <ul
                    {...getMenuProps()}
                    className={
                      isOpen && results.length
                        ? `absolute w-full py-4 px-4 bg-white shadow-lg mt-4`
                        : null
                    }
                  >
                    {isOpen && results.length
                      ? results
                          .filter(
                            item =>
                              !inputValue ||
                              item.name
                                .toLowerCase()
                                .includes(inputValue.toLowerCase())
                          )
                          .slice(0, 5)
                          .map((item, index) => (
                            <li
                              {...getItemProps({ key: index, index, item })}
                              className={`px-4 py-4 border-b border-gray-300 cursor-pointer rounded ${
                                highlightedIndex === index
                                  ? 'bg-gray-300'
                                  : null
                              } ${selectedItem === item ? 'font-bold' : null}`}
                            >
                              <div className="flex w-full justify-between">
                                {item.name}
                                <span className="inline-block px-2 py-1 rounded bg-gray-100 text-xs mr-3">
                                  {item.origin}
                                </span>
                              </div>
                            </li>
                          ))
                      : null}
                  </ul>
                </div>
              )}
            </Downshift>
          </div>
        </form>
        <Queue
          items={queue}
          deleteItem={this.deleteItem}
          createZip={this.createZip}
        />
      </>
    );
  }
}
