import React, { Component } from 'react';

import colors from 'style/colors';
import sizing from 'style/sizing';

import ContactList from 'pages/contact-list/ContactList';
import ContactDetails from 'pages/contact-details/ContactDetails';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactId: null
    };
  }

  onContactIdUpdate = (contactId) => {
    this.setState({
      contactId
    });
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: colors.primaryBackGround,
          width: sizing.appWidth,
          height: sizing.appHeight,
          padding: sizing.parentContainerPadding
        }}
      >
        { this.state.contactId ?
          <ContactDetails contactId={this.state.contactId} onContactIdUpdate={this.onContactIdUpdate} /> :
          <ContactList onContactIdUpdate={this.onContactIdUpdate} />
        }
      </div>
    );
  }
}

export default App;
