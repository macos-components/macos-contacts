import React from 'react';

import ordering from 'style/ordering';

const containerStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  left: '0px',
  top: '0px',
  backgroundColor: 'rgba(0, 0, 0, .3)',
  zIndex: ordering.modalZindex
};

const ModalScreen = (props) => (
  props.isActive && (<div
    className="modal-screen"
    style={containerStyle}
  />)
);

export default ModalScreen;
