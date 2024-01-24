import { useEffect, useState } from "react";
// import * as Yup from "yup";
import { ContactForm } from "./ContactForm/Contact.Form";
import { SearchBox } from "./SearchBox/SearchBox";
import { ContactList } from "./ContactList/ContactList";
import "./App.css";

export function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    setContacts(savedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleSearchChange = (event) => {
    setInputValue(event.target.value);
  };

  //////////якась маячня, не працює
  const handleAddContact = (newContact) => {
    setContacts({ ...contacts, newContact });
  };
  //////////////

  const searchedContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmitContact={handleAddContact} />
        <SearchBox search={inputValue} onChange={handleSearchChange} />
        <ContactList contacts={searchedContacts} />
      </div>
    </>
  );
}
