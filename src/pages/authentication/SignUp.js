import { styled } from "styled-components";
import Input from "../../components/input/Input";
import WebBanner from "../../components/banner/WebBanner";
import withAuth from "../../authHoc/WithAuth";
import { pageBlock } from "../../state/pageBlockState";
import FileInput from "../../components/input/FileInput";
import ItemCategoryInput from "../../components/input/ItemCategoryInput";
import { useState } from "react";
import axios from "axios";
import usePostSignUp from "../../apis/post/usePostSignUp";

function SignUp() {
  const sizeSampleUrl = process.env.PUBLIC_URL + "/img/SizeSample.png";
  const [selectedCategory, setSelectedCategory] = useState("");
  // 커스텀 훅을 사용함
  const { signUp, isLoading, isSuccess, error, data } = usePostSignUp();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const [selectedOption, setSelectedOption] = useState("Seller");

  // 라디오 버튼을 클릭했을 때 호출되는 함수
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  /**
name = 10자 이내 string
address = 글자 수 제한 없는 string
postal_code = 10자 이내 string
phone_number = 20자 이내 string
email = 20자 이내 string
 */

  //입력값 처리 state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSignUp = () => {
    const userData = {
      name: name,
      postal_code: postalCode,
      address: address,
      phone_number: phoneNumber,
      email: email,
    };

    const userType = selectedOption;

    //seller,customer에 따라 api url 다르게
    if (userType === "Seller") {
      //seller
      console.log(userData);
      signUp(userData);
    } else {
      //customer
    }
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
                fontSize: "3rem",
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
                fontSize: "3rem",
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
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </InputBox>

          <InputBox>
            <p>주소</p>
            <Input
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
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
            <Input
              size="L"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </InputBox>

          <InputBox>
            <p>휴대전화</p>
            <Input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </InputBox>

          <InputBox>
            <p>이메일</p>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </InputBox>
        </InnerWrapper>

        <Button onClick={handleSignUp}>확인</Button>
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
