import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QueueItem from 'component/queueItem';
import Button from 'component/button';
import tw from 'tailwind.macro';
import { H2 } from 'component/heading';

export default class Queue extends Component {
  render () {
    const { items, deleteItem, generateZip } = this.props;
    if (items.length)
      return (
        <div css={tw`mt-8 px-8 py-8 rounded border border-purple-300 bg-purple-100`}>
          <H2>Queued Items</H2>
          <ul css={tw`inline-block w-full`}>
            {items.map((item, index) => (
              <QueueItem
                key={index}
                item={item}
                index={index}
                deleteItem={deleteItem}
              />
            ))}
          </ul>
          <div css={tw`py-8 text-right flex justify-end items-center`}>
            <Button
              css={tw`inline-flex items-center`}
              onClick={() => {
                generateZip(items);
              }}
              disabled={!items.length}
            >
              <svg
                css={tw`fill-current w-4 h-4 mr-2`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download</span>
            </Button>
          </div>
        </div>
      );
    return null;
  }
}

Queue.propTypes = {
  items: PropTypes.array,
  deleteItem: PropTypes.func,
  generateZip: PropTypes.func,
};
