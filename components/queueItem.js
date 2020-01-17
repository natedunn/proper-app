import React, { Component } from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from 'styled-components';

const Version = styled('div')`
  ${tw`inline-block px-2 py-1 rounded bg-gray-300 text-xs mr-3`}
`;

export default class QueueItem extends Component {

  render () {
    const { item, index, deleteItem } = this.props;
    return (
      <li className="py-6 px-8 mt-2 flex items-center justify-between rounded border border-gray-400 bg-white">
        <div className="inline-block mr-3">{item.name}</div>
        <div className="flex items-center">
          <div className="inline-block px-2 py-1 rounded bg-gray-400 text-xs mr-3">
            {item.origin.name}
          </div>
          <Version css={item.ver ? null : tw`hidden`}>
            {item.ver ? `v${item.ver}` : null}
          </Version>
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
