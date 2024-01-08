// import { Component } from "react";
// import { useState } from "react";

import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import css from "./Contacts.module.css";
import { addContact } from "./../../redux/actions";

function ContactForm(props) {
  const dispatch = useDispatch();
  // const notify = (name) => toast.warning(`${name} is already in contacts !`);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    // console.log("OnSubmit - name: ", name);
    // console.log("OnSubmit - number: ", number);

    // if (props.addItem(name, number)) {
    //   notify(name);
    // }

    dispatch(addContact(name, number));

    form.reset();
  };

  return (
    <>
      <form className={css.formBox} onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </form>
      <div>
        <ToastContainer />
      </div>
    </>
  );
}

export default ContactForm;
