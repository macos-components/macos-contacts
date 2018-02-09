import React from 'react';

import PrimaryLink from 'components/PrimaryLink';
import sizing from 'style/sizing';

const containerStyle = {
  ...sizing.flex,
  padding: sizing.containerPadding,
  position: 'absolute',
  left: '0',
  top: '0',
  width: '100%',
  zIndex: 2
};

const itemStyle = {
  flexGrow: 0
};

const ContactListHeader = () => (
  <div
    className="contact-list-header"
    style={{
      position: 'relative'
    }}
  >
    <div style={containerStyle}>
      <PrimaryLink
        label="Groups"
        style={itemStyle}
      />
      <PrimaryLink
        label="+"
      />
    </div>
    <div style={{
 ...containerStyle, position: 'relative', justifyContent: 'center', zIndex: 1
}}
    >
      <span>Contacts</span>
    </div>
  </div>
);

export default ContactListHeader;
