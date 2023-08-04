import { styled } from "styled-components";
import { webName } from "./sitename/WebName";
import HeaderLogo from "../../icons/logo/HeaderLogo";
import SearchIcon from "../../icons/search/SearchIcon";
import SmallCart from "../../icons/cart/SmallCart";
import SmallUserIcon from "../../icons/user/SmallUserIcon";
import { useNavigate } from "react-router-dom";
import { headerState } from "./state/HeaderState";
import { useRef, useState } from "react";

export default function Header() {
  const [headerStateIndex, setHeaderStateIndex] = useState(0);
  const navigate = useNavigate();
  const headerStateClicked = (index) => {
    navigate(headerState[index].route);
    setHeaderStateIndex(index);
  };
  return (
    <HeaderWrapper>
      <LogoAndName>
        <div>
          <HeaderLogo />
        </div>
        <WebName>{webName}</WebName>
      </LogoAndName>
      <Services>
        {headerState.map((nowState, index) => (
          <span
            key={index}
            onClick={() => headerStateClicked(index)}
            style={{
              color: headerStateIndex === index ? "#000000" : "#9F9F9F",
            }}
          >
            {nowState.text}
          </span>
        ))}
      </Services>
      <HeaderIcons>
        <span>
          <SearchIcon />
        </span>
        <span>
          <SmallCart />
        </span>
        <span>
          <SmallUserIcon />
        </span>
      </HeaderIcons>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: center;
`;

const LogoAndName = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 3rem;
  div {
    cursor: pointer;
  }
`;

const WebName = styled.div`
  ${(props) => props.theme.fontStyles.subTitle}
  font-size: 3rem;
  margin-left: 1rem;
`;

const Services = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    ${(props) => props.theme.fontStyles.text}
    font-size:1.6rem;
    color: ${(props) => props.theme.colors.fontColor.gray};
    cursor: pointer;
  }
`;

const HeaderIcons = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    cursor: pointer;
    margin-right: 3rem;
  }
`;
