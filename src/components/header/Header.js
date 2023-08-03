import { styled } from "styled-components";
import { webName } from "./sitename/WebName";
import HeaderLogo from "../../icons/logo/HeaderLogo";
import SearchIcon from "../../icons/search/SearchIcon";
import SmallCart from "../../icons/cart/SmallCart";
import SmallUserIcon from "../../icons/user/SmallUserIcon";
import { useNavigate } from "react-router-dom";
import {
  AboutClicked,
  CategoryClicked,
  PickClicked,
  StoreClicked,
  homeClicked,
} from "./control/HeaderController";

export default function Header() {
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <LogoAndName>
        <div>
          <HeaderLogo />
        </div>
        <WebName>{webName}</WebName>
      </LogoAndName>
      <Services>
        <span onClick={() => homeClicked(navigate)}>Home</span>
        <span onClick={() => StoreClicked(navigate)}>Store</span>
        <span onClick={() => CategoryClicked(navigate)}>Category </span>
        <span onClick={() => AboutClicked(navigate)}>About</span>
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
