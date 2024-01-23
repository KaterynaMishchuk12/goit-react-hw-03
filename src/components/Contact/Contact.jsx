import { BiSolidUser } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";

export const Contact = ({ name, number, id }, onDeleteBtn) => {
  const handleDeleteBtn = () => {
    return onDeleteBtn(id);
  };

  return (
    <li>
      <div>
        <BiSolidUser />
        <p>{name}</p>
        <BsFillTelephoneFill />
        <p>{number}</p>
      </div>
      <button type="button" onClick={handleDeleteBtn}>
        Delete
      </button>
    </li>
  );
};
