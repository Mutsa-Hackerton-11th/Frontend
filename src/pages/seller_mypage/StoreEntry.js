import { styled } from "styled-components";
import Input from "../../components/input/Input";
import WebBanner from "../../components/banner/WebBanner";
import withAuth from "../../authHoc/WithAuth";
import { pageBlock } from "../../state/pageBlockState";
import FileInput from "../../components/input/FileInput";
import { useState } from "react";

function StoreEntry() {
  return (
    <>
      <WebBanner text="입점신청" subText="마이페이지 > 입점신청" />

      <Wrapper>
        <InnerWrapper>
          <Title>Seller</Title>

          <InputBox>
            <p>스토어명</p>
            <Input />
          </InputBox>

          <InputBox>
            <p>사업자 등록증 사본</p>
            <FileInput />
          </InputBox>

          <InputBox>
            <p>
              대표자/사업자/법인 명의 <br />
              통장 사본 1부
            </p>
            <FileInput />
          </InputBox>

          <InputBox>
            <p>사이트 URL</p>
            <Input size="L" />
          </InputBox>
          <InputBox>
            <p>소셜미디어 URL</p>
            <Input size="L" />
          </InputBox>
        </InnerWrapper>

        <Button>확인</Button>
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
  padding-bottom: 5%;
  padding-top: 5%;
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    ${(props) => props.theme.fontStyles.text}
    width: 25%;
  }

  padding-bottom: 5%;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.buttonColor.brown};
  color: ${(props) => props.theme.colors.fontColor.white};
  ${(props) => props.theme.fontStyles.text}

  width: 10em;
  height: 7rem;

  border-radius: 2rem;

  margin-top: 5%;
`;

export default withAuth(StoreEntry, { block: pageBlock.UNAUTHENTICATED });
