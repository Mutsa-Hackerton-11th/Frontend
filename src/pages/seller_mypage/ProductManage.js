import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom/dist";
import React, { useMemo } from "react";

import Table from "./Table";
import WebBanner from "../../components/banner/WebBanner";
import withAuth from "../../authHoc/WithAuth";
import { pageBlock } from "../../state/pageBlockState";

function ProductManage() {
  const navigate = useNavigate();

  const columns = [
    {
      Header: "상품명",
      accessor: "goodsTitle",
    },
    {
      Header: "판매가",
      accessor: "goodsPrice",
    },
    {
      Header: "상품분류",
      accessor: "goodsCategory",
    },
  ];

  const data = [
    {
      goodsTitle: "스트라이프 맨투맨",
      goodsPrice: "36,800",
      goodsCategory: "상의",
    },
    {
      goodsTitle: "반짝반짝 스커트",
      goodsPrice: "5,500",
      goodsCategory: "아우터",
    },
    {
      goodsTitle: "와이드 청바지",
      goodsPrice: "10,500",
      goodsCategory: "하의",
    },
    {
      goodsTitle: "바시티 자켓",
      goodsPrice: "15,000",
      goodsCategory: "아우터",
    },
    {
      goodsTitle: "박시티",
      goodsPrice: "300,000",
      goodsCategory: "상의",
    },
  ];

  return (
    <>
      <WebBanner text="상품관리" subText="마이페이지 > 상품관리" />
      <Wrapper>
        <InnerWrapper>
          <InnerWrapperHeader>
            <Title>상품관리</Title>
            <NavigateBut
              onClick={() => {
                navigate("/productupload");
              }}
            >
              상품등록
            </NavigateBut>
          </InnerWrapperHeader>

          <Table columns={columns} data={data} />
        </InnerWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InnerWrapper = styled.div`
  width: 80%;
`;
const Title = styled.div`
  ${(props) => props.theme.fontStyles.subTitle}
`;

const InnerWrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-left: 1%;
  padding-right: 1%;

  padding-bottom: 5%;
  padding-top: 5%;
`;

const NavigateBut = styled.button`
  border: 2px solid ${(props) => props.theme.colors.fontColor.black};
  border-radius: 10px;
  ${(props) => props.theme.fontStyles.text}
  padding:1rem;
  background-color: ${(props) => props.theme.colors.buttonColor.gray};
`;

export default withAuth(ProductManage, { block: pageBlock.UNAUTHENTICATED });
