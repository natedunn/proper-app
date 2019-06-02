import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class QueueItem extends Component {
  render() {
    const { item, index, deleteItem } = this.props;
    return (
      <li className="py-8 px-8 flex items-center justify-between border-b border-gray-400 bg-white">
        <div className="inline-block mr-3">
          <a
            className="text-purple-700 hover:text-purple-500 border-b border-purple-200 hover:border-purple-500"
            href="/"
          >
            {item.name}
          </a>
        </div>
        <div className="flex items-center">
          <div className="inline-block px-2 py-1 rounded bg-gray-400 text-xs mr-3">
            {item.origin.name}
          </div>
          {/* <div className="inline-block font-bold px-2 py-1 rounded bg-gray-300 text-xs mr-3">
            {item.ver ? `v ${item.ver}` : null}
          </div> */}
          <button
            className="bg-red-200 text-red-500 hover:bg-red-500 hover:text-white font-bold py-1 px-2 text-xs rounded flex items-center"
            onClick={() => {
              deleteItem(index);
            }}
            type="button"
          >
            ×
          </button>
        </div>
      </li>
    );
  }
}

QueueItem.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  deleteItem: PropTypes.func,
};
