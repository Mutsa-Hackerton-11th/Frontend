import { useLocation, useNavigate, useParams } from "react-router-dom";
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
import useGetProductDetails from "../apis/get/useGetProductDetails";

export default function ProductDetail() {
  const { id } = useParams();
  const { productDetails, isLoading, error } = useGetProductDetails(id);
  console.log(productDetails);
  const navigate = useNavigate();
  const smallImageWrapperClass =
    "width:7.6rem; height:8rem; border-radius:1rem; background-color:#F9F1E7; display:flex; justify-content:center; align-items:center;";
  const { isBigMobile, isSmallMobile } = MediaQuery();
  const [sizeState, setSizeState] = useState(0);
  const [colorState, setColorState] = useState(0);
  const [productNum, setProductNum] = useState(0);
  const [imageState, setImageState] = useState(0);
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
  const imageBoxClicked = (index) => {
    setImageState(index);
  };
  console.log(imageState);

  return (
    <div
      style={{
        paddingTop: "10rem",
      }}
    >
      {!isLoading ? (
        <ProductDetailTop>
          <div>
            <span>{productDetails.shop_name}</span>
            <span>{">"}</span>
            <span>{productDetails.category}</span>
            <span>{">"}</span>
          </div>
          <div>
            <span>{productDetails.product_name}</span>
          </div>
        </ProductDetailTop>
      ) : null}
      {!isLoading ? (
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
            {
              <>
                {productDetails.images.map((image, index) => {
                  if (index > 2) {
                    return null;
                  }
                  return (
                    <ProductInfoImageBox
                      image={
                        image
                          ? process.env.REACT_APP_SERVER_API + image
                          : "/img/preparing-image.png"
                      }
                      addClass={smallImageWrapperClass}
                      imageClass="width:6.2rem; height:6.2rem;"
                      onClick={() => imageBoxClicked(index)}
                    />
                  );
                })}
              </>
            }
          </div>
          <div
            style={{
              width: isSmallMobile | isBigMobile ? "70%" : "33%",
              height: "55rem",
            }}
          >
            {imageState === 0 ? (
              <ProductInfoImageBox
                image={
                  productDetails.images[0]
                    ? process.env.REACT_APP_SERVER_API +
                      productDetails.images[0]
                    : process.env.PUBLIC_URL + "/img/preparing-image.png"
                }
                addClass="width:100%; height:50rem; border-radius:2rem; background-color:#F9F1E7; display:flex; justify-content:center; align-items:center;"
                imageClass="width:90%; height:42.6rem;"
              />
            ) : null}
            {imageState === 1 ? (
              <ProductInfoImageBox
                image={
                  productDetails.images[1]
                    ? process.env.REACT_APP_SERVER_API +
                      productDetails.images[1]
                    : process.env.PUBLIC_URL + "/img/preparing-image.png"
                }
                addClass="width:100%; height:50rem; border-radius:2rem; background-color:#F9F1E7; display:flex; justify-content:center; align-items:center;"
                imageClass="width:90%; height:42.6rem;"
              />
            ) : null}
            {imageState === 2 ? (
              <ProductInfoImageBox
                image={
                  productDetails.images[2]
                    ? process.env.REACT_APP_SERVER_API +
                      productDetails.images[2]
                    : process.env.PUBLIC_URL + "/img/preparing-image.png"
                }
                addClass="width:100%; height:50rem; border-radius:2rem; background-color:#F9F1E7; display:flex; justify-content:center; align-items:center;"
                imageClass="width:90%; height:42.6rem;"
              />
            ) : null}
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
                <DetailProductName>
                  {productDetails.product_name}
                </DetailProductName>
                <DetailProductPrice>
                  {productDetails.price}원
                </DetailProductPrice>
                <DetailProductReviews>
                  <div
                    style={{
                      paddingRight: "2rem",
                      borderRight: "1px solid #9F9F9F",
                    }}
                  >
                    {[...Array(Math.floor(productDetails.rating))].map(
                      (_, index) => (
                        <FullStar key={index} />
                      )
                    )}
                    {productDetails.rating % 1 !== 0 && <HalfStar />}
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
                {productDetails.details
                  ? productDetails.details
                  : "상품 설명 준비중"}
              </ProductDetailDef>
              {productDetails.size ? <SelectSizeOrColor
                text="Size"
                size={productDetails.size}
                nowSize={sizeState}
                onClick={sizeSelected}
              /> : null}
              
              <SelectSizeOrColor
                text="Color"
                colors={productDetails.color}
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
                mallName={productDetails.shop_name}
                category={productDetails.category}
              />
            </ProductInfoDetail>
          </div>
        </ProductInfo>
      ) : null}
      {!isLoading ? (
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
                      color:
                        index === productFooterState ? "#000000" : "#9f9f9f",
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
              {productDetails.description ? (
                productDetails.description.split("\n").map((line, index) => (
                  <p key={index}>
                    {line}
                    <br />
                    <br />
                  </p>
                ))
              ) : (
                <p>상품 설명 등록 예정</p>
              )}
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
                productDetails.images[0]
                  ? process.env.REACT_APP_SERVER_API + productDetails.images[0]
                  : process.env.PUBLIC_URL + "/img/preparing-image.png",
                productDetails.images[1]
                  ? process.env.REACT_APP_SERVER_API + productDetails.images[1]
                  : process.env.PUBLIC_URL + "/img/preparing-image.png",
              ]}
            />
            <ProductDetailFooterImage
              images={[
                productDetails.images[2]
                  ? process.env.REACT_APP_SERVER_API + productDetails.images[2]
                  : process.env.PUBLIC_URL + "/img/preparing-image.png",
                productDetails.images[3]
                  ? process.env.REACT_APP_SERVER_API + productDetails.images[3]
                  : process.env.PUBLIC_URL + "/img/preparing-image.png",
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
                productDetails.image
                  ? process.env.REACT_APP_SERVER_API + productDetails.image
                  : process.env.PUBLIC_URL + "/img/preparing-image.png",
                productDetails.additional_img1
                  ? process.env.REACT_APP_SERVER_API +
                    productDetails.additional_img1
                  : process.env.PUBLIC_URL + "/img/preparing-image.png",
              ]}
            />
            <ReviewBox
              reviewText="착용감이 좋지만 색깔이 좀 아쉬워요."
              size="M"
              color="blue"
              images={[
                productDetails.additional_img2
                  ? process.env.REACT_APP_SERVER_API +
                    productDetails.additional_img2
                  : process.env.PUBLIC_URL + "/img/preparing-image.png",
                productDetails.additional_img3
                  ? process.env.REACT_APP_SERVER_API +
                    productDetails.additional_img3
                  : process.env.PUBLIC_URL + "/img/preparing-image.png",
              ]}
            />
          </div>
        </div>
      ) : null}
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
