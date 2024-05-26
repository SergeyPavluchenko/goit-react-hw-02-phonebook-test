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
  DeleteNumber = numberId => {
    console.log(numberId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => numberId !== contact.id),
    }));
  };
  render() {
    return (
      <Layout>
        <PhoneForm />
        <Contacts
          ContactList={this.state.contacts}
          onDelete={this.DeleteNumber}
        />
        <GlobalStyled />
      </Layout>
    );
  }
}
