import { Contact } from "../Contact/Contact";

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <Contact
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

//  <ul>
//    {contacts.map(({ name, number, id }) => {
//      return (
//        <Contact key={id} name={name} number={number} onDelete={onDelete} />
//      );
//    })}
//  </ul>;
