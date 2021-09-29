import React from "react";
import "./ContactList.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className="ContactList">
      {contacts.map(({ id, name, number }) => (
        <li id={id} className="card_contact">
          <span>{name} </span>
          <span> {number}</span>
          <button type="button" className="btn_delete" onClick={() => onDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
