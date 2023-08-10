import { styled } from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import HeaderLogo from "../../icons/logo/HeaderLogo";

export default function WebBanner({ text, subText }) {
  return (
    <div
      style={{
        paddingTop: "10rem",
      }}
    >
      <BannerWrapper>
        <img
          alt="스토어 배너 사진"
          src={process.env.PUBLIC_URL + "/img/StoreBanner.png"}
        />
        <BannerIcon>
          <HeaderLogo />
        </BannerIcon>
        <BannerText>
          <span>{text}</span>
          <span>{subText}</span>
        </BannerText>
      </BannerWrapper>
    </div>
  );
}

WebBanner.propTypes = {
  text: PropTypes.string.isRequired,
  subText: PropTypes.string,
};

const BannerWrapper = styled.div`
  height: 31.6rem;
  position: relative;
  img {
    height: 100%;
    width: 100%;
  }
`;

const BannerIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -200%);
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
