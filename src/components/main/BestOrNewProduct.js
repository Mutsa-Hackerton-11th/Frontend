import { styled } from "styled-components";
import MediaQuery from "../../assets/mediaQuery";
import { useNavigate } from "react-router-dom";
import Likes from "../../icons/heart/Likes";
import HotOrNewLabel from "../../icons/label/HotOrNewLabel";
import { hotOrNew } from "../../state/LabelState";

export default function BestOrNewProduct({ data, bestOrNew }) {
  console.log(data);
  console.log(bestOrNew);
  const { isMobile } = MediaQuery();
  const navigate = useNavigate();
  const hotProductsClicked = () => {
    navigate(`/productdetail/${data.product_id}`);
  };
  return (
    <ProductWrapper
      style={{
        width: isMobile ? "50%" : null,
      }}
    >
      <HotOrNew>
        {bestOrNew === 0 ? (
          <HotOrNewLabel state={hotOrNew.HOT} />
        ) : (
          <HotOrNewLabel state={hotOrNew.NEW} />
        )}
      </HotOrNew>
      <img
        alt={"제품 이미지"}
        src={
          data.images
            ? process.env.REACT_APP_SERVER_API + data.images[0]
            : process.env.PUBLIC_URL + "/img/preparing-image.png"
        }
        onClick={hotProductsClicked}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ProductName>
          <span>{data.product_name}</span>
        </ProductName>
        <ProductPriceAndLikes>
          <span
            style={{
              marginRight: "1rem",
            }}
          >
            {data.product_price}원
          </span>
          <span
            style={{
              marginRight: "0.2rem",
            }}
          >
            <Likes />
          </span>
          <span>{data.like_counts}</span>
        </ProductPriceAndLikes>
      </div>
    </ProductWrapper>
  );
}

const HotOrNew = styled.div`
  position: absolute;
  right: 2rem;
  top: 4rem;
`;

const ProductWrapper = styled.div`
  width: 33.3%;
  height: 60rem;
  padding: 3rem 1rem;
  img {
    width: 100%;
    height: 80%;
  }
  position: relative;
`;

const ProductName = styled.div`
  span {
    ${(props) => props.theme.fontStyles.text}
  }
  margin-bottom: 1rem;
  padding: 1rem 0;
`;

const ProductPriceAndLikes = styled.div`
  span {
    ${(props) => props.theme.fontStyles.text}
  }
`;
