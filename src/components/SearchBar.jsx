import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PrimaryLink from 'components/PrimaryLink';

import colors from 'style/colors';
import sizing from 'style/sizing';
import ordering from 'style/ordering';

const containerStyle = {
  ...sizing.flex,
  padding: '10px 15px 10px',
  zIndex: ordering.searchBarZindex,
  position: 'relative',
  backgroundColor: colors.searchBarBackground
};

const itemStyle = {
  ...sizing.flexBox,
  borderRadius: '3px',
  border: '1px solid',
  borderColor: colors.inputBorder,
  padding: sizing.inputPadding
};

const inActiveItemStyle = {
  ...itemStyle,
  textAlign: 'center'
};

const activeItemStyle = {
  ...itemStyle,
  textAlign: 'left',
  outline: 'none'
};

const linkStyle = {
  ...sizing.flexBox,
  marginLeft: '10px'
};

class SearchBar extends Component {
  onFocus = () => {
    if (this.props.onActiveChange) {
      this.props.onActiveChange(true);
    }
  }

  onBlur = () => {
    if (this.props.onActiveChange) {
      this.props.onActiveChange(false);
    }
  }

  render() {
    return (
      <div className="search-bar" style={containerStyle}>
        <input
          style={this.props.isActive ? activeItemStyle : inActiveItemStyle}
          type="text"
          placeholder={this.props.placeholder}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onKeyUp={this.props.onKeyUp || null}
        />
        { this.props.isActive ? (
          <div>
            <PrimaryLink label="Cancel" style={linkStyle} />
          </div>
        ) : null }
      </div>
    );
  }
}

SearchBar.propTypes = {
  onActiveChange: PropTypes.func,
  isActive: PropTypes.bool,
  placeholder: PropTypes.string,
  onKeyUp: PropTypes.func
};

SearchBar.defaultProps = {
  onActiveChange: null,
  isActive: false,
  placeholder: 'Search',
  onKeyUp: null
};

export default SearchBar;
