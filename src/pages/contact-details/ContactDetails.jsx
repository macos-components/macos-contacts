import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContactDetailsHeader from 'pages/contact-details/header/ContactDetailsHeader';
import ProfileImage from 'components/ProfileImage';
import PrimaryLink from 'components/PrimaryLink';
import RequestUtil from 'utils/RequestUtil';

class ContactDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: null
    };
  }

  componentWillMount() {
    const request = {
      url: `contact-list/${this.props.contactId}`,
      method: 'get'
    };

    RequestUtil.makeRequest(request).then((response) => {
      this.setState({ contact: response.data });
    });
  }

  componentWillReceiveProps(nextProps) {
    const request = {
      url: `contact-list/${nextProps.contactId}`,
      method: 'get'
    };

    RequestUtil.makeRequest(request).then((response) => {
      this.setState({ contact: response.data });
    });
  }

  onBackClick = () => {
    this.setState({
      contact: null
    });

    this.props.onContactIdUpdate(null);
  }

  render() {
    return this.state.contact && (
      <div
        className="contact-details"
        style={{
          width: '100%',
          height: '100%',
          position: 'relative'
        }}
      >
        <ContactDetailsHeader
          onBackClick={this.onBackClick}
        />
        <div>
          <ProfileImage src={this.state.contact.image} style={{ margin: '0 auto' }} />
          <div style={{ margin: '0 auto', fontSize: '22px', textAlign: 'center' }}>
            {this.state.contact.name}
          </div>
        </div>
        <div style={{ fontSize: '12px' }}>Mobile:</div>
        <div>
          <PrimaryLink label={this.state.contact.number} />
        </div>
      </div>
    );
  }
}

ContactDetails.propTypes = {
  contactId: PropTypes.string.isRequired,
  onContactIdUpdate: PropTypes.func
};

ContactDetails.defaultProps = {
  onContactIdUpdate: null
};

export default ContactDetails;
