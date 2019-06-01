/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { children, type, disabled, className, color, onClick } = this.props;
    const buttonColor = () => {
      if (color === `purple`)
        return `bg-purple-700 text-white ${
          !disabled ? `hover:bg-purple-600` : null
          }`;
      if (color === `lightPurple`)
        return `bg-white text-purple-800  ${
          !disabled ? `hover:bg-purple-200` : null
          }`;
      if (color === `danger`)
        return `bg-red-200 text-red-700  ${
          !disabled ? `hover:bg-red-300` : null
          }`;
    };

    return (
      <button
        className={`font-bold py-2 px-4 rounded inline-flex items-center ${buttonColor()} ${className}`}
        type={type}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

Button.defaultProps = {
  type: 'button',
  color: 'purple',
  disabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
