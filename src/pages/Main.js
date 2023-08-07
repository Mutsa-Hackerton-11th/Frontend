import { styled } from "styled-components";
import ArrowButton from "../components/button/ArrowButton";
import BannerButton from "../components/button/BannerButton";
import { useState } from "react";
import BestOrNewProduct from "../components/main/BestOrNewProduct";

export default function Main() {
  const [bannerNum, setBannerNum] = useState(0);
  const [bestOrNew, setBestOrNew] = useState(0);
  const arrowBtnClicked = () => {
    console.log("clicked");
  };
  const bannerButtonClicked = (index) => {
    setBannerNum(index);
  };
  const bestOrNewClicked = (index) => {
    setBestOrNew(index);
  };
  const data = [
    {
      image:
        "https://cdn.pixabay.com/photo/2016/11/22/22/25/groom-1850932_1280.jpg",
      name: "크루넥 스웨터",
      price: "24,000원",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/02/08/02/56/booties-2047596_1280.jpg",
      name: "레더 재킷",
      price: "26,000원",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_1280.jpg",
      name: "가디건",
      price: "31,000원",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2022/08/04/00/51/woman-7363571_1280.jpg",
      name: "플리츠 스커트",
      price: "19,000원",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2014/08/26/21/48/sweatshirts-428607_1280.jpg",
      name: "블레이저",
      price: "57,000원",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/11/18/13/48/clothes-1834650_1280.jpg",
      name: "V넥 티",
      price: "34,000원",
    },
  ];
  return (
    <>
      <MainBanner>
        <BannerText>
          <span>나만 알기 아까운 떠오르는 신생 쇼핑몰</span>
          <p>
            올 여름을 책임질 라이징 상품부터 꾸준히 사랑받는 스테디 상품까지
            한번에 모아보기
          </p>
        </BannerText>
        <BannerPhoto>
          <img
            alt={"메인배너사진"}
            src="https://cdn.pixabay.com/photo/2016/11/22/22/25/groom-1850932_1280.jpg"
          />
          <div
            style={{
              width: "40%",
              height: "100%",
            }}
          >
            <img
              alt={"메인배너사진2"}
              src="https://cdn.pixabay.com/photo/2016/11/22/22/25/groom-1850932_1280.jpg"
              style={{
                width: "100%",
                height: "90%",
              }}
            />
            <div
              style={{
                width: "100%",
                height: "10%",
                display: "flex",
                alignItems: "center",
              }}
            >
              {[0, 1, 2, 3].map((button, index) => {
                return (
                  <BannerButton
                    key={button}
                    addClass="margin-right:2rem;"
                    onClick={() => bannerButtonClicked(index)}
                    clicked={bannerNum === index}
                  />
                );
              })}
            </div>
          </div>
          <NextBannerPhoto>
            <ArrowButton
              bgColor="#fff"
              color="#B88E2F"
              onClick={arrowBtnClicked}
            />
          </NextBannerPhoto>
        </BannerPhoto>
      </MainBanner>
      <MainBody>
        <MainBodyTitle>Hot Products</MainBodyTitle>
        <MainCategory>
          <BestOrNew>
            {["Best", "New"].map((productState, index) => {
              return (
                <div
                  key={productState}
                  onClick={() => bestOrNewClicked(index)}
                  style={{
                    backgroundColor: bestOrNew === index ? "#F9F1E7" : null,
                    cursor: "pointer",
                  }}
                >
                  {productState}
                </div>
              );
            })}
          </BestOrNew>
          <HotProducts>
            <div
              style={{
                height: "95%",
                width: "95%",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {data.map((product, index) => {
                return (
                  <BestOrNewProduct key={product + index} data={product} />
                );
              })}
            </div>
          </HotProducts>
        </MainCategory>
      </MainBody>
    </>
  );
}

const MainBanner = styled.div`
  width: 100%;
  height: 67rem;
  background-color: ${(props) => props.theme.colors.mainBackground};
  display: flex;
  align-items: center;
`;

const BannerText = styled.div`
  width: 40%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    width: 60%;
    ${(props) => props.theme.fontStyles.subTitle}
    font-size:4rem;
    color: #3a3a3a;
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }
  p {
    width: 60%;
    ${(props) => props.theme.fontStyles.subTitle}
    font-size:2rem;
    color: #616161;
    display: flex;
    align-items: center;
  }
`;

const BannerPhoto = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 2rem 0;
  img {
    width: 40%;
    height: 100%;
  }
`;

const NextBannerPhoto = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainBody = styled.div`
  width: 100%;
  height: auto;
  padding: 0 4rem;
`;

const MainBodyTitle = styled.div`
  height: 25rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 5rem 0;
  ${(props) => props.theme.fontStyles.subTitle}
`;

const MainCategory = styled.div`
  height: auto;
  padding: 0 4rem;
`;

const BestOrNew = styled.div`
  height: 7.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    width: 14.5rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${(props) => props.theme.fontStyles.text}
  }
`;

const HotProducts = styled.div`
  height: auto;
  background-color: ${(props) => props.theme.colors.mainBackground};
  display: flex;
  justify-content: center;
  align-items: center;
`;
