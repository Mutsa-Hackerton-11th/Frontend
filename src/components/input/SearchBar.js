import PropTypes from "prop-types";
import { styled } from "styled-components";
import SearchIcon from "../../icons/search/SearchIcon";

export default function SearchBar({ placeholder, value, onChange }) {
  return (
    <SearchWrapper>
      <SearchInput
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <span
        style={{
          position: "absolute",
          right: "2rem",
        }}
      >
        <SearchIcon />
      </span>
    </SearchWrapper>
  );
}

SearchBar.propTypes = {
  text: PropTypes.string,
};

const SearchWrapper = styled.div`
  width: 30rem;
  height: 7.5rem;
  border-radius: 1rem;
  background-color: skyblue;
  display: flex;
  position: relative;
  align-items: center;
`;

const SearchInput = styled.input`
  ${(props) => props.theme.fontStyles.subText}
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  padding-left: 3rem;
`;
