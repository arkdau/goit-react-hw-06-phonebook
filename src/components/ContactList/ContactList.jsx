import { useSelector } from "react-redux";
import { getContact, getStatusFilter } from "./../../redux/selectors";
import PropTypes from "prop-types";
import { useEffect } from "react";
// import { Component } from "react";
import * as localStorage from "./../../storage";

function ContactList(props) {

const contacts = useSelector(getContact);
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

  return (
    <>
      <ul>
        {contacts.map((item) => {
          return (
            <li key={item.id}>
              {item.name}: {item.number}
              <button
                type="button"
                onClick={() => props.removeItem(item.id)}
              >
                Remove
              </button>
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
