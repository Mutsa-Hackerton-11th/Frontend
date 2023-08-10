import { styled } from "styled-components";
import { webName } from "./sitename/WebName";
import HeaderLogo from "../../icons/logo/HeaderLogo";
import { useLocation, useNavigate } from "react-router-dom";
import { headerIconState, headerState } from "./state/HeaderState";
import { useEffect, useRef, useState } from "react";
import HeaderIconButton from "./headerIcon/HeaderIconButton";

export default function Header() {
  const [headerStateIndex, setHeaderStateIndex] = useState(0);
  const [headerIconId, setHeaderIconId] = useState(-1);
  const navigate = useNavigate();
  const location = useLocation();
  const headerStateClicked = (index) => {
    navigate(headerState[index].route);
    setHeaderStateIndex(index);
  };
  useEffect(() => {
    const currentPath = location.pathname;
    const activeStateIndex = headerState.findIndex(
      (state) => state.route === currentPath
    );
    setHeaderStateIndex(activeStateIndex >= 0 ? activeStateIndex : 0);
  }, []);
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
            key={nowState.id}
            onClick={() => headerStateClicked(index)}
            style={{
              color: headerStateIndex === nowState.id ? "#000000" : "#9F9F9F",
            }}
          >
            {nowState.text}
          </span>
        ))}
      </Services>
      <HeaderIcons>
        {headerIconState.map((iconState, index) => (
          <HeaderIconButton
            key={iconState.id}
            iconState={iconState}
            nowIconState={headerIconId}
            index={index}
            handleIconClick={setHeaderIconId}
          >
            {iconState.icon}
          </HeaderIconButton>
        ))}
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
`;
