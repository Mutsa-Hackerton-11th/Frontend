import { Link } from "react-router-dom";
import { styled } from "styled-components";
import KakaoLogin from "../../icons/socialLogin/KakaoLogin";

export default function LogIn() {
  return (
    <>
      <Banner>Banner</Banner>
      <Login_wrapper>
        <Login_box_wrapper>
          Seller
          <br />
          회원가입 / 로그인
          <KakaoLogin />
        </Login_box_wrapper>
        <Login_box_wrapper>
          Customer
          <br />
          회원가입 / 로그인
        </Login_box_wrapper>
      </Login_wrapper>
    </>
  );
}

const Login_wrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;

  display: flex;
  flex-direction: row;
`;

const Banner = styled.div`
  height: 20%;
`;
const Login_box_wrapper = styled.div`
  height: 50%;

  border: 1px solid red;
  background-color: #f9f1e7;
  border-radius: 15rem;
`;
