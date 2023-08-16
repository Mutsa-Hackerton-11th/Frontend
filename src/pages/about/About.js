import { useState } from "react";
import { Link } from "react-router-dom";
import WebBanner from "../../components/banner/WebBanner";
import { styled } from "styled-components";
import SearchBar from "../../components/input/SearchBar";

export default function About() {
  const [text, setText] = useState("");

  const textInputted = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <AboutWrapper>
      <WebBanner text="About" />
      <AboutBoxWrapper>
        <PageWrapper>
          <DetailPage>
            <img 
              src="/img/AboutImg.png"
              style={{width: "55vw"}}
            />
            <h1>서비스 소개</h1>
            <span>
              고객과 자사몰을 연결해주는 플랫폼인 "사이트명"은 
              이용자들에게는 취향에 맞는 예쁜 옷이 많은 곳으로, 
              판매자에게는 운영이 편리하고 매출 상승에 도움을 주는 플랫폼입니다.
            </span>
            <Link to="/serviceintroduction"><p>더보기</p></Link>
          </DetailPage>
          <DetailPage>
            <img 
              src="/img/AboutImg.png"
              style={{width: "55vw"}}
            />
            <h1>입점 절차</h1>
            <span>
              "사이트명"은 정책을 사전 안내하여 투명한 입점 심사를 지향합니다.
            </span>
            <Link to="/entryprocedure"><p>더보기</p></Link>
          </DetailPage>
          <DetailPage>
            <img 
              src="/img/AboutImg.png"
              style={{width: "55vw"}}
            />
            <h1>수수료 등급</h1>
            <span>
              "사이트명"은 매출 이력 확인을 통한 차등 수수료 지급 방식으로 
              신규 판매자들도 성장할 수 있는 기회를 주는 플랫폼입니다.
            </span>
            <Link to="/feerating"><p>더보기</p></Link>
          </DetailPage>
        </PageWrapper>
        <SideBarWrapper>
          <SearchBar value={text} onChange={textInputted} />
          <CategoryWrapper>
            <h1>Categories</h1>
            <Link to="/serviceintroduction"><span>서비스 소개</span></Link>
            <Link to="/entryprocedure"><span>입점 절차</span></Link>
            <Link to="/feerating"><span>수수료 등급</span></Link>
            <span>FAQ</span>
          </CategoryWrapper>
        </SideBarWrapper>
      </AboutBoxWrapper>
    </AboutWrapper>
  );
}

const AboutWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const AboutBoxWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding : 12rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  span {
    ${(props) => props.theme.fontStyles.text}
    color: #9F9F9F;
    line-height: 4rem;
  }
`;

const PageWrapper = styled.div`
  width: 55vw;
  margin-right: 10rem;
`;

const DetailPage = styled.div`
  width: 100%;
  h1 {
    ${(props) => props.theme.fontStyles.subTitle}
    margin: 5rem 0 3rem 0;
  }
  p {
    ${(props) => props.theme.fontStyles.text}
    margin-top : 7rem;
    text-decoration: underline black solid 0.2rem;
  }
  margin-bottom: 10rem;
`;

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const CategoryWrapper = styled.div`
  height: 50rem;
  margin-left: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  h1 {
    ${(props) => props.theme.fontStyles.subTitle}
  }
`;
