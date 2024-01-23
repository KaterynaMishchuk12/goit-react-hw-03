import { Contact } from "../Contact/Contact";

export const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ name, number, id }) => {
          return <Contact key={id} name={name} number={number} />;
        })}
        ;
      </ul>
    </div>
  );
};
