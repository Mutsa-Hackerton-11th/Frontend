import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Banner from "../../components/Banner";
import { useNavigate } from "react-router-dom/dist";
import React, { useMemo } from "react";
import theme from "../../styles/theme";

import Table from "./Table";

export default function ProductManage() {
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
      <Banner title="상품관리" subtitle="마이페이지 > 상품관리" />
      <Wrapper>
        <Title>상품관리</Title>
        <GoodsList></GoodsList>
        <Link to="/productupload">상품등록</Link>
        <Table columns={columns} data={data} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 80%;

  padding-left: 15%;
`;
const Title = styled.div``;
const GoodsList = styled.div``;
