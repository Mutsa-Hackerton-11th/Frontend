import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import MediaQuery from "../assets/mediaQuery";
import ProductInfoImageBox from "../components/product/ProductInfoImageBox";
import FullStar from "../icons/star/FullStar";
import HalfStar from "../icons/star/HalfStar";
import { productColors, productSize } from "../state/ProductState";
import { useRef, useState } from "react";
import SelectSizeOrColor from "../components/product/SelectSizeOrColor";
import CounterButton from "../components/button/CounterButton";
import PrimaryButton from "../components/button/PrimaryButton";
import ProductDetailFooter from "../components/product/ProductDetailFooter";
import ProductDetailFooterImage from "../components/product/ProductDetailFooterImage";
import ReviewBox from "../components/product/ReviewBox";

export default function ProductDetail() {
  const navigate = useNavigate();
  const smallImageWrapperClass =
    "width:7.6rem; height:8rem; border-radius:1rem; background-color:#F9F1E7; display:flex; justify-content:center; align-items:center;";
  const productIntroduce =
    "스트라이프 패턴에 크롭 기장감이 더해져 경쾌한 무드가 느껴지며 브이 라인의 시보리 네크라인이 포인트가 되어드립니다. 래글런 라인에 드롭된 숄더 라인이 여리여리한 실루엣까지 연출해 드려요 :)";
  const description =
    "[FABRIC] 부드럽고 보송한 터칭감의 원단으로쾌적한 착용감을 느끼실 수 있습니다.[DESIGN] 브이 라인의 시보리 네크라인이 포인트가 되어드리며스트라이프 패턴으로 경쾌한 무드를 더해드립니다.\n[SILHOUETTE] 래글런 라인에 드롭된 숄더 라인으로여리여리한 실루엣을 연출해 드리고루즈한 핏으로 체형 커버 효과를 더해드립니다. 스트라이프 패턴에 세미 크롭 기장감으로경쾌한 무드가 느껴지며브이 라인의 시보리 네크라인으로 포인트를 더했습니다.래글런 라인에 살짝 드롭된 숄더 라인이여리여리한 실루엣을 연출해 드리고루즈한 핏으로 상체 체형 커버 효과를 더해드립니다.통통 튀는 레드, 가을 시즌에 잘 어울릴 오렌지,깔끔하고 단정한 네이비 컬러까지원하시는 무드로 골라 다양한 스타일링을 즐겨보세요 :) ";
  const { state } = useLocation();
  const { isBigMobile, isSmallMobile } = MediaQuery();
  const [sizeState, setSizeState] = useState(0);
  const [colorState, setColorState] = useState(0);
  const [productNum, setProductNum] = useState(0);
  const [productFooterState, setProductFooterState] = useState(0);
  const productFooter = ["Description", "Detail", "Review"];
  const descriptionRef = useRef(null);
  const detailRef = useRef(null);
  const reviewRef = useRef(null);
  const sizeSelected = (index) => {
    setSizeState(index);
  };
  const colorSelected = (index) => {
    setColorState(index);
  };
  const increaseNum = () => {
    setProductNum((prev) => prev + 1);
  };
  const decreaseNum = () => {
    if (productNum === 0) return;
    setProductNum((prev) => prev - 1);
  };
  const footerClicked = (index) => {
    setProductFooterState(index);

    if (index === 0) {
      descriptionRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (index === 1) {
      detailRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (index === 2) {
      reviewRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const buyProductClicked = () => {
    navigate("/buyproduct");
  };

  return (
    <div
      style={{
        paddingTop: "10rem",
      }}
    >
      <ProductDetailTop>
        <div>
          <span>{state.mallName}</span>
          <span>{">"}</span>
          <span>{state.category}</span>
          <span>{">"}</span>
        </div>
        <div>
          <span>{state.productName}</span>
        </div>
      </ProductDetailTop>
      <ProductInfo>
        <div
          style={{
            width: isSmallMobile | isBigMobile ? "20%" : "10%",
            height: "33.4rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <ProductInfoImageBox
            image="https://cdn.pixabay.com/photo/2015/02/14/02/20/wedding-636021_1280.jpg"
            addClass={smallImageWrapperClass}
            imageClass="width:6.2rem; height:6.2rem;"
          />
          <ProductInfoImageBox
            image="https://cdn.pixabay.com/photo/2016/03/27/19/31/fashion-1283863_1280.jpg"
            addClass={smallImageWrapperClass}
            imageClass="width:6.2rem; height:6.2rem; "
          />
          <ProductInfoImageBox
            image="https://cdn.pixabay.com/photo/2018/12/02/10/59/cap-3851017_1280.jpg"
            addClass={smallImageWrapperClass}
            imageClass="width:6.2rem; height:6.2rem;"
          />
        </div>
        <div
          style={{
            width: isSmallMobile | isBigMobile ? "70%" : "33%",
            height: "55rem",
          }}
        >
          <ProductInfoImageBox
            image={state.image ? state.image : null}
            addClass="width:100%; height:50rem; border-radius:2rem; background-color:#F9F1E7; display:flex; justify-content:center; align-items:center;"
            imageClass="width:90%; height:42.6rem;"
          />
        </div>
        <div
          style={{
            width: isSmallMobile | isBigMobile ? "100%" : "55%",
            height: "auto",
          }}
        >
          <ProductInfoDetail>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <DetailProductName>{state.productName}</DetailProductName>
              <DetailProductPrice>{state.price}원</DetailProductPrice>
              <DetailProductReviews>
                <div
                  style={{
                    paddingRight: "2rem",
                    borderRight: "1px solid #9F9F9F",
                  }}
                >
                  <FullStar />
                  <FullStar />
                  <FullStar />
                  <HalfStar />
                </div>
                <div
                  style={{
                    paddingLeft: "2rem",
                  }}
                >
                  204 reviews
                </div>
              </DetailProductReviews>
            </div>
            <ProductDetailDef
              style={{
                padding: "2rem 0",
                lineHeight: "1.2",
                maxHeight: "20rem",
                overflowY: "auto",
              }}
            >
              {productIntroduce}
            </ProductDetailDef>
            <SelectSizeOrColor
              text="Size"
              size={productSize}
              nowSize={sizeState}
              onClick={sizeSelected}
            />
            <SelectSizeOrColor
              text="Color"
              colors={productColors}
              nowColor={colorState}
              onClick={colorSelected}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "4rem",
                borderBottom: "1px solid #9F9F9F",
                width: "100%",
              }}
            >
              <div
                style={{
                  marginRight: "1rem",
                  width: "30%",
                }}
              >
                <CounterButton
                  increaseNum={increaseNum}
                  decreaseNum={decreaseNum}
                  num={productNum}
                />
              </div>
              <div
                style={{
                  marginRight: "1rem",
                  width: "35%",
                }}
              >
                <PrimaryButton text="상품 담기" />
              </div>
              <div
                style={{
                  width: "35%",
                }}
              >
                <PrimaryButton onClick={buyProductClicked} text="바로 구매" />
              </div>
            </div>
            <ProductDetailFooter
              mallName={state.mallName}
              category={state.category}
            />
          </ProductInfoDetail>
        </div>
      </ProductInfo>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ProductFooterCategory>
          <div>
            {productFooter.map((footer, index) => {
              return (
                <span
                  style={{
                    color: index === productFooterState ? "#000000" : "#9f9f9f",
                  }}
                  onClick={() => footerClicked(index)}
                >
                  {footer}
                </span>
              );
            })}
          </div>
        </ProductFooterCategory>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          ref={descriptionRef}
        >
          <FooterCategoryText>Description</FooterCategoryText>
          <Description>
            {description.split("\n").map((line, index) => (
              <p key={index}>
                {line}
                <br />
                <br />
              </p>
            ))}
          </Description>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <ProductDetailFooterImage
            images={[
              "https://cdn.pixabay.com/photo/2015/03/31/03/30/fabric-700490_1280.jpg",
              "https://cdn.pixabay.com/photo/2015/03/31/03/30/fabric-700490_1280.jpg",
            ]}
          />
          <ProductDetailFooterImage
            images={[
              "https://cdn.pixabay.com/photo/2023/05/13/14/35/white-flower-7990645_1280.jpg",
              "https://cdn.pixabay.com/photo/2023/05/13/14/35/white-flower-7990645_1280.jpg",
            ]}
          />
        </div>
        <div
          style={{
            width: "100%",
          }}
          ref={detailRef}
        >
          <FooterCategoryText>Detail</FooterCategoryText>
          <img
            src={process.env.PUBLIC_URL + "/img/Detail.png"}
            alt="Detail"
            style={{
              width: "100%",
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
          }}
          ref={reviewRef}
        >
          <FooterCategoryText>Review</FooterCategoryText>
          <ReviewBox
            reviewText="아주 좋아요"
            size="S"
            color="red"
            images={[
              "https://cdn.pixabay.com/photo/2023/05/13/14/35/white-flower-7990645_1280.jpg",
              "https://cdn.pixabay.com/photo/2023/05/13/14/35/white-flower-7990645_1280.jpg",
            ]}
          />
          <ReviewBox
            reviewText="착용감이 좋지만 색깔이 좀 아쉬워요."
            size="M"
            color="blue"
            images={[
              "https://cdn.pixabay.com/photo/2015/03/31/03/30/fabric-700490_1280.jpg",
              "https://cdn.pixabay.com/photo/2015/03/31/03/30/fabric-700490_1280.jpg",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

const ProductDetailTop = styled.div`
  height: 10rem;
  padding: 3rem 0;
  padding-left: 8rem;
  background-color: ${(props) => props.theme.colors.mainBackground};
  display: flex;
  div:first-child {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 1rem;
    span {
      ${(props) => props.theme.fontStyles.subText};
      font-size: 1.6rem;
    }
    span:nth-child(2n) {
      color: ${(props) => props.theme.colors.fontColor.gray};
      margin: 0 1rem;
    }
    border-right: 1px solid #9f9f9f;
  }
  div:nth-child(2) {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    span {
      ${(props) => props.theme.fontStyles.subText};
      font-size: 1.6rem;
    }
  }
`;

const ProductInfo = styled.div`
  padding: 10rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: 1px solid #9f9f9f;
`;

const ProductInfoDetail = styled.div`
  height: auto;
  padding: 0 3rem;
`;

const DetailProductName = styled.div`
  ${(props) => props.theme.fontStyles.subText};
  font-size: 4.2rem;
  margin-bottom: 0.5rem;
`;

const DetailProductPrice = styled.div`
  ${(props) => props.theme.fontStyles.text};
  color: ${(props) => props.theme.colors.fontColor.gray};
  margin-bottom: 1.5rem;
`;

const DetailProductReviews = styled.div`
  width: auto;
  display: flex;
  color: ${(props) => props.theme.colors.fontColor.gray};
  div {
    ${(props) => props.theme.fontStyles.subText};
  }
`;

const ProductFooterCategory = styled.div`
  height: auto;
  padding-top: 5rem;
  width: 60%;
  div {
    display: flex;
    justify-content: space-around;
  }
  span {
    ${(props) => props.theme.fontStyles.text};
    cursor: pointer;
  }
`;

const Description = styled.div`
  width: 80%;
  p {
    color: ${(props) => props.theme.colors.fontColor.gray};
    ${(props) => props.theme.fontStyles.subText};
    line-height: 1.3;
  }
  padding: 3rem 0;
`;

const ProductDetailDef = styled.div`
  ${(props) => props.theme.fontStyles.subText}
`;

const FooterCategoryText = styled.div`
  padding: 7rem 0;
  ${(props) => props.theme.fontStyles.subTitle}
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #e8e8e8;
`;
