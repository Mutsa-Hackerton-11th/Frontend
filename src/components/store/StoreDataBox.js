import { styled } from "styled-components";
import MediaQuery from "../../assets/mediaQuery";
import PropTypes from "prop-types";
import Likes from "../../icons/heart/Likes";
import HotOrNewLabel from "../../icons/label/HotOrNewLabel";
import { useNavigate } from "react-router-dom";
import { hotOrNew } from "../../state/LabelState";

export default function StoreDataBox({ data }) {
  console.log(data);
  const { isSmallMobile, isBigMobile, isTablet } = MediaQuery();
  const navigate = useNavigate();
  const dataBoxClicked = () => {
    !data.like_counts
      ? navigate(`/store/${data.seller_id}`, {
          state: data.company_name,
        })
      : navigate(`/productdetail/${data.product_id}`, {
          state: {
            productName: data.name,
            category: data.category,
            mallName: data.shop_name,
            price: data.product_price,
            image: data.image,
          },
        });
  };
  return (
    <DataBoxWrapper
      style={{
        width: isSmallMobile ? "49%" : isBigMobile | isTablet ? "32%" : null,
      }}
    >
      <img
        alt="박스 사진"
        src={
          data.seller_image
            ? process.env.REACT_APP_SERVER_API + data.seller_image
            : data.image
            ? process.env.REACT_APP_SERVER_API + data.image
            : process.env.PUBLIC_URL + "/img/preparing-image.png"
        }
        onClick={dataBoxClicked}
      />
      {data.hot && data.new ? (
        <>
          <span
            style={{
              position: "absolute",
              top: "0rem",
              right: "0rem",
            }}
          >
            <HotOrNewLabel state={hotOrNew.HOT} />
          </span>
          <span
            style={{
              position: "absolute",
              top: "2.5rem",
              right: "2.5rem",
            }}
          >
            <HotOrNewLabel state={hotOrNew.NEW} />
          </span>
        </>
      ) : data.hot || data.new ? (
        <span
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
          }}
        >
          <HotOrNewLabel state={data.hot ? hotOrNew.HOT : hotOrNew.NEW} />
        </span>
      ) : null}
      <DataBoxInfo
        style={{
          height: !data.like_counts ? "25%" : null,
        }}
      >
        <span>{!data.like_counts ? data.company_name : data.name}</span>
        <span>
          {!data.like_counts
            ? data.seller_detail
              ? data.seller_detail
              : "브랜드 키워드"
            : data.keyword
            ? data.keyword
            : "상품 키워드"}
        </span>
        {data.like_counts ? (
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <span
              style={{
                marginRight: "1rem",
              }}
            >
              {data.product_price}원
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  cursor: "pointer",
                  marginRight: "0.2rem",
                }}
              >
                <Likes />
              </span>
              <span>{data.like_counts}</span>
            </div>
          </div>
        ) : null}
      </DataBoxInfo>
    </DataBoxWrapper>
  );
}

StoreDataBox.propTypes = {
  data: PropTypes.object,
};

const DataBoxWrapper = styled.div`
  width: 24%;
  height: 44.6rem;
  padding: 2rem;
  img {
    width: 100%;
    height: 70%;
  }
  position: relative;
  background-color: #f4f5f7;
`;

const DataBoxInfo = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem 2rem;
  > span:first-child {
    ${(props) => props.theme.fontStyles.text}
    color:#3A3A3A
  }
  > span:nth-child(2) {
    ${(props) => props.theme.fontStyles.subText}
    color:#898989
  }
  div {
    span {
      ${(props) => props.theme.fontStyles.subText}
      color:#3A3A3A
    }
  }
`;
