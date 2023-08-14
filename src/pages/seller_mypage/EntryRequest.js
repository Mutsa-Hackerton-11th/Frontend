import { styled } from "styled-components";
import Input from "../../components/input/Input";
import WebBanner from "../../components/banner/WebBanner";
import withAuth from "../../authHoc/WithAuth";
import { pageBlock } from "../../state/pageBlockState";
import FileInput from "../../components/input/FileInput";
import { useState } from "react";

function EntryRequest() {
  const imgUrl = process.env.PUBLIC_URL + "/img/entryRequestimg.png";
  return (
    <>
      <WebBanner text="입점신청" subText="마이페이지 > 입점신청" />

      <Wrapper>
        <img style={{ width: "80%" }} src={imgUrl} alt="SizeSample" />
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

export default withAuth(EntryRequest, { block: pageBlock.UNAUTHENTICATED });
