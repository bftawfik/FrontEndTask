import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

import classes from "./Searchbar.module.scss";

const Searchbar = ({
  onSubmitHandler,
  onResetHandler,
  onInputChange,
  inputPlaceholder,
  inputValue,
}) => {
  return (
    <form
      className={classes.Searchbar}
      onSubmit={onSubmitHandler}
      onReset={onResetHandler}
    >
      <button type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <input
        type="text"
        placeholder={inputPlaceholder}
        onChange={onInputChange}
        value={inputValue}
      />
      {inputValue.trim().length > 0 && (
        <button type="reset">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      )}
    </form>
  );
};

export default Searchbar;