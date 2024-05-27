import { Component } from 'react';
import { GlobalStyled } from './GlobalStyled';
import { Layout } from './Layout/Layout';

import { PhoneForm } from './PhoneForm/PhoneForm';
import { Contacts } from './Contacts/Contacts';
import initiatContacts from '../data.json';

export class App extends Component {
  state = {
    contacts: initiatContacts,
  };

  addPhoneNumber = newPhoneNumber => {
    this.setState(prewState => ({
      contacts: [...prewState.contacts, newPhoneNumber],
    }));
  };

  deleteNumber = numberId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => numberId !== contact.id),
    }));
  };

  render() {
    return (
      <Layout>
        <PhoneForm onSave={this.addPhoneNumber} />
        <Contacts
          ContactList={this.state.contacts}
          onDelete={this.deleteNumber}
        />
        <GlobalStyled />
      </Layout>
    );
  }
}
