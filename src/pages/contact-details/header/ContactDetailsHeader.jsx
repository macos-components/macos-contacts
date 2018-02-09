import React from 'react';
import PropTypes from 'prop-types';

import PrimaryLink from 'components/PrimaryLink';
import sizing from 'style/sizing';

const containerStyle = {
  ...sizing.flex
};

const itemStyle = {
  flexGrow: 0
};

const ContactDetailsHeader = (props) => (
  <div
    className="contact-list-header"
  >
    <div style={containerStyle}>
      <PrimaryLink
        label="< Contacts"
        style={itemStyle}
        onClick={props.onBackClick}
      />
      <PrimaryLink
        label="Edit"
      />
    </div>
  </div>
);

ContactDetailsHeader.propTypes = {
  onBackClick: PropTypes.func
};

ContactDetailsHeader.defaultProps = {
  onBackClick: null
};

export default ContactDetailsHeader;
