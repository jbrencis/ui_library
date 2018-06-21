import React from 'react';
import PropTypes from 'prop-types';

const MountainRange = ({ color, size, ...otherProps }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width={size}
    height={size}
    viewBox="0 0 561 561"
    fill={color}
    {...otherProps}
  >
    <g>
      <g id="terrain">
        <path d="M331.5,127.5L234.6,255l73.95,96.9l-40.8,30.6C224.4,326.4,153,229.5,153,229.5L0,433.5h561L331.5,127.5z" />
      </g>
    </g>
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
  </svg>
);

MountainRange.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MountainRange.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default MountainRange;
