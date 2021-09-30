import { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import shortid from "shortid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  // formHandleSubmit = (data) => {
  //   console.log(data);
  // };

  addContact = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };
    if (
      // несколько вариантов сравнения и записи новых имен
      //this.state.contacts.map((contact) => contact.name).includes(contact.name)
      this.state.contacts.find(
        (contact) => contact.name === newContact.name
      ) !== undefined
      // this.state.contacts.filter((contact) => contact.name === newContact.name)
      //   .length !== 0
    ) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      this.setState((prevState) => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
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
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
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
