import { styled } from "styled-components";
import MediaQuery from "../../assets/mediaQuery";
import PropTypes from "prop-types";
import Likes from "../../icons/heart/Likes";
import HotOrNewLabel from "../../icons/label/HotOrNewLabel";
import { useNavigate } from "react-router-dom";

export default function StoreDataBox({ data }) {
  const { isSmallMobile, isBigMobile } = MediaQuery();
  const navigate = useNavigate();
  const shoppingMallClicked = () => {
    navigate(`/store/${data.id}`, {
      state: data.name,
    });
  };
  return (
    <StoreDataBoxWrapper
      style={{
        width: isSmallMobile ? "50%" : isBigMobile ? "33.3%" : null,
      }}
      onClick={shoppingMallClicked}
    >
      <img alt="쇼핑몰 박스 사진" src={data.image} />
      <span
        style={{
          position: "absolute",
          top: "3.5rem",
          right: "4rem",
        }}
      >
        <HotOrNewLabel state={data.hotOrNew} />
      </span>
      <DataBoxInfo>
        <span>{data.name}</span>
        <span>{data.introduce}</span>
        <div>
          <span
            style={{
              cursor: "pointer",
              marginRight: "0.2rem",
            }}
          >
            <Likes />
          </span>
          <span>{data.likes}</span>
        </div>
      </DataBoxInfo>
    </StoreDataBoxWrapper>
  );
}

StoreDataBox.propTypes = {
  data: PropTypes.object,
};

const StoreDataBoxWrapper = styled.div`
  width: 25%;
  height: 44.6rem;
  padding: 2rem;
  img {
    width: 100%;
    height: 70%;
  }
  position: relative;
`;

const DataBoxInfo = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem 2rem;
  span:first-child {
    ${(props) => props.theme.fontStyles.text}
    color:#3A3A3A
  }
  span:nth-child(2) {
    ${(props) => props.theme.fontStyles.subText}
    color:#898989
  }
  div {
    display: flex;
    align-items: center;
  }
  div:span {
    ${(props) => props.theme.fontStyles.text}
    color:#3A3A3A
  }
`;
