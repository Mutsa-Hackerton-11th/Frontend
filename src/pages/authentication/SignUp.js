import { styled } from "styled-components";
import Input from "../../components/input/Input";
import WebBanner from "../../components/banner/WebBanner";
import withAuth from "../../authHoc/WithAuth";
import { pageBlock } from "../../state/pageBlockState";
import FileInput from "../../components/input/FileInput";
import ItemCategoryInput from "../../components/input/ItemCategoryInput";
import { useState } from "react";
function SignUp() {
  const sizeSampleUrl = process.env.PUBLIC_URL + "/img/SizeSample.png";

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const [selectedOption, setSelectedOption] = useState("Seller");

  // 라디오 버튼을 클릭했을 때 호출되는 함수입니다.
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <WebBanner text="회원가입" />

      <Wrapper>
        <InnerWrapper>
          <Title></Title>

          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              padding: "5rem",
              gap: "10rem",
            }}
          >
            <label
              style={{
                fontSize: "5rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                type="radio"
                value="Seller"
                checked={selectedOption === "Seller"}
                onChange={handleOptionChange}
              />
              Seller
            </label>
            <label
              style={{
                fontSize: "5rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                type="radio"
                value="Customer"
                checked={selectedOption === "Customer"}
                onChange={handleOptionChange}
              />
              Customer
            </label>
          </div>

          <InputBox>
            <p>이름</p>
            <Input />
          </InputBox>

          <InputBox>
            <p>주소</p>
            <Input />
            <button
              style={{
                width: "15rem",
                height: "8rem",
                backgroundColor: "#F4F5F7",
                borderRadius: "2rem",
                marginLeft: "3rem",
                fontSize: "2rem",
              }}
            >
              우편번호
            </button>
          </InputBox>
          <InputBox>
            <p></p>
            <Input size="L" />
          </InputBox>

          <InputBox>
            <p>휴대전화</p>
            <Input />
          </InputBox>

          <InputBox>
            <p>이메일</p>
            <Input />
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

export default withAuth(SignUp, { block: pageBlock.ACTIVATED });
