import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QueueItem from 'component/queueItem';
import Button from 'component/button';

// Empty queue render
function EmptyQueue() {
  return (
    <div className="bg-white px-6 py-6 text-center">
      <span className="text-2xl text-gray-500">No items added yet.</span>
    </div>
  );
}

// Active queue render
function ActiveQueue(props) {
  const { items, deleteItem, createZip } = props;
  return (
    <div className="bg-white">
      <div className="px-6 py-6 border-b border-gray-400">
        <span className="text-xl font-bold">Queued Items</span>
      </div>
      <ul className="inline-block w-full">
        {items.map((item, index) => (
          <QueueItem
            key={index}
            item={item}
            index={index}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
      <div className="px-6 py-6 text-right flex justify-end items-center">
        <Button
          className="inline-flex items-center"
          onClick={() => {
            createZip('brews');
          }}
          disabled={!items.length}
        >
          <svg
            className="fill-current w-4 h-4 mr-2"
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
}

// Conditionally render queues
function RenderQueue(props) {
  const { items } = props;
  // if (!items.length) return <EmptyQueue />;
  if (items.length) return <ActiveQueue {...props} />;
  return null;
}

// Class
export default class Queue extends Component {
  render() {
    const { items, deleteItem, createZip } = this.props;
    return (
      <RenderQueue
        items={items}
        deleteItem={deleteItem}
        createZip={createZip}
      />
    );
  }
}

RenderQueue.propTypes = {
  items: PropTypes.array,
};
ActiveQueue.propTypes = {
  items: PropTypes.array,
  deleteItem: PropTypes.func,
  createZip: PropTypes.func,
};
Queue.propTypes = {
  items: PropTypes.array,
  deleteItem: PropTypes.func,
  createZip: PropTypes.func,
};
