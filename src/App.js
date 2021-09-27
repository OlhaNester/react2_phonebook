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
    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
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

  render() {
    const normolizeFilter = this.state.filter.toLowerCase();
    const filteredContactList = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normolizeFilter)
    );
    return (
      <div className="App">
        <Form onSubmit={this.addContact} />
        <ContactList
          contacts={filteredContactList}
          onDelete={this.deleteContact}
        />
        <Filter value={this.state.filter} onChange={this.filterContact} />
      </div>
    );
  }
}

export default App;
