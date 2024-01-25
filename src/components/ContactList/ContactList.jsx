import { Contact } from "../Contact/Contact";

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <Contact
            id={contact.id}
            key={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};
