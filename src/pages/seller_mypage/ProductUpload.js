import { styled } from "styled-components";
import Input from "../../components/input/Input";
import WebBanner from "../../components/banner/WebBanner";
import withAuth from "../../authHoc/WithAuth";
import { pageBlock } from "../../state/pageBlockState";
import FileInput from "../../components/input/FileInput";
import ItemCategoryInput from "../../components/input/ItemCategoryInput";
import { useState } from "react";

function ProductUpload() {
  /**{
  "product_name": "상품명",
  "description": "상품 설명",
  "price": 10000,
  "quantity": 10,
  "category": "상품 카테고리",
  "images": ["이미지 URL1", "이미지 URL2", ...]
  // 기타 상품 정보
} */

  const sizeSampleUrl = process.env.PUBLIC_URL + "/img/SizeSample.png";

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <WebBanner text="상품등록" subText="마이페이지 > 상품관리 > 상품등록" />

      <Wrapper>
        <InnerWrapper>
          <Title>기본정보</Title>

          <InputBox>
            <p>상품명</p>
            <Input />
          </InputBox>

          <InputBox>
            <p>판매가</p>
            <Input />
          </InputBox>

          <InputBox>
            <p>상품 개수</p>
            <Input />
          </InputBox>

          <InputBox>
            <p>상품 요약 설명</p>
            <Input size="L" />
          </InputBox>

          <FileBox>
            <p>상품 이미지</p>
            <FileInput />
          </FileBox>

          <FileBox>
            <p>상품 상세 설명</p>
            <FileInput />
          </FileBox>

          <FileBox>
            <p></p>
            <img
              style={{ width: "100%", paddingLeft: "23%" }}
              src={sizeSampleUrl}
              alt="SizeSample"
            />
          </FileBox>

          <FileBox>
            <p>상품 상세 사이즈</p>
            <FileInput />
          </FileBox>

          <FileBox>
            <p>상품 분류</p>
            <ItemCategoryInput onCategoryChange={handleCategoryChange} />
            {/* <div>선택한 카테고리: {selectedCategory}</div> */}
          </FileBox>
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

const FileBox = styled.div`
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

export default withAuth(ProductUpload, { block: pageBlock.UNAUTHENTICATED });
