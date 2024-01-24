import { useId } from "react";
import css from "./SearchBox.module.css";

export const SearchBox = ({ inputValue, onChange }) => {
  const searchId = useId();

  return (
    <div className={css.searchForm}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input id={searchId} type="text" value={inputValue} onChange={onChange} />
    </div>
  );
};
