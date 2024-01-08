import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import * as localStorage from "./../storage";

export const App = () => {
  // const initialState = [
  //   { name: "", id: "", number: "" },
  // ];

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");
  const [isLoad, setIsLoad] = useState(false);

  const onAddItem = (name, number) => {
    if (checkItem(name).length === 0) {
      const arr = [{ name: name, id: nanoid(), number: number }];

      setContacts([...contacts, ...arr]);

      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    const upContacts = localStorage.load("contacts");
    if (upContacts !== undefined) {
      // this.setState({ contacts: contacts });
      setContacts(upContacts);
      setIsLoad(true);
    }

    console.log("App-contacts: ", contacts);
    console.log("App-upContacts: ", contacts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRemoveItem = (i) => {
    setContacts(
      contacts.filter((item) => i !== item.id),
    );
  };

  const checkItem = (name) => {
    return contacts.filter((item) => item.name.includes(name));
  };

  const handleChangeInput = (evt) => {
    evt.preventDefault();
    const filter = evt.currentTarget.value;
    setFilter(filter);
  };

  const contactsFilter = () => {
    return (
      contacts.filter((item) => item.name.includes(filter))
    );
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addItem={onAddItem} />

      <h2>Contacts</h2>
      <Filter onChange={handleChangeInput} />
      {isLoad && (
        <ContactList
          contacts={contactsFilter()}
          removeItem={onRemoveItem}
        />
      )}
    </>
  );
};
