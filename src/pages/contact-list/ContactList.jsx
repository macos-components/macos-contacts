import React, { Component } from 'react';
import PropTypes from 'prop-types';

import colors from 'style/colors';

import ContactListHeader from 'pages/contact-list/header/ContactListHeader';
import SearchBar from 'components/SearchBar';
import ModalScreen from 'components/ModalScreen';
import ProfileBar from 'components/ProfileBar';

import RequestUtil from 'utils/RequestUtil';

const contactListItemStyle = {
  borderBottom: '1px solid',
  borderBottomColor: colors.inputBorder,
  padding: '10px 0',
  cursor: 'pointer'
};

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchBarActive: false,
      profile: null,
      contactList: []
    };
  }

  componentWillMount() {
    let request = {
      url: 'contact-list',
      method: 'get'
    };

    RequestUtil.makeRequest(request).then((response) => {
      this.fullContactList = response.data;
      this.setState({ contactList: response.data });
    });

    request = {
      url: 'profile',
      method: 'get'
    };

    RequestUtil.makeRequest(request).then((response) => {
      this.setState({ profile: response.data });
    });
  }

  onContactClick(id) {
    this.props.onContactIdUpdate(id);
  }

  onSearchBarActiveChange = (isSearchBarActive) => {
    const newState = {
      isSearchBarActive
    };

    this.setState(newState);
  }

  onSearchBarKeyUp = (event) => {
    if (event.target.value.length > 2) {
      const newContactList = this.state.contactList.filter((contact) => (
        contact.number.indexOf(event.target.value) >= 0
        || contact.name.toLowerCase().indexOf(event.target.value) >= 0
      ));

      this.setState({
        contactList: newContactList
      });
    } else {
      this.setState({
        contactList: this.fullContactList
      });
    }
  }

  renderContactList = () => (
    this.state.contactList && this.state.contactList.map((contact) => (
      <div
        className="contact-list-item"
        style={contactListItemStyle}
        key={contact.id}
        onClick={() => this.onContactClick(contact.id)}
        onKeyDown={() => this.onContactClick(contact.id)}
      >
        {contact.name}
      </div>
    ))
  );

  render() {
    return (
      <div
        className="contact-list"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%'
        }}
      >
        <div>
          <ModalScreen isActive={this.state.isSearchBarActive} />
          { !this.state.isSearchBarActive ? <ContactListHeader /> : null }
          <SearchBar
            isActive={this.state.isSearchBarActive}
            onActiveChange={this.onSearchBarActiveChange}
            onKeyUp={this.onSearchBarKeyUp}
          />
          { this.state.profile && <ProfileBar profile={this.state.profile} /> }
        </div>
        <div
          className="contact-list-items"
          style={{
            flexGrow: '1',
            overflowY: 'scroll'
          }}
        >
          {this.renderContactList()}
        </div>
      </div>
    );
  }
}

ContactList.propTypes = {
  onContactIdUpdate: PropTypes.func
};

ContactList.defaultProps = {
  onContactIdUpdate: null
};

export default ContactList;
