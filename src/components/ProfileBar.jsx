import React from 'react';
import PropTypes from 'prop-types';

import sizing from 'style/sizing';
import colors from 'style/colors';

import ProfileImage from 'components/ProfileImage';

const containerStyle = {
  ...sizing.flex,
  padding: sizing.containerPadding,
  justifyContent: 'flex-start'
};

const ProfileBar = (props) => (
  <div style={containerStyle} className="profile-bar">
    <ProfileImage src={props.profile.image} />
    <div style={{ marginLeft: '10px' }}>
      <div>{props.profile.name}</div>
      <div style={{ fontSize: '12px', color: colors.secondary }}>{`My Number: ${props.profile.number}`}</div>
    </div>
  </div>
);

ProfileBar.propTypes = {
  profile: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string
  })
};

ProfileBar.defaultProps = {
  profile: null
};

export default ProfileBar;
