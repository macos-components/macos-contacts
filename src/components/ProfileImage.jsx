import React from 'react';
import PropTypes from 'prop-types';

import sizing from 'style/sizing';

const defaultSrc = 'https://cdn0.iconfinder.com/data/icons/superuser-web-kit/512/686909-user_people_man_human_head_person-512.png';

const containerStyle = {
  width: sizing.profileImageWidth,
  height: sizing.profileImageHeight
};

const itemStyle = {
  borderRadius: '50%',
  width: '100%',
  height: '100%'
};

const ProfileImage = (props) => (
  <div className="profile-image" style={{ ...containerStyle, ...props.style }}>
    <img
      alt="profile"
      style={itemStyle}
      src={props.src}
    />
  </div>
);

ProfileImage.propTypes = {
  src: PropTypes.string,
  style: PropTypes.shape()
};

ProfileImage.defaultProps = {
  src: defaultSrc,
  style: null
};

export default ProfileImage;
