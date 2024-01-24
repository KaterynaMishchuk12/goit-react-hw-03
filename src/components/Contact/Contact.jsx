import { BiSolidUser } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";

export const Contact = ({ name, number, id }, onDeleteBtn) => {
  const handleDeleteBtn = () => {
    return onDeleteBtn(id);
  };

  return (
    <li>
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
        <button type="button" onClick={handleDeleteBtn}>
          Delete
        </button>
      </div>
    </li>
  );
};
