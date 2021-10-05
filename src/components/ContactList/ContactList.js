import React from "react";
import "./ContactList.css";
import IconButton from "../IconButton/IconButton";
import { ReactComponent as DeleteContact } from './bin.svg';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className="ContactList">
      {contacts.map(({ id, name, number }) => (
        <li id={id} className="card_contact">
          <span>{name} </span>
          <span> {number}</span>
          
          <IconButton classname= "IconButton" onClick={() => onDelete(id)}><DeleteContact /></IconButton>
          
          
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
