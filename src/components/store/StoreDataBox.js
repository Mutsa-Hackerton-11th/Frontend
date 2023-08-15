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
    !data.likes
      ? navigate(`/store/${data.seller_id}`, {
          state: data.company_name,
        })
      : navigate(`/productdetail/${data.id}`, {
          state: {
            productName: data.name,
            category: data.category,
            mallName: data.mallName.state,
          },
        });
  };
  return (
    <StoreDataBoxWrapper
      style={{
        width: isSmallMobile ? "50%" : isBigMobile ? "33.3%" : null,
      }}
      onClick={shoppingMallClicked}
    >
      <img
        alt="박스 사진"
        src={
          data.seller_image
            ? data.seller_image
            : "https://cdn.pixabay.com/photo/2015/02/14/02/20/wedding-636021_1280.jpg"
        }
      />
      {data.hotOrNew ? (
        <span
          style={{
            position: "absolute",
            top: "3.5rem",
            right: "4rem",
          }}
        >
          <HotOrNewLabel state={data.hotOrNew} />
        </span>
      ) : null}
      <DataBoxInfo
        style={{
          height: !data.likes ? "20%" : null,
        }}
      >
        <span>{data.company_name}</span>
        <span>{data.seller_detail ? data.seller_detail : "회사 소개"}</span>
        {data.likes ? (
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
        ) : null}
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
