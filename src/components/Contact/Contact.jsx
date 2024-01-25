import { BiSolidUser } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";

export const Contact = ({ name, number, id, onDelete }) => {
  // const handleDeleteClick = () => {
  //   onDelete(id);
  // };

  return (
    <li key={id}>
      <div className={css.container}>
        <div className={css.contactInfo}>
          <p>
            <BiSolidUser className={css.icon} />
            {name}
          </p>
          <p>
            <BsFillTelephoneFill className={css.icon} />
            {number}
          </p>
        </div>
        <button type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </li>
  );
};
