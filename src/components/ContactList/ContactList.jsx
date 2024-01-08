import { useSelector } from "react-redux";
import { getContact, getStatusFilter } from "./../../redux/selectors";
import PropTypes from "prop-types";
import { useEffect } from "react";
// import { Component } from "react";
import * as localStorage from "./../../storage";
import { Contact } from "./../Contact/Contact";

const getVisibleContacts = (contacts, statusFilter) => {
  // switch (statusFilter) {
  //   case statusFilters.active:
  //     return tasks.filter(task => !task.completed);
  //   case statusFilters.completed:
  //     return tasks.filter(task => task.completed);
  //   default:
  //     return tasks;
  // }

  // return contacts.name === statusFilter


  console.log("statusFilter: ", statusFilter.text);

  return (
    statusFilter
      ? contacts.filter((item) => item.name.includes(statusFilter.text))
      : contacts
  );
};

function ContactList(props) {
  const contacts = useSelector(getContact);
  const statusFilter = useSelector(getStatusFilter);

  const visibleContacts = getVisibleContacts(contacts, statusFilter);

  console.log("ContactList-contact: ", contacts);

  // const statusFilter = useSelector(getStatusFilter);

  // const visibleContact = getVisibleContact(contact, statusFilter);

  // console.log("props-contacts: ", props.contacts);

  // useEffect(() => {
  //   const upContacts = localStorage.load("contacts");
  //   if (upContacts !== undefined) {
  //     // this.setState({ contacts: contacts });
  //     props.setContacts(upContacts);
  //   }
  //
  //   console.log("List-contacts: ", props.contacts);
  //   console.log("List-upContacts: ", props.contacts);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    localStorage.save("contacts", props.contacts);
  }, [props.contacts]);

  // const contactsFilter = () => {
  //   return (
  //     contacts.filter((item) => item.name.includes(filter))
  //     contacts
  //   );
  // };

  return (
    <>
      <ul>
        {(visibleContacts || []).map((item) => {
          return (
            <li key={item.id}>
              {
                /*{item.name}: {item.number}
              <button
                type="button"
                onClick={() => props.removeItem(item.id)}
              >
                Remove
              </button>*/
              }
              <Contact contact={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  state: PropTypes.shape({
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,

        number: PropTypes.string,
      }).isRequired,
    ),
    filter: PropTypes.string,
  }),
};

export default ContactList;
