import { styled } from "styled-components";
import HeaderLogo from "../icons/logo/HeaderLogo";
import theme from "../styles/theme";

export default function Banner({ title, subtitle }) {
  return (
    <BannerWrapper>
      <HeaderLogo />
      <p>{title}</p>
      <span>{subtitle}</span>
    </BannerWrapper>
  );
}

const BannerWrapper = styled.div`
  background: url(/img/bannerImg.png);
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5%;
  p {
    ${(props) => props.theme.fontStyles.title}
  }
  span {
    ${(props) => props.theme.fontStyles.text}
  }
`;
