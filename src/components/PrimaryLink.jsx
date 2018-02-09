import React from 'react';
import PropTypes from 'prop-types';

import colors from 'style/colors';

const PrimaryLink = (props) => (
  <button
    style={{
      color: colors.primary,
      cursor: 'pointer',
      border: 'none',
      ...props.style
    }}
    onClick={props.onClick}
    onKeyDown={props.onClick}
  >
    {props.label}
  </button>
);

PrimaryLink.propTypes = {
  style: PropTypes.shape({}),
  onClick: PropTypes.func,
  label: PropTypes.string
};

PrimaryLink.defaultProps = {
  style: {},
  onClick: null,
  label: ''
};

export default PrimaryLink;
