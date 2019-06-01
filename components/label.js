// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

const Label = props => {
  const { children } = props;
  return (
    <span className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
      {children}
    </span>
  );
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Label;
