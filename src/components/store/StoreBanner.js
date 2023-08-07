import { styled } from "styled-components";
import StoreBannerImage from "./StoreBanner.jpg";
import SearchIcon from "../../icons/search/SearchIcon";
import React, { useState } from "react";

export default function StoreBanner() {
  const [searchValue, setSearchValue] = useState("");
  const inputChanged = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <>
      <StoreBannerWrapper>
        <img alt="스토어 배너 사진" src={StoreBannerImage} />
        <BannerText>
          <span>Store</span>
          <span>Home {">"} Store</span>
        </BannerText>
      </StoreBannerWrapper>
      <StoreBannerSearch>
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
  height: 10rem;
  background-color: ${(props) => props.theme.colors.mainBackground};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

const SearchWrapper = styled.input`
  width: 31.1rem;
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
