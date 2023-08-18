import { styled } from "styled-components";
import Kakao from "../../icons/share/Kakao";
import Instagram from "../../icons/share/Instagram";

export default function ProductDetailFooter({ mallName, category }) {
  return (
    <FooterWrapper>
      <FooterText>
        <div
          style={{
            width: "18%",
          }}
        >
          쇼핑몰
        </div>
        <div>: {mallName}</div>
      </FooterText>
      <FooterText>
        <div
          style={{
            width: "18%",
          }}
        >
          카테고리
        </div>
        <div>: {category}</div>
      </FooterText>
      <FooterText>
        <div
          style={{
            width: "18%",
          }}
        >
          공유
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>: {<Kakao />}</div>
        </div>
      </FooterText>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  padding: 3rem 0;
`;

const FooterText = styled.div`
  display: flex;
  div {
    ${(props) => props.theme.fontStyles.subText}
    color:${(props) => props.theme.colors.fontColor.gray}
  }
  margin-bottom: 1rem;
`;
