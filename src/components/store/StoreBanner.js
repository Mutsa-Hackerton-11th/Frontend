import { styled } from "styled-components";
import StoreBannerImage from "./StoreBanner.jpg";
import SearchIcon from "../../icons/search/SearchIcon";
import React, { useState } from "react";
import PropTypes from "prop-types";
import MediaQuery from "../../assets/mediaQuery";

export default function StoreBanner({ categories, text, subText }) {
  const [searchValue, setSearchValue] = useState("");
  const [categoryState, setCategoryState] = useState(0);
  const inputChanged = (e) => {
    setSearchValue(e.target.value);
  };
  const storeCategoryClicked = (index) => {
    setCategoryState(index);
  };
  const { isBigMobile, isSmallMobile } = MediaQuery();
  return (
    <>
      <StoreBannerWrapper>
        <img alt="스토어 배너 사진" src={StoreBannerImage} />
        <BannerText>
          <span>{text}</span>
          <span>{subText}</span>
        </BannerText>
      </StoreBannerWrapper>
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
                    onClick={() => storeCategoryClicked(index)}
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
    </>
  );
}

StoreBanner.propTypes = {
  categories: PropTypes.array,
  text: PropTypes.string.isRequired,
  subText: PropTypes.string,
};

const StoreBannerWrapper = styled.div`
  height: 31.6rem;
  position: relative;
  img {
    height: 100%;
    width: 100%;
  }
`;

const BannerText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    ${(props) => props.theme.fontStyles.title}
  }
  span:nth-child(2) {
    ${(props) => props.theme.fontStyles.subText}
    font-size:1.6rem
  }
`;

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
