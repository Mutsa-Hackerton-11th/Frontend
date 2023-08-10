import { styled } from "styled-components";
import KakaoLogin from "../../icons/socialLogin/KakaoLogin";

import theme from "../../styles/theme";
import { useNavigate } from "react-router-dom/dist";
import WebBanner from "../../components/banner/WebBanner";

export default function LogIn() {
  const navigate = useNavigate();
  return (
    <LogIn_page_wrapper>
      <WebBanner text="로그인" subText="Home > 로그인" />

      <Login_wrapper>
        <Login_box_wrapper>
          <Login_box_Text>
            <p>Seller</p>
            <span>회원가입 / 로그인</span>
          </Login_box_Text>
          <button onClick={() => navigate("/kakakoLogin_temporal")}>
            <KakaoLogin />
          </button>
        </Login_box_wrapper>
        <Login_box_wrapper>
          <Login_box_Text>
            <p>Customer</p>
            <span>회원가입 / 로그인</span>
          </Login_box_Text>
          <button onClick={() => navigate("/kakakoLogin_temporal")}>
            <KakaoLogin />
          </button>
        </Login_box_wrapper>
      </Login_wrapper>
    </LogIn_page_wrapper>
  );
}

const Login_box_Text = styled.div`
  p {
    ${(props) => props.theme.fontStyles.subTitle}
  }
  span {
    ${(props) => props.theme.fontStyles.text}
  }
`;

const LogIn_page_wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Login_wrapper = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  padding-top: 5%;
`;
const Login_box_wrapper = styled.div`
  width: 30%;
  height: 30%;

  background-color: ${(props) => props.theme.colors.mainBackground};
  border-radius: 5rem;

  font-size: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 5%;
  padding-bottom: 5%;

  gap: 5rem;
`;
