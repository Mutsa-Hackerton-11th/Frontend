import { styled } from "styled-components";
import Input from "../../components/input/Input";
import WebBanner from "../../components/banner/WebBanner";
import withAuth from "../../authHoc/WithAuth";
import { pageBlock } from "../../state/pageBlockState";

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
            <p>상품 설명</p>
            <Input size="L" />
          </InputBox>

          <FileBox>
            <p>상품 이미지</p>
            <Input value="첨부파일" placeholder="첨부파일" size="L" />
            <label for="file">업로드</label>
            <input type="file" name="Img" />
          </FileBox>

          <InputBox>
            <p>상품 분류</p>
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

const FileBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    ${(props) => props.theme.fontStyles.text}
    width: 25%;
  }
  padding-bottom: 5%;

  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    color: #000000;
    background-color: ${(props) => props.theme.colors.buttonColor.gray};
    border-radius: 1rem;
    cursor: pointer;

    ${(props) => props.theme.fontStyles.text}

    margin-left: 5%;
    width: 15%;
    height: 7.5rem;
  }

  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
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
