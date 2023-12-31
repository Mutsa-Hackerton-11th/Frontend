import { styled } from "styled-components";
import KakaoLogin from "../../icons/socialLogin/KakaoLogin";

import theme from "../../styles/theme";
import { useNavigate } from "react-router-dom/dist";
import WebBanner from "../../components/banner/WebBanner";
import withAuth from "../../authHoc/WithAuth";
import { pageBlock } from "../../state/pageBlockState";
import { useCallback } from "react";

function LogIn() {
  const navigate = useNavigate();
  const handleNavigateToKakaoLogin = useCallback(() => {
    //base url무시하고 카카오 로그인 페이지로 이동
    window.location.href =
      "https://kauth.kakao.com/oauth/authorize?client_id=a1a341e711531afc648d821e7e1129f9&redirect_uri=http://localhost:3000/login&response_type=code";
  }, [navigate]);

  return (
    <LogIn_page_wrapper>
      <WebBanner text="로그인" subText="Home > 로그인" />

      <Login_wrapper>
        <Login_box_wrapper>
          <Login_box_Text>
            <span>회원가입 / 로그인</span>
          </Login_box_Text>
          <button onClick={handleNavigateToKakaoLogin}>
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
  width: 40%;
  height: 40%;

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

export default withAuth(LogIn, { block: pageBlock.ACTIVATED });
