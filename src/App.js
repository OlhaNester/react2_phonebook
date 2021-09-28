import { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import shortid from "shortid";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  // formHandleSubmit = (data) => {
  //   console.log(data);
  // };

  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };
    if (this.state.contacts.map(contact=> contact.name).includes(contact.name)) {
       alert(`${name} is already in contacts`)
    } else {this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));}
    
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  filterContact = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  getfilteredContactList = () => {
    const { filter, contacts } = this.state;
    const normolizeFilter = filter.toLowerCase();
     return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normolizeFilter)
    );
  };

  render() {
    const filteredContactList = this.getfilteredContactList();
        return (
      <div className="App">
        <h1> Phonebook </h1>
        <Form onSubmit={this.addContact} />
        <h2> Contacts </h2>
        <Filter value={this.state.filter} onChange={this.filterContact} />
        <ContactList
          contacts={filteredContactList}
          onDelete={this.deleteContact}
        />
       
      </div>
    );
  }
}

export default App;
