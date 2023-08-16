import { styled } from "styled-components";
import MediaQuery from "../../assets/mediaQuery";
import { useState } from "react";
import SearchIcon from "../../icons/search/SearchIcon";

export default function BannerSearch({ categories, onClick, categoryState }) {
  const { isBigMobile, isSmallMobile } = MediaQuery();
  const [searchValue, setSearchValue] = useState("");
  const inputChanged = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <StoreBannerSearch>
      <StoreBannerCategories>
        {categories
          ? categories.map((category, index) => {
              return (
                <span
                  style={{
                    color: index === categoryState ? "#000000" : null,
                    width: isBigMobile | isSmallMobile ? "25%" : null,
                    padding: isBigMobile | isSmallMobile ? "1rem 0" : null,
                  }}
                  onClick={() => onClick(index)}
                >
                  {category}
                </span>
              );
            })
          : null}
      </StoreBannerCategories>
      <SearchWrapper onChange={inputChanged} value={searchValue} />
      <span
        style={{
          position: "absolute",
          marginRight: "6.5rem",
        }}
      >
        <SearchIcon />
      </span>
    </StoreBannerSearch>
  );
}

const StoreBannerSearch = styled.div`
  height: auto;
  padding: 3rem 0;
  background-color: ${(props) => props.theme.colors.mainBackground};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

const StoreBannerCategories = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  span {
    ${(props) => props.theme.fontStyles.text};
    color: ${(props) => props.theme.colors.fontColor.gray};
    cursor: pointer;
    display: flex;
    justify-content: center;
  }
`;

const SearchWrapper = styled.input`
  width: 30%;
  height: 5.8rem;
  border-radius: 1rem;
  background-color: white;
  margin-right: 5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 2rem;
  ${(props) => props.theme.fontStyles.subText}
`;
