import "./search-box.styles.css";

const SearchBox = ({ className, placehoder, onChangeHandler }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placehoder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
