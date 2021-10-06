import { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import Modal from "./components/Modal/Modal";
//import IconButton from "./components/IconButton/IconButton";
import shortid from "shortid";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
    showModal: false,
  };

  // formHandleSubmit = (data) => {
  //   console.log(data);
  // };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

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
    this.toggleModal();
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
  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parseContacts = JSON.parse(contacts);

    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }
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
        <button type="button" className="button" onClick={this.toggleModal}>
          Add Contact
        </button>
        {this.state.showModal && <Modal onClose={this.toggleModal}>
          <Form onSubmit={this.addContact} />
         
        </Modal>}
        
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
