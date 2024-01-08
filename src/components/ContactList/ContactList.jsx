import { useSelector } from "react-redux";
import { getContact, getStatusFilter } from "./../../redux/selectors";
import PropTypes from "prop-types";
import { useEffect } from "react";
// import { Component } from "react";
import * as localStorage from "./../../storage";
import { Contact } from "./../Contact/Contact";

const getVisibleContacts = (contacts, statusFilter) => {
  console.log("statusFilter: ", statusFilter.text);

  return (
    statusFilter
      ? contacts.filter((item) => item.name.includes(statusFilter.text))
      : contacts
  );
};

function ContactList() {
  const contacts = useSelector(getContact);
  const statusFilter = useSelector(getStatusFilter);

  const visibleContacts = getVisibleContacts(contacts, statusFilter);

  console.log("ContactList-contact: ", contacts);

  // useEffect(() => {
  //   localStorage.save("contacts", props.contacts);
  // }, [props.contacts]);

  return (
    <>
      <ul>
        {(visibleContacts || []).map((item) => {
          return (
            <li key={item.id}>
              <Contact contact={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ContactList;
